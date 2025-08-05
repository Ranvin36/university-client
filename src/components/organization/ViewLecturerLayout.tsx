import "../../Pages/organization.css";
import { RiUser6Line } from "react-icons/ri";
import InputField from "../ui/InputField";
import ModalLayout from "../layout/ModalLayout.tsx";
import { FaPeopleGroup } from "react-icons/fa6";
import PaymentTable from "./Payments.tsx";
import EnrollCoursesTable from "./EnrollCoursesTable.tsx";
import LecturerLayout from "./LecturerTable.tsx";
import axios from "axios";
import { server } from "../../server.ts";
import { getData } from "../../localStorage.tsx";

interface ViewInterviewLayoutProps {
  employee: any;
  onClose: () => void;
  editEmployee?: () => void;
}

const ViewLecturerLayout: React.FC<ViewInterviewLayoutProps> = ({ onClose,employee,editEmployee}) => {
   const token = getData()
   async function deleteLecturer() { 
    try {
      const response = await axios.delete(`${server}/instructors/${employee._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
      onClose();
    }
    catch (error) { 
      console.error("Error deleting employee:", error);
    }

  }
  
  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} color="#fff" />
          </div>
          <div className="createInterviewText">
            <h3>{employee.name}</h3>
            <p>ID - {employee._id}</p>
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
            <LecturerLayout enrolledCourses={employee.coursesTaught}/>
          </div>
        </div>
        <div className="meetingDetails">
          <div className="horizontalLine"></div>
          <div className="meeting">
            <div className="candidateLayout">
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <RiUser6Line size={30} />
                <h2>{employee.name}</h2>
              </div>
              <div className="candidateLayoutDetails">
                <p>Email Address - {employee.email}</p>
                <p>Phone Number -  {employee.phoneNumber}</p>
              </div>
            </div>
          <div className="meetingBtns">
              <div className="meetingBtn edit" onClick={editEmployee}>
                  <a href="#">Edit Lecturer</a>
              </div>
              <div className="meetingBtn" style={{ backgroundColor: "#fff" }} onClick={deleteLecturer}>
                  <a href="#" style={{color:"#000"}}>Delete Lecturer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ViewLecturerLayout;