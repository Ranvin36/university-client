import "../../Pages/organization.css";
import Select,{MultiValue} from 'react-select';
import InputField, { TextAreaField } from "../ui/InputField.tsx";
import ModalLayout from "../layout/ModalLayout.tsx";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";

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
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobEligibility, setJobEligibility] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [date, setDate] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(null);

  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} color="#fff"/>
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
            <InputField label="Course Name" setInput={setJobTitle} />
          </div>
          <div className="interviewInputs">
            <TextAreaField setInput={setJobDescription} label="Course Description" />
          </div>
          <div className="interviewInputs inputContainer">
                <h3 style={{marginBottom:10}}>Select Department</h3>
                <Select
                  defaultValue={selectedOptions}
                  onChange={setSelectedOptions}
                  options={options}
                  isMulti
                  />
          </div>
        </div>
        <div className="meetingDetails">
          <div className="horizontalLine"></div>
          <div className="meeting">
            <div className="meetingDetail">
              <div>
                <h2>Meeting details</h2>
              </div>
              <div>
                <div style={{ marginTop: -10 }}>
                  <InputField label="Date" setInput={setDate} />
                </div>
                <div style={{ marginTop: -15 }}>
                  <InputField label="Time" setInput={setDate} />
                </div>
              </div>
            </div>
            <div className="meetingBtns">
              <div className="meetingBtn" style={{ backgroundColor: "#000", color: "#000" }}>
                <a href='/' style={{color:":#000"}}>Create New Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default CreateJobLayout;