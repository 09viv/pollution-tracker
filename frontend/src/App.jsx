import Landingpage from "./landingpage";
import Navbar from "./header";
import Footer from "./footer";
import AdminNavbar from "./adminnavbar";
import AdminLogin from './adminLogin';
import Chatbot from "./Chatbot";
import React, { useState , useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Result from "./result"

const App = () => {
  // ✅ Retrieve stored login state from localStorage
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true"; 
  });

  // ✅ Update localStorage when isAdmin changes
  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin);
  }, [isAdmin]);

  return (
    <div>
      <Router>
        {isAdmin ? <AdminNavbar setIsAdmin={setIsAdmin} /> : <Navbar />}

        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/admin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
          <Route path="/admin-dashboard" element={<Landingpage />} />
          <Route path="/result" element={<Result />} />
        </Routes>

        <Chatbot />
        <Footer />
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
