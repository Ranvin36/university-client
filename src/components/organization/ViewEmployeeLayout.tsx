import "../../Pages/organization.css";
import { RiUser6Line } from "react-icons/ri";
import InputField from "../ui/InputField";
import ModalLayout from "../layout/ModalLayout.tsx";
import { FaPeopleGroup } from "react-icons/fa6";

interface ViewInterviewLayoutProps {
employee: any;
  onClose: () => void;
}
// interface ViewInterviewLayoutProps {
//   position: string;
//   setPosition: (input: string) => void;
//   date: string;
//   setDate: (input: string) => void;
//   onClose: () => void;
//   employee: any;
// }

const questions = [
  "Explain the OOP concepts",
  "What is state management in Angular? How to implement",
  "How does routing work in Springboot?",
  "What is the difference between an array and a linkedlist?",
  "Who does Java work?"
];

const ViewInterviewLayout: React.FC<ViewInterviewLayoutProps> = ({ onClose,employee}) => {
  return (
    <ModalLayout
      onClose={onClose}
      header={
        <div className="createInterviewIcons">
          <div className="iconBg">
            <FaPeopleGroup size={20} color="#fff" />
          </div>
          <div className="createInterviewText">
            <h3>Virtual Interview - Ranvin Wickramasinghe</h3>
            <p>Intern Software Engineer</p>
          </div>
        </div>
      }
    >
      <div className="interviewBg">
        <div className="interviewData">
          <div className="interviewInput">
            <div className="interviewHeading">
              <h3>Top Skills</h3>
            </div>
            <div className="skills">
              <div className="skill">
                <p>OOP</p>
              </div>
              <div className="skill">
                <p>Java</p>
              </div>
              <div className="skill">
                <p>React</p>
              </div>
              <div className="skill">
                <p>Node</p>
              </div>
              <div className="skill">
                <p>SQL</p>
              </div>
            </div>
          </div>
          <div className="interviewInput" style={{ marginTop: 0 }}>
            <div className="interviewHeading">
              <h3>Criteria</h3>
            </div>
            <div className="skills" style={{ flexDirection: "column" }}>
              <div className="checkBox">
                <input type="checkbox" name="" id="" defaultChecked />
                <p>CV Questioning</p>
              </div>
              <div className="checkBox">
                <input type="checkbox" name="" id="" defaultChecked />
                <p>Easy-Medium Level Difficulty</p>
              </div>
              <div className="checkBox">
                <input type="checkbox" name="" id="" defaultChecked />
                <p>Summary of the interview</p>
              </div>
              <div className="checkBox">
                <input type="checkbox" name="" id="" defaultChecked />
                <p>record meeting</p>
              </div>
              <div className="checkBox">
                <input type="checkbox" name="" id="" defaultChecked />
                <p>detAIled questioning</p>
              </div>
            </div>
          </div>
          <div className="interviewHeading">
            <h3>Content</h3>
          </div>
          <div className="contentList">
            {questions.map((q, i) => (
              <div className="contentItem" key={i}>
                {i + 1}. {q.toUpperCase()}
              </div>
            ))}
          </div>
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
                <p>Cv Score - 80%</p>
                <p>Email Address - ranvin.789@gmail.com</p>
                <p>Phone Number -  0767544717</p>
                <p>Skills - react, angular, node, springboot, aws, gCP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ViewInterviewLayout;