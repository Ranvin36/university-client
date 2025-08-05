import "../../Pages/organization.css";
import { LuUserRound } from "react-icons/lu";
import OrganizationBtn from "./OrganizationBtn.tsx";

interface CandidateProps {
    onClick: (employee: any) => void;
    btnText?:string
    employee: any;
}

const Candidate: React.FC<CandidateProps> = ({ onClick, employee,btnText }) => {
    return (
        <div className="candidate">
            <div className="candidateDetails">
                <div className="detailk" style={{marginRight:50}}>
                    <p>{employee._id}</p>
                </div>
                <div className="detail">
                    <p>{employee.name}</p>
                </div>
                <div className="detail" style={{ display: "flex" }}>
                    <LuUserRound color="#fff"/>
                    <p>{employee.email}</p>
                </div>
                <div className="detail">
                    <p>{employee.phoneNumber}</p>
                </div>
            </div>
            {btnText && 
            <OrganizationBtn text={btnText} onClick={() => onClick(employee)}/>
            }
        </div>
    );
};

export default Candidate; 