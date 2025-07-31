import "../../Pages/organization.css";
import { IoIosClose } from "react-icons/io";
import InputField, { TextAreaField } from "../ui/InputField.tsx";
import ModalLayout from "../layout/ModalLayout.tsx";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";

interface CreateJobLayoutProps {

  onClose: () => void;
}

const CreateJobLayout: React.FC<CreateJobLayoutProps> = ({ onClose }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobEligibility, setJobEligibility] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [date, setDate] = useState("");

  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} />
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
            <InputField label="Job Title" setInput={setJobTitle} />
          </div>
          <div className="interviewInputs">
            <TextAreaField setInput={setJobDescription} label="Job Description" />
          </div>
          <div className="interviewInputs">
            <TextAreaField setInput={setJobRequirements} label="Job Requirements" />
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
                <a href='/' style={{color:":#000"}}>Create New Job Opening</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default CreateJobLayout;