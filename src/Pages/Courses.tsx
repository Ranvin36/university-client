import { useState } from "react"
import Navbar from "../components/layout/Navbar.tsx"
import "./organization.css"
import "./courses.css"
import RightFlexLayout from "../components/layout/RightFlexLayout.tsx"
import Greeting from "../components/dashboard/greeting.tsx"
import CreateInterviewBtn from "../components/organization/OrganizationBtn.tsx"
import JobOpenings from '../components/DummyData/JobOpenings'
import { LuUserRound } from "react-icons/lu";
import Candidate from "../components/organization/Candidate.tsx";
import AddEmployeeLayout from "../components/organization/AddEmployeeLayout.tsx"
import { HiMiniBars3BottomLeft } from "react-icons/hi2"
import ViewEmployeeLayout from "../components/organization/ViewEmployeeLayout.tsx"
import JobOpeningCard from '../components/courses/JobOpeningCard.tsx'
import CreateJobLayout from "../components/courses/createCourseLayout.tsx"

export default function Courses() {
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
            {openModel && <CreateJobLayout onClose={() => setOpenModel(false)} />}
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
                        <Greeting heading="Your Courses" subheading="Manage Your Students" />
                        <CreateInterviewBtn text='Add Course' onClick={() => setOpenModel(true)} />
                    </div>
                </div>
                <hr style={{ border: "1px solid #272727", marginTop: -10 }} />

                <div className="employeesContainer">
                    <div className="selectAllBtn">
                        <div className="search-input">
                            <input type="text" placeholder="Search Course By Id" />
                        </div>
                        <div className="search">
                            <a href="#"><LuUserRound/></a>
                        </div>
                    </div>

                    <div className="jobOpenings">
                        {JobOpenings.map((job) => (
                            <JobOpeningCard
                                key={job.id}
                                id={job.id}
                                daysLeft={job.daysLeft}
                                position={job.position}
                                applicantsCount={job.applicantsCount}
                                description={job.description}
                            />
                        ))}
                    </div>
                </div>
            </RightFlexLayout>
        </div>
    )
}