import React, { useState } from "react";
import "./Section.css";
export default function SectionName() {
  const [regNo, setRegNo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="content-box">
      <h2>Fees Structure</h2>
      <form onSubmit={handleSubmit} style={{ margin: "2rem 0" }}>
        <label htmlFor="regNo" style={{ fontWeight: "bold", marginRight: "1rem" }}>
          Enter your Register Number:
        </label>
        <input
          id="regNo"
          type="text"
          value={regNo}
          onChange={e => setRegNo(e.target.value)}
          placeholder="e.g. 123456"
          style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ddd", marginRight: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1.2rem", borderRadius: "6px", background: "#2575fc", color: "#fff", border: "none", fontWeight: "bold" }}>
          View Fees Details
        </button>
      </form>
      {submitted && (
        <div style={{ marginTop: "2rem", background: "#f4f8fb", padding: "1.5rem", borderRadius: "8px", textAlign: "center" }}>
          <h3>Fees Details for Register Number: {regNo}</h3>
          <p><em>(Fees details will be displayed here once database is connected.)</em></p>
          <p style={{ marginTop: "1rem", color: "#d9534f", fontWeight: "bold" }}>
            If there is any due leftover, a call will be made to the respective parents and they will be intimated accordingly.
          </p>
        </div>
      )}
    </div>
  );
}