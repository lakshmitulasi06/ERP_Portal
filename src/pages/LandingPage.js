import React, { useState } from "react";
import "./LandingPage.css";

export default function LandingPage({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    setError("");
    onLogin();
  };

    return (
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div
          className="landing-bg"
          style={{
            background: "url('/vihsnu.png') center/cover no-repeat",
            filter: "blur(10px) brightness(0.92)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        ></div>
        <div className="landing-container">
          <h1 className="landing-heading">Welcome to Digital ERP System College Portal</h1>
          <div className="login-box">
            <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
            </form>
            {error && <div className="error-msg">{error}</div>}
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span className="toggle-link" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? " Sign In" : " Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}