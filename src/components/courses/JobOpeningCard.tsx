import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { SlOptionsVertical } from 'react-icons/sl';
import "../../Pages/courses.css";
import { useNavigate } from 'react-router-dom';

interface JobOpeningCardProps {
    daysLeft: string;
    position: string;
    applicantsCount: string;
    description: string,
    id: string
}

export default function JobOpeningCard({
    daysLeft,
    position,
    applicantsCount,
    description,
    id
}: JobOpeningCardProps) {
    const navigate = useNavigate();
    return (
        <div className="jobOpening" onClick={() => navigate(`/job-openings/${id}`)}>
            <div className="jobOpeningHeader">
                <div className="jobOpeningHeaderLeft">
                    <PiSuitcaseSimpleLight size={20} color="#fff"/>
                </div>
            </div>
            <div className="positionApp">
                <h3>{position}</h3>
                <h1>{applicantsCount}/<span>Applicants</span></h1>
            </div>
            <div className="jobOpeningDescription">
                <p>{description}</p>
            </div>
        </div>
    );
}