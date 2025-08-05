import React from "react";
import "../../Pages/courses.css";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

interface JobOpeningCardProps {
    name: string;
    students: [];
    description: string,
    id: Number;
}

export default function JobOpeningCard({
    name,
    students,
    description,
    id
}: JobOpeningCardProps) {
    const navigate = useNavigate();
    return (
        <div className="jobOpening" onClick={() => navigate(`/courses/${id}`)} key={`${id}`}>
            <div className="jobOpeningHeader">
                <div className="jobOpeningHeaderLeft">
                    <PiSuitcaseSimpleLight size={20} color="#fff"/>
                </div>
            </div>
            <div className="positionApp">
                <h3>{name}</h3>
                <h1>{`${students.length}`}/<span>Students</span></h1>
            </div>
            <div className="jobOpeningDescription">
                <p>{description}</p>
            </div>
        </div>
    );
}