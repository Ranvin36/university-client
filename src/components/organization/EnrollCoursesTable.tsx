import React from "react";
import "./PaymentTable.css";

const EnrollCoursesTable = ({enrolledCourses}) => {
  console.log(enrolledCourses);
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
          {enrolledCourses && enrolledCourses.length>0 && enrolledCourses.map((payment,index) => (
            <tr key={index}>
              <td>{payment.courseId}</td>
              <td>{payment.courseName}</td>
              <td>N/A</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollCoursesTable;
