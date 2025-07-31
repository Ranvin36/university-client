import "../../Pages/organization.css";
import Select,{MultiValue} from 'react-select';
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";
import InputField from "../ui/InputField.tsx";
// import a from "next/a";
import ModalLayout from "../layout/ModalLayout.tsx";
import Dropdown from "../layout/Dropdown.tsx";

interface AddLecturerLayoutProps {
  onClose: () => void;
}

interface Option {
  value: string;
  label: string;
}

const options: Array<Option> = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' }
];

const AddLecturerLayout: React.FC<AddLecturerLayoutProps> = ({ onClose}) => {
  const [date, setDate] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(null);
  const [firstName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");
  const [email, setEmail] = useState("");

  function onSelect(){

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
            <h3>Create New Lecturer</h3>
          </div>
        </div>
      }
    >
      <div className="interviewBg">
        <div className="interviewData">
          <div className="interviewInputs">
            <InputField label="Full Name" setInput={setFullName} />
          </div>
          <div className="interviewInputs">
            <InputField label="Phone Number" setInput={setPosition} />
          </div>
          <div className="interviewInputs">
            <InputField label="Email Address" setInput={setEmail} />
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
                  <Dropdown options={["Computer Science","Software Engineering"]} placeholder="Select A Program" onSelect={onSelect}/>
                </div>
                <div className="mini-input" style={{width:350}}>
                  <h3>Select Courses</h3>
                      <Select
                        defaultValue={selectedOptions}
                        onChange={setSelectedOptions}
                        options={options}
                        isMulti
                      />
                </div>
              </div>
            </div>
            <div className="meetingBtns">
              <div className="meetingBtn" style={{ backgroundColor: "#fff"}}>
                <a href="/" style={{color: "#000"}}>Add Lecturer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default AddLecturerLayout;
