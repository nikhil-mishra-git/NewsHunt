import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isEmailExist = existingUsers.some(
      (user) => user.email === formData.email
    );

    if (isEmailExist) {
      toast.error("Email already registered!");
      return;
    }

    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("isLogin", "true");

    toast.success("Registration successful!");

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <BackButton />

      <ToastContainer position="top-center" theme="dark" />

      <div className="w-full max-w-md mx-auto mt-20 bg-zinc-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-red-500 text-center mb-6">
          NEWSHUNT Register
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded bg-zinc-600 text-white placeholder-white border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded bg-zinc-600 text-white placeholder-white border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-zinc-600 text-white placeholder-white border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition duration-200"
          >
            Create Account
          </button>
          <p className="text-center text-sm text-white mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-red-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;