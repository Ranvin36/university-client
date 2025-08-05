import { useEffect, useState } from "react"
import Navbar from "../components/layout/Navbar.tsx"
import "./organization.css"
import RightFlexLayout from "../components/layout/RightFlexLayout.tsx"
import Greeting from "../components/dashboard/greeting.tsx"
import CreateInterviewBtn from "../components/organization/OrganizationBtn.tsx"
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import Candidate from "../components/organization/Candidate.tsx";
import AddEmployeeLayout from "../components/organization/AddEmployeeLayout.tsx"
import { HiMiniBars3BottomLeft } from "react-icons/hi2"
import ViewEmployeeLayout from "../components/organization/ViewEmployeeLayout.tsx"
import { server } from "../server.ts"
import { getData } from "../localStorage.tsx"
import Spinner from "../components/ui/Spinner.tsx"
import React from "react"

export default function Page() {
    const token = getData();
    const [navbar, setNavbar] = useState(false)
    const [openModel, setOpenModel] = useState(false)
    const [viewEmployee, setViewEmployee] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [searchStudent, setSearchStudent] = useState("")
    const [selectedEmployee, setSelectedEmployee] = useState([])
    const [students,setStudents] = useState([])
    async function getStudents(){
        setIsLoading(true)
        try{
            const response = await axios.get(`${server}/students`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            setStudents(response.data)
            setIsLoading(false)
        }   
        catch(error) {  
            console.error("Error fetching students:", error);
            setIsLoading(false)
        }
    }
    
    async function searchStudents() {
        try{
            const response = await axios.get(`${server}/students/src?search=${searchStudent}`, {
                headers: {
                    Authorization: `Bearer ${token}`,       
                    "Content-Type": "application/json"  
            }})
            console.log(response.data)
            setStudents(response.data)
        }
        catch(error) {  
            console.error("Error fetching lecturers:", error);
        }
    }

    async function editEmployee(){
        setViewEmployee(false)
        setOpenModel(true)
    }

    function handleViewEmployee(employee: any) {
        setViewEmployee(true)
        setSelectedEmployee(employee)
    }

    function onClose(){
        setOpenModel(false)
        setViewEmployee(false)
        setSelectedEmployee([])
    }
    
    useEffect(() => {
        getStudents();
    },[])

    return (
        <div className="container">
            {(openModel || viewEmployee) && <div className="overlay"></div>}
            {openModel && <AddEmployeeLayout onClose={onClose} student={selectedEmployee}/>}
            {viewEmployee && <ViewEmployeeLayout onClose={onClose} employee={selectedEmployee} editEmployee={editEmployee} />}
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
                        <Greeting heading="Your Students" subheading="Manage Your Students" />
                        <CreateInterviewBtn text='Add Student' onClick={() => setOpenModel(true)} />
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
                                <input type="text" placeholder="Search Student By Name" onChange={(e) => setSearchStudent(e.target.value)}/>
                            </div>
                            <div className="search" onClick={searchStudents}>
                                <a href="#"><CiSearch /></a>
                            </div>
                        </div>

                        <div className="candidates">
                            {students && students.map((student:any) => (
                                <Candidate key={student._id} employee={student} onClick={handleViewEmployee} btnText="Manage Student"/>
                            ))}
                        </div>
                    </div>
            }
            </RightFlexLayout>
        </div>
    )
}