import "../../Pages/organization.css";
import React from "react";
import Select, { MultiValue } from 'react-select';
import { FaPeopleGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";
import InputField from "../ui/InputField.tsx";
import ModalLayout from "../layout/ModalLayout.tsx";
import Dropdown from "../layout/Dropdown.tsx";
import axios from "axios";
import { server } from "../../server.ts";
import { getData } from "../../localStorage.tsx";
import Spinner from "../ui/Spinner.tsx";

interface AddLecturerLayoutProps {
  onClose: () => void;
  lecturer?: {
    _id:any,
    name:string,
    phoneNumber:number,
    email:string,
    program:string
  }
}

interface Option {
  value: string;
  label: string;
}

const AddLecturerLayout: React.FC<AddLecturerLayoutProps> = ({ onClose,lecturer }) => {
  const token = getData()
  const [selectedCourses, setSelectedCourses] = useState<MultiValue<Option> | null>(null);
  const [courses, setCourses] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [name, setname] = useState(lecturer?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(lecturer?.phoneNumber  || "");
  const [email, setEmail] = useState(lecturer?.email || "");
  const [program, setProgram] = useState(lecturer?.program || "");

  function onSelect(selected: string) {
    setProgram(selected);
  }

  async function handleAddLecturer() {
    setIsLoading(true)
    const coursesTaught = selectedCourses?.map((item:any) => ({
      courseId:item.courseId,
      courseName:item.courseName
    })) || []
    const data = {
      name,
      phoneNumber,
      email,
      "department":program,
      coursesTaught
    };

    try {
      let response;
      if(lecturer?._id){
        response = await axios.put(
          `${server}/instructors/${lecturer._id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );
      }
      else{
        response = await axios.post(
          `${server}/instructors`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );
      }
      console.log(response.data);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error adding lecturer:", error);
      // Optionally show error to user
    } finally {
      setIsLoading(false)
    }
  }

    async function getCourses(){
        setIsLoading(true)
        try{
            const response = await axios.get(`${server}/courses`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            const formatted = response.data.map((course:any) => ({
                courseId: course._id,
                courseName: course.title,
                value: course._id,  
                label: course.title 
              }))

            setCourses(formatted)
        }   
        catch(error) {  
            console.error("Error fetching students:", error);
        }
        finally {
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        getCourses()
    },[])

  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} color="#fff" />
          </div>
          <div className="createInterviewText">
            <h3>Create New Lecturer</h3>
          </div>
        </div>
      }
    >
      <div className="interviewBg">
        <div className="interviewData">
          <div className="interviewInputs">
            <InputField label="Full Name" setInput={setname} input={name} />
          </div>
          <div className="interviewInputs">
            <InputField label="Phone Number" setInput={setPhoneNumber} input={phoneNumber}/>
          </div>
          <div className="interviewInputs">
            <InputField label="Email Address" setInput={setEmail}input={email} />
          </div>
        </div>

        <div className="meetingDetails">
          <div className="horizontalLine"></div>
          <div className="meeting">
            <div className="meetingDetail">
              <div>
                <h2>Instructor details</h2>
              </div>
              <div>
                <div className="mini-input">
                  <h3>Program</h3>
                  <Dropdown options={["Computer Science", "Software Engineering"]} placeholder="Select A Program" onSelect={onSelect} />
                </div>
                <div className="mini-input" style={{ width: 350 }}>
                  <h3>Select Courses</h3>
                    <Select
                      defaultValue={selectedCourses}
                      onChange={setSelectedCourses}
                      options={courses}
                      isMulti
                    />
                </div>
              </div>
            </div>
            <div className="meetingBtns">
              {isLoading ? (
                <div className="meetingBtn" style={{ backgroundColor: "#fff" }}>
                  <Spinner color="#000" />
                </div>
              ) : lecturer?._id ? (
                <div className="meetingBtn" style={{ backgroundColor: "#fff" }} onClick={handleAddLecturer}>
                  <a href="#" style={{color:"#000"}}>Update Lecturer</a>
                </div>
              ) : (
                <div className="meetingBtn" style={{ backgroundColor: "#fff" }} onClick={handleAddLecturer}>
                  <a href="#" style={{color:"#000"}}>Add Lecturer</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default AddLecturerLayout;
