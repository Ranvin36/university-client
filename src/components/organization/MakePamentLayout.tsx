import "../../Pages/organization.css";
import React from "react";
import Select,{MultiValue} from 'react-select';
import { FaPeopleGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";
import InputField, { TextAreaField } from "../ui/InputField.tsx";
// import a from "next/a";
import ModalLayout from "../layout/ModalLayout.tsx";
import Dropdown from "../layout/Dropdown.tsx";
import SearchableDropdown from "./SearchableDropdown.tsx";
import axios from "axios";
import { server } from "../../server.ts";
import { useNavigate } from "react-router-dom";
import { getData } from "../../localStorage.tsx";

interface AddEmployeeLayoutProps {
  onClose: () => void;
  employee:any
}

const MakePamentLayout: React.FC<AddEmployeeLayoutProps> = ({ onClose,employee}) => {
  const navigate = useNavigate();
  const token = getData()
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("");
  console.log(employee)

  async function createPayment(){
    const data = {amount,description}
     try{
        const response = await axios.post(`${server}/students/create-payment/${employee._id}`,data,{
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
          })

          console.log(response);
          onClose();
          navigate("/students");
          window.location.reload();

        }   
        catch(error) {  
            console.error("Error fetching students:", error);
        }
  }

  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} color="#fff"/>
          </div>
          <div className="createInterviewText">
            <h3>Create New Payment</h3>
          </div>
        </div>
      }
    >
      <div className="interviewBg">
        <div className="interviewData">
          <div className="interviewInputs">
            <InputField label="Amount" setInput={setAmount} input={amount} />
          </div>
          <div className="interviewInputs">
            <TextAreaField label="Description" setInput={setDescription} input={description}/>
          </div>
        </div>

        <div className="meetingDetails">
          <div className="horizontalLine"></div>
          <div className="meeting">
            <div className="meetingDetail">
              {/* <div>
                <h2>Enrollment details</h2>
              </div>
              <div>
                <div className="mini-input">
                  <h3>Program</h3>
                  <Dropdown options={["Computer Science","Software Engineering"]} placeholder="Select A Program" onSelect={onSelect}/>
                </div>
                <div className="mini-input" style={{width:350}}>
                  <h3>Select Courses</h3>
                      <Select
                        defaultValue={selectedOptions}
                        onChange={setSelectedOptions}
                        options={courses || []}
                        isMulti
                      />
                </div>
              </div> */}
            </div>
            <div className="meetingBtns">
              <div className="meetingBtn" style={{ backgroundColor: "#fff"}} onClick={createPayment}>
                <a href="#" style={{color: "#000"}}>Create Payment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default MakePamentLayout;
