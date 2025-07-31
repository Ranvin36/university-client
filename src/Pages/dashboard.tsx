import "./dashboard.css";
import Navbar from "../components/layout/Navbar.tsx";
import Stat from "../components/dashboard/Stat.tsx";
import Row from "../components/dashboard/Row.tsx";
// import UpcomingInterviewRow from "../components/interview/UpcomingInterviewRow";
import RightFlexLayout from "../components/layout/RightFlexLayout.tsx";
import Greeting from "../components/dashboard/greeting.tsx";

import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { useState } from "react";

export default function Dashboard() {
  const [navbar, setNavbar] = useState(true);

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
              statNumber="10"
              statDescription="20 candidates have already applied"
              icon={<PiSuitcaseSimpleLight size={20} color="#fff"/>}
            />
            <Stat
              statText="Lecturers"
              statNumber="5"
              statDescription="5 candidates have been shortlisted"
              icon={<PiSuitcaseSimpleLight size={20} color="#fff"/>}
            />
            <Stat
              statText="Courses"
              statNumber="10"
              statDescription="employees are currently working"
              icon={<PiSuitcaseSimpleLight size={20} color="#fff"/>}
            />
            <Stat
              statText="Departments"
              statNumber="2"
              statDescription="50 candidates have been screened"
              icon={<PiSuitcaseSimpleLight size={20} color="#fff"/>}
            />
          </div>

          <div className="candidateStats">
            <h2>Candidate Stats</h2>
            <div className="candidateStatsSection">
              <div className="candidateStatsCircle">
                <div className="circle">
                  <h3>25%</h3>
                </div>
                <div className="candidateStatsText">
                  <h3>Candidates Applied</h3>
                  <p>discover your profit and learn more about your business</p>
                </div>
              </div>
              <div className="candidateStatsCandidates">
                <Row id="#01" title="Software Engineer" date="06/15" candidates="25 candidates" />
                <div className="line"></div>
                <Row id="#02" title="Product Manager" date="06/20" candidates="18 candidates" />
                <div className="line"></div>
                <Row id="#03" title="UI/UX Designer" date="06/12" candidates="32 candidates" />
                <div className="line"></div>
                <Row id="#04" title="Data Analyst" date="06/18" candidates="20 candidates" />
                <div className="line"></div>
                <Row id="#05" title="DevOps Engineer" date="06/22" candidates="15 candidates" />
              </div>
            </div>
          </div>

          <div className="upcomingInterviews">
            <h2>Upcoming Interviews</h2>
            <div className="upcomingInterviewsSection">
              {/* <UpcomingInterviewRow
                id="#05"
                name="Ranvin Wickramasinghe"
                position="Intern Software Engineer"
                date="5th May"
                time="10:30AM"
              />
            </div>
            <div className="upcomingInterviewsSection">
              <UpcomingInterviewRow
                id="#05"
                name="Ranvin Wickramasinghe"
                position="Intern Software Engineer"
                date="5th May"
                time="10:30AM"
              /> */}
            </div>
          </div>
        </div>
      </RightFlexLayout>
    </div>
  );
}
