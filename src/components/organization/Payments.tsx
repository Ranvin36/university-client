import React from "react";
import "./PaymentTable.css";

const payments = [
  { id: 1, name: "Ranvin Wickramasinghe", amount: 100, date: "2025-07-30", status: "Paid" },
];

const PaymentTable = () => {
  return (
    <div className="payment-container">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.name}</td>
              <td>${payment.amount}</td>
              <td>{payment.date}</td>
              <td className={`status ${payment.status.toLowerCase()}`}>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
