import React from "react";
import "./PaymentTable.css";


const LecturerLayout = ({enrolledCourses}) => {
  return (
    <div className="payment-container">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.courseId}</td>
              <td>{payment.courseName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LecturerLayout;
