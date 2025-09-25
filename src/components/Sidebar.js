import React from "react";
import "./Sidebar.css";

export default function Sidebar({ current, onSelect }) {
  const items = [
    { key: "chat", label: "ChatBox" },
    { key: "attendance", label: "Attendance" },
    { key: "exam", label: "Exam Result" },
    { key: "fees", label: "Fees Structure" },
  ];

  return (
    <div className="sidebar">
      {items.map(item => (
        <div
          key={item.key}
          className={`sidebar-item${current === item.key ? " active" : ""}`}
          onClick={() => onSelect(item.key)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}