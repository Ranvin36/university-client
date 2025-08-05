import './CourseDetail.css'
import Navbar from "../components/layout/Navbar.tsx"
import { useEffect, useState } from 'react';
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
import {IoIosClose} from "react-icons/io"
import {FaPeopleGroup} from "react-icons/fa6"

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios';
import { server } from '../server.ts';
import { useNavigate } from 'react-router-dom';
import { getData } from '../localStorage.tsx';
import Select, { MultiValue } from 'react-select';
import React from 'react';


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

export default function CourseDetail(){
    const navigation = useNavigate();
    const token = getData()

    const [navbar, setNavbar] = useState(false);
    const [isLecturer,setIsLecturer] = useState(0)
    const [showModel,setShowModel] = useState(false)
    const [activeCandidate,setActiveCandidate] = useState<any>({}) 
    const [students,setStudents] = useState<any>({}) 
    const [lecturers,setLecturers] = useState<any>({}) 
    const [value, setValue] = useState('1');
    const [selectedOptions, setSelectedOptions] = useState<MultiValue<{
        id: string;
        name: string;
      }> | null>(null);
    const [selectedLecturers, setSelectedLecturers] = useState<MultiValue<{
        id: string;
        name: string;
      }> | null>(null);
    const [course, setCourse] = useState<any>([])

    const router = useParams();
    const id = router.id   
        
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    console.log(activeCandidate, ": Active")

    async function getCourse(){
        try{
            const response = await axios.get(`${server}/courses/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            })
            console.log(response)
            setCourse(response.data)
        }
        catch(error){
            console.error("Error fetching course:", error);
        }
    }

    async function getStudents(){
        try{
            const response = await axios.get(`${server}/students/`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            })
            const formatted = response.data?.map((item) => ({
                id:item._id,
                name:item.name,
                value:item._id,
                label:item.name
            }))
            console.log(formatted)
            setStudents(formatted)
        }
        catch(error){
            console.error("Error fetching course:", error);
        }
    }

    async function getLecturers(){
        try{
            const response = await axios.get(`${server}/instructors/`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            })
            const formatted = response.data?.map((item) => ({
                id:item._id,
                name:item.name,
                value:item._id,
                label:item.name
            }))
            console.log(formatted)
            setLecturers(formatted)
        }
        catch(error){
            console.error("Error fetching course:", error);
        }
    }

    async function deleteCourse() {
        try {
            const response = await axios.delete(`${server}/courses/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(response.data);
            navigation('/courses');
        }
        catch (error) {
            console.error("Error deleting course:", error);
        }
    }
    async function deleteLecturer() {
        try {
            const data = {"courseId":course._id};
            console.log(data,activeCandidate["_id"])
            const response = await axios.post(`${server}/instructors/${activeCandidate["id"]}/remove-course`,data,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(response);
            navigation('/courses');
        }
        catch (error) {
            console.error("Error deleting course:", error);
        }
    }

    async function deleteStudent() {
        try {
            const data = {"courseId":course._id};
            console.log(data,activeCandidate["id"])
            const response = await axios.post(`${server}/students/${activeCandidate["id"]}/remove-course`,data,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(response);
            navigation('/courses');
        }
        catch (error) {
            console.error("Error deleting course:", error);
        }
    }

    async function addStudents(){
        console.log(selectedOptions)
        const studentsSelected = selectedOptions?.map(option => ({
            id: option.id,
            name: option.name
        })) || [];      

        try{
            const response = await axios.post(`${server}/students/${id}/enroll`,{"students":studentsSelected},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(response.data)
            window.location.reload()
        }
        catch(error){
            console.log(error)
        }
    }
    
    async function addLecturers(){
        const lecturerSelected = selectedLecturers?.map(option => ({
            id: option.id,
            name: option.name
        })) || [];      
        
        console.log(lecturerSelected)
        try{
            const response = await axios.post(`${server}/instructors/${id}/add-course`,{"instructors":lecturerSelected},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(response.data)
            window.location.reload()
        }
        catch(error){
            console.log(error)
        }
    }

    const expandCandidateDetails = (item:any,isLecturer:number) => {
        setActiveCandidate(item);
        setShowModel(true)
        if(isLecturer){
            setIsLecturer(1)
        }
    }
    
    const closeModel = () => {
        setIsLecturer(0)
        setShowModel(false)
    }

    useEffect(() => {
        getCourse();
    },[])

    useEffect(() => {
        getStudents()
    },[])
    useEffect(() => {
        getLecturers()
    },[])

    console.log(isLecturer)

    return(
        <div className="container-course">
            {showModel && <div className="overlay" onClick={closeModel}></div>}

            <div className="selectedCandidate" style={{right: showModel ? 0 : '-150%'}}>
                <div className="move" onClick={closeModel}>
                    <IoIosClose size={25} />
                </div>
                <div className="top">
                    <div className="selectedCandidateHeader">
                        <div className="iconBg">
                            <FaPeopleGroup size={50}/>
                        </div>
                        <div className="selectedCandidateName">
                            <h3>{activeCandidate["name"]}</h3>
                            <p>Instructor</p>
                        </div>
                    </div>
                    <div className="selectedCandidateDetails">
                        <p>Id - {activeCandidate["id"]}</p>
                        <p>Email - {activeCandidate["email"]}</p>
                        <p>Phone - {activeCandidate["phoneNumber"]}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="candidateAction" style={{backgroundColor:'#fff'}} onClick={isLecturer?deleteLecturer:deleteStudent}>
                        <a href="#" style={{color:"#000",textDecoration:"none"}}>Remove From Course</a>
                    </div>
                </div>
            </div>
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
                        <Greeting heading={course?.title} subheading={course?.department}/>
                        <div className="titleHeader">
                            <div className="optionsBg" onClick={deleteCourse}>
                                <a href='#'>Delete Course</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{border:'1px solid #272727',marginBottom:35}}/>
                <div className="jobDescription" style={{maxHeight:'420px'}}>
                    <div className="overlayBg" style={{
                        background: undefined
                    }}>
                    </div>
                    <h3>Course Description</h3>
                    <p>{course.description}</p>
                </div>
                <div className="candidates employees">
                        <Box sx={{ width: '100%' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: '#272727', marginBottom: -2}}>
                                <TabList onChange={handleChange}>
                                    <Tab label="Students" value="1" style={{color:"#fff"}} />
                                    <Tab label="Lecturers" value="2" style={{color:"#fff"}} />
                                </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <div className="shortlistedCandidates">
                                        <div className="mini-input" style={{width:350}}>
                                                <h3>Add Students</h3>
                                                <div style={{display:"flex",width:800,alignItems:"center"}}>
                                                    <div style={{width:450}}>
                                                    <Select
                                                        defaultValue={selectedOptions}
                                                        onChange={setSelectedOptions}
                                                        options={students || []}
                                                        isMulti
                                                        />
                                                        </div>
                                                    {selectedOptions && selectedOptions.length >0  &&                                                     
                                                        <div className="addStudentsBtn" style={{backgroundColor:'#fff',width:150,marginLeft:10}} onClick={addStudents}>
                                                            <a href="#" style={{color:"#000",textDecoration:"none"}}>Add Student</a>
                                                        </div>
                                                    }
                                                </div>
                                        </div>
                                        <div className="candidatesList">
                                            {course.students && course.students.length>0? course.students.map((employee) => (
                                                <Candidate key={employee.id} employee={employee} onClick={() => expandCandidateDetails(employee,0)} btnText="Manage Student"/>
                                            )
                                            ) : (   
                                                <p>No Students Enrolled</p>
                                            
                                            )}
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="2" color='#fff'>
                                    <div className="appliedCandidates">
                                        <div className="mini-input" style={{width:350}}>
                                                <h3>Add Lecturers</h3>
                                                <div style={{display:"flex",width:800,alignItems:"center"}}>
                                                    <div style={{width:450}}>
                                                    <Select
                                                        defaultValue={selectedLecturers}
                                                        onChange={setSelectedLecturers}
                                                        options={lecturers || []}
                                                        isMulti
                                                        />
                                                        </div>
                                                    {selectedLecturers && selectedLecturers.length >0  &&                                                     
                                                        <div className="addStudentsBtn" style={{backgroundColor:'#fff',width:150,marginLeft:10}} onClick={addLecturers}>
                                                            <a href="#" style={{color:"#000",textDecoration:"none"}}>Add Lecturer</a>
                                                        </div>
                                                    }
                                                </div>
                                        </div>
                                        <div className="candidatesList">
                                            {course.instructors && course.instructors.length? course.instructors.map((employee) => (
                                                <Candidate key={employee.id} employee={employee} onClick={() => expandCandidateDetails(employee,1)} btnText="Manage Lecturer"/>
                                            )
                                            ) : (   
                                                <p>No Lecturers Enrolled</p>
                                            
                                            )}
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabContext>
                            </Box>
                </div>
            </RightFlexLayout>
        </div>
    )
}