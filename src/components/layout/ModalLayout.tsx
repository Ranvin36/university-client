import  "../../Pages/organization.css";
import { IoIosClose } from "react-icons/io";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

interface ModalLayoutProps {
  onClose: () => void;
  children: React.ReactNode;
  header?: React.ReactNode
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ onClose, children, header }) => (
  <div className="createInterviewLayout">
    <div className="createInterviewSection">
      <div className="createInterviewHeader">
        {header}
        <div className={`closeInterview iconBg`} onClick={onClose}>
          <IoIosClose size={25} color="#fff" />
        </div>
      </div>
      <div className="createInterviewLine"></div>
    </div>
    {children}
  </div>
);

export default ModalLayout; 