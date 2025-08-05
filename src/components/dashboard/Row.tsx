import React from "react"
import  "../../Pages/dashboard.css"

interface RowProps {
    id: string
    title: string
    _id: string
    date: string
    candidates: string
}

export default function Row({ id, title, _id, date, candidates }: RowProps) {
    console.log(_id)
    return (
        <div className="row">
            <p>{id}</p>
            <p>{title}</p>
            <p>{date}</p>
            <p>{candidates}</p>
            <a href={`/courses/${_id}`} className="link">View</a>
        </div>
    )
}
