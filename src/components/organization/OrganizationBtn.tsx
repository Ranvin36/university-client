import "../../Pages/organization.css";

interface OrganizationBtnProps {
    onClick: () => void;
    text: string;
}

export default function OrganizationBtn({ onClick, text }: OrganizationBtnProps) {
    return (
        <div className="createInterview" onClick={onClick}>
            <a href='#'>{text}</a>
        </div>
    );
} 