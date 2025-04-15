/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setIsAdmin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", color: "" });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      setMessage({ text: "Login Successful!", color: "text-green-500" });

      setTimeout(() => {
        setIsAdmin(true); // ✅ Set admin status to true
        navigate("/admin-dashboard"); // Redirect to Admin Dashboard
      }, 1500);
    } else {
      setMessage({ text: "Invalid Credentials!", color: "text-red-500" });
    }
  };

  return (
    <div className="flex justify-center items-start bg-[#171717] py-8">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-md w-96 mb-30">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">
          Admin Login
        </h2>

        {message.text && (
          <p className={`text-center font-semibold mb-4 ${message.color}`}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-700 bg-neutral-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border border-gray-700 bg-neutral-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFB302] text-gray font-normal py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 cursor-pointer mt-5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
