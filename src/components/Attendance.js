
export default function Attendance() {
  return (
    <div className="content-box">
      <h2>Attendance Summary</h2>
      <table className="attendance-table" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1.5rem" }}>
        <thead>
          <tr style={{ background: "#f4f8fb" }}>
            <th style={{ padding: "0.7rem", borderBottom: "2px solid #2575fc" }}>Subject</th>
            <th style={{ padding: "0.7rem", borderBottom: "2px solid #2575fc" }}>Total Periods</th>
            <th style={{ padding: "0.7rem", borderBottom: "2px solid #2575fc" }}>Periods Present</th>
            <th style={{ padding: "0.7rem", borderBottom: "2px solid #2575fc" }}>Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {/* Data will be inserted here from database/user context */}
        </tbody>
        <tfoot>
          <tr style={{ background: "#f4f8fb", fontWeight: "bold" }}>
            <td colSpan={3} style={{ padding: "0.7rem", borderTop: "2px solid #2575fc" }}>Overall Attendance</td>
            <td style={{ padding: "0.7rem", borderTop: "2px solid #2575fc" }}>--%</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}