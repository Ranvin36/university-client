import  "../../Pages/dashboard.css"

interface RowProps {
    id: string
    title: string
    date: string
    candidates: string
}

export default function Row({ id, title, date, candidates }: RowProps) {
    return (
        <div className="row">
            <p>{id}</p>
            <p>{title}</p>
            <p>{date}</p>
            <p>{candidates}</p>
            <a href="/" className="link">View</a>
        </div>
    )
}
