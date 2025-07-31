import "../../Pages/organization.css";
import { LuUserRound } from "react-icons/lu";
import OrganizationBtn from "./OrganizationBtn.tsx";

interface CandidateProps {
    onClick: (employee: any) => void;
    btnText:string
    employee: any;
}

const Candidate: React.FC<CandidateProps> = ({ onClick, employee,btnText }) => {
    return (
        <div className="candidate">
            <div className="candidateDetails">
                <div className="detailk">
                    <input type="radio" />
                </div>
                <div className="detail">
                    <p>Ranvin Wickramasinghe</p>
                </div>
                <div className="detail" style={{ display: "flex" }}>
                    <LuUserRound color="#fff"/>
                    <p>Associate Software Engineer</p>
                </div>
            </div>
            <OrganizationBtn text={btnText} onClick={() => onClick(employee)}/>
        </div>
    );
};

export default Candidate; 