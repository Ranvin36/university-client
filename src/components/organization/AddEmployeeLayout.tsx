import "../../Pages/organization.css";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";
import InputField from "../ui/InputField.tsx";
// import a from "next/a";
import ModalLayout from "../layout/ModalLayout.tsx";

interface AddEmployeeLayoutProps {
  onClose: () => void;
}

const AddEmployeeLayout: React.FC<AddEmployeeLayoutProps> = ({ onClose}) => {
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [initialPassword, setInitialPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} color="#fff"/>
          </div>
          <div className="createInterviewText">
            <h3>Create New Student</h3>
          </div>
        </div>
      }
    >
      <div className="interviewBg">
        <div className="interviewData">
          <div className="interviewInputs">
            <InputField label="First Name" setInput={setFirstName} />
          </div>
          <div className="interviewInputs">
            <InputField label="Last Name" setInput={setLastName} />
          </div>
          <div className="interviewInputs">
            <InputField label="Position" setInput={setPosition} />
          </div>
          <div className="interviewInputs">
            <InputField label="Initial Password" setInput={setInitialPassword} />
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
              <div className="meetingBtn">
                <a href="/">Add Student</a>
              </div>
              <div className="meetingBtn" style={{ backgroundColor: "#fff"}}>
                <a href="/" style={{color: "#000"}}>Create & Send Email To Employee</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default AddEmployeeLayout;
