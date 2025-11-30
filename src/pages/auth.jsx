// src/pages/auth.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { useAuth } from "./authcontext";


export default function Auth({ mode }) {

  const { signup, login } = useAuth();   // ← هنا فقط وليس داخل دوال
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // تحديد الشاشة Login أو Signup
  useEffect(() => {
    setActive(mode === "signup");
  }, [mode]);

  const initialClass = mode === "signup" ? "start-signup" : "";

  /* ================= SIGNUP ================= */
  const handleSignup = () => {
    const result = signup(name, email, password); // ← من AuthContext
    if (result.success) {
      setActive(false);
    }
  };

  /* ================= LOGIN ================= */
  const handleLogin = () => {
    const result = login(email, password); // ← من AuthContext
    if (result.success) {
      navigate("/home");
    }
  };

  return (
    <div className="auth-body">
      <div className={`auth-container ${active ? "active" : ""} ${initialClass}`}>

        {/* LOGIN */}
        <div className="form-container sign-in">
          <form>
            <h1>Welcome Back!</h1>
            <span>Enter your email and password</span>

            <input 
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input 
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button type="button" onClick={handleLogin}>
              Sign In
            </button>

            <p className="switch-link" onClick={()=>setActive(true)}>
              Don't have an account?
            </p>
          </form>
        </div>

        {/* SIGNUP */}
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <span>Use your email for registration</span>

            <input
              type="text"
              placeholder="Name"
              className="input-field"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button type="button" onClick={handleSignup}>
              Sign Up
            </button>

            <p className="switch-link" onClick={()=>setActive(false)}>
              Already have an account?
            </p>
          </form>
        </div>

        {/* PURPLE PANEL */}
        <div className="toggle-container">
          <div className="toggle">

            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your login information</p>

              <button className="link-btn" onClick={()=>setActive(false)}>
                Go to Login
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Create your account now and join us!</p>

              <button className="link-btn" onClick={()=>setActive(true)}>
                Go to Sign Up
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
