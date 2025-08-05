import React from 'react';
import '../../Pages/dashboard.css';

interface StatProps {
    statText: string;
    statNumber: string | number;
    statDescription: string;
    icon: React.ReactNode;
}

const Stat: React.FC<StatProps> = ({ statText, statNumber, statDescription, icon }) => {
    return (
        <div className="stat">
            <div className="statText">
                <p>{statText}</p>
                <div className="bgIcon">
                    {icon}
                </div>
            </div>
            <div className="statNumber">
                <h2>{statNumber}</h2>
            </div>
            <div className="statDesc">
                <p>{statDescription}</p>
            </div>
        </div>
    );
};

export default Stat;