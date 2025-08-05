import "./dashboard.css";
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar.tsx";
import Stat from "../components/dashboard/Stat.tsx";
import Row from "../components/dashboard/Row.tsx";
// import UpcomingInterviewRow from "../components/interview/UpcomingInterviewRow";
import RightFlexLayout from "../components/layout/RightFlexLayout.tsx";
import Greeting from "../components/dashboard/greeting.tsx";

import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { useState } from "react";
import axios from "axios";
import { server } from "../server.ts";
import { getData, removeItem } from "../localStorage.tsx";

export default function Dashboard() {
  const token = getData()
  const [navbar, setNavbar] = useState(true);
  const [totalPayments, setTotalPayments] = useState<any>("")
  const [courses, setCourses] = useState<any>([])
  const [stats, setStats] = useState<any>({})

  async function getCourses(){
    try{
      const response = await axios.get(`${server}/courses/sort`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(response)
      setCourses(response.data)
    }
    catch(error){
      console.error("Error fetching courses:", error);
      // removeItem()
    }
  }

  async function getTotalPayments(){
    try{
      const response = await axios.get(`${server}/students/total-payments`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setTotalPayments(response.data.totalAmount)
    }
    catch(error){
      console.error("Error fetching payments:", error);
    }
  }

  async function getStats(){
    try{
      const response = await axios.get(`${server}/stats`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(response, " : Stats")
      setStats(response.data)
    }
    catch(error){
      console.error("Error fetching stats:", error);
    }
  }

  useEffect(() => {
    getCourses()
    getStats()
    getTotalPayments()
  },[])

  return (
    <div className="container">
      <div className="leftFlex">
        <Navbar setNavbar={setNavbar} navbar={navbar} />
      </div>
      <RightFlexLayout>
        <div className="contentContainer">
          {!navbar && (
            <div className="closeIcon" onClick={() => setNavbar(true)}>
              <HiMiniBars3BottomLeft size={15} />
            </div>
          )}

          <Greeting heading="Good Morning!" subheading="Ranvin Wickramasinghe" />

          <div className="statSection">
            <Stat
              statText="Students"
              statNumber={stats.studentCount || 0}
              statDescription="Students enrolled"
              icon={<PiSuitcaseSimpleLight size={20} color="#fff"/>}
            />
            <Stat
              statText="Lecturers"
              statNumber={stats.instructorCount || 0}
              statDescription="Lecturers teaching"
              icon={<PiSuitcaseSimpleLight size={20} color="#fff"/>}
            />
            <Stat
              statText="Courses"
              statNumber={stats.courseCount || 0}
              statDescription="Courses are currently available"
              icon={<PiSuitcaseSimpleLight size={20} color="#fff"/>}
            />
            <Stat
              statText="Payments"
              statNumber={stats.paymentCount || 0}
              statDescription="Payments have been made"
              icon={<PiSuitcaseSimpleLight size={20} color="#fff"/>}
            />
          </div>

          <div className="candidateStats">
            <h2>Dashboard Stats</h2>
            <div className="candidateStatsSection">
              <div className="candidateStatsCircle">
                <div className="circle">
                  <h3>{totalPayments}$</h3>
                </div>
                <div className="candidateStatsText">
                  <h3>Total Payments</h3>
                  <p>Discover your profit and learn more about your business</p>
                </div>
              </div>
              <div className="candidateStatsCandidates">
                {courses && courses.map((course:any,index:number) => (
                  <Row key={index} id={`${index + 1}`} _id={course._id} title={course.title} date="06/15" candidates={`${course.students.length} candidates`}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RightFlexLayout>
    </div>
  );
}
