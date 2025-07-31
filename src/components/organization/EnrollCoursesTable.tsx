import React from "react";
import "./PaymentTable.css";

const courses = [
  { id: 1, name: "Introduction To Programming", finalGrade:"N/A"},
  { id: 2, name: "Machine Learning & Data Mining", finalGrade:"80%"},
  { id: 3, name: "Software Development Group Project", finalGrade:"50%"},
];

const EnrollCoursesTable = () => {
  return (
    <div className="payment-container">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.name}</td>
              <td>{payment.finalGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollCoursesTable;
