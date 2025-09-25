import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Attendance from "./components/Attendance";
import ExamResults from "./components/ExamResults";
import FeesStructure from "./components/FeesStructure";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [section, setSection] = useState("chat");

  if (!loggedIn) {
    return <LandingPage onLogin={() => setLoggedIn(true)} />;
  }

  let content;
  switch (section) {
    case "attendance":
      content = <Attendance />;
      break;
    case "exam":
      content = <ExamResults />;
      break;
    case "fees":
      content = <FeesStructure />;
      break;
    default:
      content = <ChatBox />;
  }

  return (
    <div className="app-layout">
      <Sidebar current={section} onSelect={setSection} />
      <div className="main-content">{content}</div>
    </div>
  );
}

export default App;
