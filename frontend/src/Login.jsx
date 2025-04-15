/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      setMessage(`Welcome, ${res.data.username}`);
    } catch (err) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#171717]">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">
          Admin Login
        </h2>

        {message.text && (
          <p className={`text-center font-semibold mb-4 ${message.color}`}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
              onChange={handleChange} required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
              onChange={handleChange} required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1e8449] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
