// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const login = (email, pass) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = pass.trim();

  const found = users.find(
    (u) => u.email === cleanEmail && u.password === cleanPass
  );

  if (!found) {
    toast.error("Invalid email or password!");
    return { success: false };
  }

  localStorage.setItem("currentUser", JSON.stringify(found));
  setUser(found);
  toast.success(`Welcome back, ${found.username}!`);
  return { success: true };
};


  const signup = (username, email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate email
  if (users.some(u => u.email === email.trim().toLowerCase())) {
    toast.error("Email already exists!");
    return { success: false };
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  toast.success("Account created successfully!");
  return { success: true };
};

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null); // navbar يتحدث فوراً
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
