import "../../Pages/dashboard.css"

interface GreetingProps {
    heading: string;
    subheading: string;
}
const Greeting:React.FC<GreetingProps> = ({heading,subheading}) => {
    return(
        <div className="greeting">
            <h1>{heading}</h1>
            <h3>{subheading}</h3>
        </div>
    )
}

export default Greeting