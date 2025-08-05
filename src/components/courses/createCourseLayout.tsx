import "../../Pages/organization.css";
import Select, { MultiValue } from 'react-select';
import InputField, { TextAreaField } from "../ui/InputField.tsx";
import ModalLayout from "../layout/ModalLayout.tsx";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import { server } from "../../server.ts";
import Dropdown from "../layout/Dropdown.tsx";
import { getData } from "../../localStorage.tsx";

interface CreateJobLayoutProps {
  onClose: () => void;
}

interface Option {
  value: string;
  label: string;
}

const options: Array<Option> = [
  { value: 'School Of Computing', label: 'School Of Computing' },
  { value: 'School Of Business', label: 'School Of Business' }
];

const CreateJobLayout: React.FC<CreateJobLayoutProps> = ({ onClose }) => {
  const token = getData()
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [code, setCode] = useState("");
  const [credits, setCredits] = useState("");


  function onSelect(selected: string) {
    setDepartment(selected);
  }

  // Function to send request to server with token
  async function handleCreateCourse() {
    const data = {
      "title":courseName,
      "description":courseDescription,
      department,
      // department: department ? department.map(d => d.value) : [],
      code,
      credits,
    };

    try {
      const response = await axios.post(
        `${server}/courses`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error("Error creating course:", error);
      // Optionally show error to user
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
            <h3>Create New Course</h3>
          </div>
        </div>
      }
    >
      <div className="interviewBg">
        <div className="interviewData">
          <div className="interviewInputs">
            <InputField label="Course Name" setInput={setCourseName} />
          </div>
          <div className="interviewInputs">
            <TextAreaField setInput={setCourseDescription} label="Course Description" />
          </div>
          <div className="interviewInputs inputContainer">
            <h3 style={{ marginBottom: 10 }}>Select Department</h3>
             <Dropdown options={["Computer Science","Software Engineering"]} placeholder="Select A Program" onSelect={onSelect}/>

          </div>
        </div>
        <div className="meetingDetails">
          <div className="horizontalLine"></div>
          <div className="meeting">
            <div className="meetingDetail">
              <div>
                <h2>Course Details</h2>
              </div>
              <div>
                <div style={{ marginTop: -10 }}>
                  <InputField label="Code" setInput={setCode} />
                </div>
                <div style={{ marginTop: -15 }}>
                  <InputField label="Credits" setInput={setCredits} />
                </div>
              </div>
            </div>
            <div className="meetingBtns">
              <div className="meetingBtn" style={{ backgroundColor: "#fff", color: "#000" }} onClick={handleCreateCourse}>
                <a href="#" style={{ color: "#000" }}>Create Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default CreateJobLayout;