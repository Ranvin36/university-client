import React from "react";
import "./PaymentTable.css";



const PaymentTable = ({payments}) => {
  console.log(payments)
  return (
    <div className="payment-container">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments && payments.length>0 && payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.date}</td>
              <td>${payment.amount}</td>
              <td className={`status ${payment.status.toLowerCase()}`}>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
