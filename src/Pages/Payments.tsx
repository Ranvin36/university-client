import { useState } from "react"
import Navbar from "../components/layout/Navbar.tsx"
import "./organization.css"
import RightFlexLayout from "../components/layout/RightFlexLayout.tsx"
import Greeting from "../components/dashboard/greeting.tsx"
import CreateInterviewBtn from "../components/organization/OrganizationBtn.tsx"
// import a from "next/a"
import { LuUserRound } from "react-icons/lu";
import Candidate from "../components/organization/Candidate.tsx";
import AddEmployeeLayout from "../components/organization/AddEmployeeLayout.tsx"
import { HiMiniBars3BottomLeft } from "react-icons/hi2"
import ViewEmployeeLayout from "../components/organization/ViewEmployeeLayout.tsx"
import Employees from "../components/DummyData/Employees"

export default function Payments() {
    const [navbar, setNavbar] = useState(false)
    const [openModel, setOpenModel] = useState(false)
    const [viewEmployee, setViewEmployee] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState([])

    function handleViewEmployee(employee: any) {
        setViewEmployee(true)
        setSelectedEmployee(employee)
    }

    return (
        <div className="container">
            {(openModel || viewEmployee) && <div className="overlay"></div>}
            {openModel && <AddEmployeeLayout onClose={() => setOpenModel(false)} />}
            {viewEmployee && <ViewEmployeeLayout onClose={() => setViewEmployee(false)} employee={selectedEmployee} />}
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
                        <Greeting heading="Payments To Be Made" subheading="Manage Your Payments" />
                        {/* <CreateInterviewBtn text='Add Lecturer' onClick={() => setOpenModel(true)} /> */}
                    </div>
                </div>
                <hr style={{ border: "1px solid #272727", marginTop: -10 }} />

                <div className="employeesContainer">
                    <div className="selectAllBtn">
                        <div className="search-input">
                            <input type="text" placeholder="Search Lecturer By Id" />
                        </div>
                        <div className="search">
                            <a href="#"><LuUserRound/></a>
                        </div>
                    </div>

                    <div className="candidates">
                        {Employees && Employees.map((employee) => (
                            <Candidate key={employee.id} employee={employee} onClick={handleViewEmployee} btnText="Manage Lecturer"/>
                        ))}
                    </div>
                </div>
            </RightFlexLayout>
        </div>
    )
}