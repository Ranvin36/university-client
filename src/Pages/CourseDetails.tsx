import './CourseDetail.css'
import Navbar from "../components/layout/Navbar.tsx"
import { useState } from 'react';
import RightFlexLayout from "../components/layout/RightFlexLayout.tsx"
import Greeting from "../components/dashboard/greeting.tsx"
import { SlOptionsVertical } from 'react-icons/sl';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Employees from "../components/DummyData/Employees"
import JobOpenings from '../components/DummyData/JobOpenings'
import { useParams } from 'react-router-dom';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import Candidates from "../components/DummyData/Candidates"
import Candidate from '../components/organization/Candidate.tsx';

export default function CourseDetail(){

    const [navbar, setNavbar] = useState(false);
    const [expandDescription,setExpandDescription] = useState(false)
    const [showModel,setShowModel] = useState(false)
    const [activeCandidate,setActiveCandidate] = useState<any>({}) 
    const router = useParams();
    const id = router.id   
    console.log(router)
    const interview = JobOpenings.filter((item:any) => item.id == id)
    const expandCandidateDetails = (item:any) => {
        setActiveCandidate(item);
        setShowModel(true)
    }
    
    const closeModel = () => {
        setShowModel(false)
    }
    let candidates:any;
    try{
        candidates = Candidates[id as keyof typeof Candidates];
    }
    catch(error){
        // handle error
    }

    console.log(interview)

    return(
        <div className="container-course">
            {showModel && <div className="overlayBg" onClick={closeModel}></div>}

            {/* <div className="selectedCandidate" style={{right: showModel ? 0 : '-150%'}}>
                <div className="move" onClick={closeModel}>
                    <IoIosClose size={25} />
                </div>
                <div className="top">
                    <div className="selectedCandidateHeader">
                        <div className="iconBg">
                            <FaPeopleGroup size={50}/>
                        </div>
                        <div className="selectedCandidateName">
                            <h3>{activeCandidate["candidateName"]}</h3>
                            <p>Intern Software Engineer</p>
                        </div>
                    </div>
                    <div className="selectedCandidateDetails">
                        <p>CV Score - {activeCandidate["cvScore"]}%</p>
                        <p>Email - {activeCandidate["email"]}</p>
                        <p>Phone - {activeCandidate["phoneNumber"]}</p>
                        <p>Resume - <a href="#">View Resume</a></p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="candidateAction">
                        <a href="/">Shortlist Candidate</a>
                    </div>
                    <div className="candidateAction" style={{backgroundColor:'#fff'}}>
                        <a href="/" style={{color:"#000"}}>Reject Candidate</a>
                    </div>
                </div>
            </div> */}
            <div className="leftFlex">
                <Navbar setNavbar={setNavbar} navbar={navbar}/>
            </div>
            <RightFlexLayout>
                <div className="contentContainer">
                    {!navbar &&                 
                        <div className="closeIcon" onClick={() => setNavbar(true)}>
                            <HiMiniBars3BottomLeft size={15} />
                        </div>
                    }       
                    <div className="header">
                        <Greeting heading={interview[0].position} subheading='Job Description'/>
                        <div className="titleHeader">
                            <div className="optionsBg">
                                <SlOptionsVertical className="optionsIcon" color='#000'/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{border:'1px solid #272727',marginBottom:35}}/>
                <div className="jobDescription" style={{maxHeight:!expandDescription ? '420px' : '100%'}}>
                    <div className="overlay" style={{
                        background: expandDescription ? "#1d1d1d17" : undefined
                    }}>
                        <div className="readMoreText">
                            <div className="readMoreTextContainer" onClick={() => setExpandDescription(!expandDescription)}>
                                <p>{expandDescription ? 'Read Less' : 'Read More'}</p>
                                <MdOutlineKeyboardArrowDown size={30} color='#fff' style={{marginTop:-22,transform:expandDescription ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                            </div>
                        </div>
                    </div>
                    <h3>Job Description</h3>
                    <p> Join our HR Management Systems team as a Software Engineering Intern. You'll work closely with senior engineers and HR professionals to build scalable solutions that power our internal tools – from employee onboarding and performance tracking to payroll automation and data visualization dashboards. You will gain hands-on experience in full-stack development and be part of a cross-functional agile team, contributing to real projects that impact thousands of users.</p>
                    <h3>Key Responsibilities</h3>
                    <p>Assist in developing web applications and APIs for internal HR tools.
                    Collaborate with UX designers to implement responsive and user-friendly interfaces.
                    Support in writing automated tests and debugging backend systems.
                    Participate in code reviews and sprint planning meetings.
                    Contribute to documentation and team knowledge-sharing.</p>
                    <h3>Required Skills</h3>
                    <ul>
                        <li>Basic understanding of web technologies (HTML, CSS, JavaScript)</li>
                        <li>Familiarity with React, Angular, or similar front-end frameworks</li>
                        <li>Knowledge of backend technologies like Node.js or .NET</li>
                        <li>Experience working with RESTful APIs</li>
                        <li>Understanding of Git and version control workflows</li>
                        <li>Strong problem-solving and communication skills</li>
                        <li>Ability to work collaboratively in an agile team environment</li>
                        <li>Attention to detail and eagerness to learn</li>
                    </ul>
                    <h3>What You'll Gain</h3>
                    <p>
                        As an intern, you'll gain practical experience with modern full-stack development tools and methodologies, exposure to real-world HR tech challenges, and mentorship from experienced engineers. You'll also enhance your technical portfolio, build meaningful relationships, and develop professional skills that will prepare you for a future career in software engineering.
                    </p>
                </div>
                <div className="candidates">
                    <div className="shortlistedCandidates">
                        <h3>Shortlisted Candidates</h3>
                        <div className="candidatesList">
                        {Employees && Employees.map((employee) => (
                            <Candidate key={employee.id} employee={employee} onClick={() => console.log("Clicked")} btnText="Manage Lecturer"/>
                        ))}
                        </div>
                    </div>
                    <div className="appliedCandidates">
                        <h3>Applied Candidates</h3>
                        <div className="candidatesList">
                        {Employees && Employees.map((employee) => (
                            <Candidate key={employee.id} employee={employee} onClick={() => console.log("Clicked")} btnText="Manage Lecturer"/>
                        ))}
                        </div>
                    </div>
                </div>
            </RightFlexLayout>
        </div>
    )
}