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

    const courses = [
    {
        name: "Introduction to Computer Science",
        description: "Learn the fundamentals of computer science including algorithms, data structures, and basic programming.",
        students: 120,
        id:1
    },
    {
        name: "Web Development Bootcamp",
        description: "Build full-stack web applications using HTML, CSS, JavaScript, Node.js, and MongoDB.",
        students: 95,
        id:2
    },
    {
        name: "Machine Learning Essentials",
        description: "Get hands-on with machine learning algorithms, Python libraries, and real-world datasets.",
        students: 60,
        id:3
    },
    {
        name: "Database Design",
        description: "Understand relational databases, SQL, ER modeling, and normalization.",
        students: 75,
        id:4
    },
    {
        name: "Software Engineering Principles",
        description: "Explore Agile methodologies, version control, testing strategies, and design patterns.",
        students: 88,
        id:5
    }
    ];


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
                        {courses.map((job) => (
                            <JobOpeningCard
                                key={job.id}
                                id={job.id}
                                name={job.name}
                                students={job.students}
                                description={job.description}
                            />
                        ))}
                    </div>
                </div>
            </RightFlexLayout>
        </div>
    )
}