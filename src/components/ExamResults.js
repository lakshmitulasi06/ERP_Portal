import React, { useState } from "react";
import "./Section.css";

export default function ExamResults() {
  const [regNo, setRegNo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="content-box">
      <h2>Exam Results</h2>
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
          View Results
        </button>
      </form>
      {submitted && (
        <div style={{ marginTop: "2rem", background: "#f4f8fb", padding: "1.5rem", borderRadius: "8px", textAlign: "center" }}>
          <h3>Results for Register Number: {regNo}</h3>
          <p><em>(Results will be displayed here once database is connected.)</em></p>
          <p style={{ marginTop: "1rem", color: "#128c7e", fontWeight: "bold" }}>
            Your results will be automatically messaged to your WhatsApp number.
          </p>
        </div>
      )}
    </div>
  );
}