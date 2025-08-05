import { useEffect, useState } from "react"
import Navbar from "../components/layout/Navbar.tsx"
import "./organization.css"
import RightFlexLayout from "../components/layout/RightFlexLayout.tsx"
import Greeting from "../components/dashboard/greeting.tsx"
import CreateInterviewBtn from "../components/organization/OrganizationBtn.tsx"
// import a from "next/a"
import { CiSearch } from "react-icons/ci";
import Candidate from "../components/organization/Candidate.tsx";
import AddEmployeeLayout from "../components/organization/AddEmployeeLayout.tsx"
import { HiMiniBars3BottomLeft } from "react-icons/hi2"
import ViewEmployeeLayout from "../components/organization/ViewEmployeeLayout.tsx"
import Employees from "../components/DummyData/Employees"
import AddLecturerLayout from "../components/organization/AddLecturerLayout.tsx"
import ViewLecturerLayout from "../components/organization/ViewLecturerLayout.tsx"
import axios from "axios"
import { server } from "../server.ts"
import { getData } from "../localStorage.tsx"
import Spinner from "../components/ui/Spinner.tsx"
import React from "react"

export default function Lecturers() {
    const token = getData()
    const [navbar, setNavbar] = useState(false)
    const [openModel, setOpenModel] = useState(false)
    const [viewEmployee, setViewEmployee] = useState(false)
    const [searchLecturer, setSearchLecturer] = useState("")
    const [selectedEmployee, setSelectedEmployee] = useState([])
    const [lecturers, setLecturers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    function handleViewEmployee(employee: any) {
        setViewEmployee(true)
        setSelectedEmployee(employee)
    }

    async function getLecturers() {
        setIsLoading(true)
        try{
            const response = await axios.get(`${server}/instructors`, {
                headers: {
                    Authorization: `Bearer ${token}`,       
                    "Content-Type": "application/json"  
            }})

            setLecturers(response.data)
            setIsLoading(false)
        }
        catch(error) {  
            console.error("Error fetching lecturers:", error);
            setIsLoading(false)
        }
    }

    async function searchLecturers() {
        setIsLoading(true)
        try{
            const response = await axios.get(`${server}/instructors/src?search=${searchLecturer}`, {
                headers: {
                    Authorization: `Bearer ${token}`,       
                    "Content-Type": "application/json"  
            }})
            setLecturers(response.data)
            setIsLoading(false)
        }
        catch(error) {  
            console.error("Error fetching lecturers:", error);
            setIsLoading(false)
        }
    }

    async function editEmployee(){
        setViewEmployee(false)
        setOpenModel(true)
    }

    function onClose(){
        setOpenModel(false)
        setViewEmployee(false)
        setSelectedEmployee([])
    }

    useEffect(() => {
        getLecturers();
    },[])

    return (
        <div className="container">
            {(openModel || viewEmployee) && <div className="overlay"></div>}
            {openModel && <AddLecturerLayout onClose={onClose} lecturer={selectedEmployee} />}
            {viewEmployee && <ViewLecturerLayout onClose={onClose} employee={selectedEmployee} editEmployee={editEmployee} />}
            <div className="leftFlex">
                <Navbar setNavbar={setNavbar} navbar={navbar} />
            </div>
            <RightFlexLayout>
                <div style={{ padding: "40px 50px" }}>
                    {!navbar &&
                        <div className="closeIcon" onClick={() => setNavbar(true)}>
                            <HiMiniBars3BottomLeft size={15} />
                        </div>
                    }
                    <div className="header">
                        <Greeting heading="Your Lecturers" subheading="Manage Your Lecturers" />
                        <CreateInterviewBtn text='Add Lecturer' onClick={() => setOpenModel(true)} />
                    </div>
                </div>
                <hr style={{ border: "1px solid #272727", marginTop: -10 }} />

                {isLoading ?                  
                    <div className="loading">
                        <Spinner color="#fff"/>
                    </div>
                        :
                    <div className="employeesContainer">
                        <div className="selectAllBtn">
                            <div className="search-input">
                                <input type="text" placeholder="Search Lecturer By Name" onChange={(e) => setSearchLecturer(e.target.value)} />
                            </div>
                            <div className="search" onClick={searchLecturers}>
                                <a href="#"><CiSearch /></a>
                            </div>
                        </div>

                        <div className="candidates">
                            {lecturers && lecturers.map((lecturer:any) => (
                                <Candidate key={lecturer.id} employee={lecturer} onClick={handleViewEmployee} btnText="Manage Lecturer"/>
                            ))}
                        </div>
                    </div>
                }
            </RightFlexLayout>
        </div>
    )
}