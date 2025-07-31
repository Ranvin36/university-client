import "../../Pages/organization.css";
import { RiUser6Line } from "react-icons/ri";
import InputField from "../ui/InputField";
import ModalLayout from "../layout/ModalLayout.tsx";
import { FaPeopleGroup } from "react-icons/fa6";
import PaymentTable from "./Payments.tsx";
import EnrollCoursesTable from "./EnrollCoursesTable.tsx";
import LecturerLayout from "./LecturerTable.tsx";

interface ViewInterviewLayoutProps {
employee: any;
  onClose: () => void;
}

const courses = [
  { id: 1, name: "Introduction To Programming"},
  { id: 2, name: "Machine Learning & Data Mining"},
  { id: 3, name: "Software Development Group Project"},
];


const ViewLecturerLayout: React.FC<ViewInterviewLayoutProps> = ({ onClose,employee}) => {
  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} color="#fff" />
          </div>
          <div className="createInterviewText">
            <h3>Ranvin Wickramasinghe</h3>
            <p>IIT ID - 20221587</p>
          </div>
        </div>
      }
    >
      <div className="interviewBg">
        <div className="interviewData">
          <div className="interviewInput">
            <div className="interviewHeading">
              <h3>Enrolled  Courses</h3>
            </div>
            <LecturerLayout enrolledCourses={courses}/>
          </div>
          {/* <div className="interviewInput" style={{ marginTop: 0 }}>
            <div className="interviewHeading">
              <h3>Payments</h3>
            </div>
            <LecturerLayout enrolledCourses={courses}/>
          </div> */}
        </div>
        <div className="meetingDetails">
          <div className="horizontalLine"></div>
          <div className="meeting">
            <div className="candidateLayout">
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <RiUser6Line size={30} />
                <h2>Ranvin Wickramasinghe</h2>
              </div>
              <div className="candidateLayoutDetails">
                <p>Email Address - ranvin.789@gmail.com</p>
                <p>Phone Number -  0767544717</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ViewLecturerLayout;