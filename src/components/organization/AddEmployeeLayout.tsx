import "../../Pages/organization.css";
import Select, { MultiValue } from 'react-select';
import { FaPeopleGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";
import InputField from "../ui/InputField.tsx";
import ModalLayout from "../layout/ModalLayout.tsx";
import Dropdown from "../layout/Dropdown.tsx";
import axios from "axios";
import { server } from "../../server.ts";
import { useNavigate } from "react-router-dom";
import { getData } from "../../localStorage.tsx";
import React from "react";
import Spinner from "../ui/Spinner.tsx";

interface CourseOption {
  courseId: string;
  courseName: string;
  value: string;
  label: string;
}

interface AddEmployeeLayoutProps {
  onClose: () => void;
  student?: {
    _id: string;
    name: string;
    phoneNumber: number;
    email: string;
    level: string;
    program: string;
    enrolledCourses: {
      courseId: string;
      courseName: string;
    }[];
  };
}

const AddEmployeeLayout: React.FC<AddEmployeeLayoutProps> = ({ onClose, student }) => {
  const navigate = useNavigate();
  const token = getData();
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<CourseOption> | null>(null);
  const [courses, setCourses] = useState<CourseOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [fullName, setFullName] = useState(student?.name || "");
  const [phoneNumber, setphoneNumber] = useState(student?.phoneNumber || "");
  const [level, setLevel] = useState(student?.level || "");
  const [email, setEmail] = useState(student?.email || "");
  const [program, setSelectedProgram] = useState(student?.program || "");

  function onSelect(item: string) {
    setSelectedProgram(item);
  }

  async function getCourses() {
    try {
      const response = await axios.get(`${server}/courses`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      const formatted = response.data.map((course: any) => ({
        courseId: course._id,
        courseName: course.title,
        value: course._id,
        label: course.title
      }));
      
      setCourses(formatted);
      
      // Prefill selected courses for edit mode
      if (student && student.enrolledCourses) {
        const preSelected = formatted.filter(c =>
          student.enrolledCourses.some(ec => ec.courseId === c.courseId)
        );
        setSelectedOptions(preSelected);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }
  
  async function handleSubmit() {
    setIsLoading(true);
    const selectedCourses = selectedOptions?.map(option => ({
      courseId: option.courseId,
      courseName: option.courseName
    })) || [];

    const data = {
      name: fullName,
      phoneNumber,
      email,
      level,
      program,
      enrolledCourses: selectedCourses
    };

    try {
      let response;
      if (student?._id) {
        console.log(data , " : ID")
        response = await axios.put(`${server}/students/${student._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });
      } else {
        console.log(data , " : DATA")
        response = await axios.post(`${server}/students`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });
      }

      console.log(response);
      onClose();
      window.location.reload(); 
    } catch (error) {
      console.error("Error saving student:", error);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} color="#fff" />
          </div>
          <div className="createInterviewText">
            <h3>{student && student._id ? "Edit Student" : "Create New Student"}</h3>
          </div>
        </div>
      }
    >
      <div className="interviewBg">
        <div className="interviewData">
          <div className="interviewInputs">
            <InputField label="Full Name" setInput={setFullName}  input={fullName}/>
          </div>
          <div className="interviewInputs">
            <InputField label="Number" setInput={setphoneNumber} input={phoneNumber}/>
          </div>
          <div className="interviewInputs">
            <InputField label="Email Address" setInput={setEmail} input={email}/>
          </div>
          <div className="interviewInputs">
            <InputField label="Level" setInput={setLevel} input={level} />
          </div>
        </div>

        <div className="meetingDetails">
          <div className="horizontalLine"></div>
          <div className="meeting">
            <div className="meetingDetail">
              <div>
                <h2>Enrollment details</h2>
              </div>
              <div>
                <div className="mini-input">
                  <h3>Program</h3>
                  <Dropdown
                    options={["Computer Science", "Software Engineering"]}
                    placeholder="Select A Program"
                    onSelect={onSelect}
                  />
                </div>
                <div className="mini-input" style={{ width: 350 }}>
                  <h3>Select Courses</h3>
                    <Select
                      defaultValue={selectedOptions}
                      onChange={setSelectedOptions}
                      options={courses}
                      isMulti
                    />
                </div>
              </div>
            </div>
            <div className="meetingBtns">
              {isLoading ? (
                  <div
                    className="meetingBtn"
                    style={{ backgroundColor: "#fff" }}
                    onClick={handleSubmit}
                  >
                  <Spinner color="#000" />
                </div>
              ) : (
                <div
                  className="meetingBtn"
                  style={{ backgroundColor: "#fff" }}
                  onClick={handleSubmit}
                >
                <a href="#" style={{ color: "#000" }}>
                  {student && student._id ? "Update Student" : "Add Student"}
                </a>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default AddEmployeeLayout;
