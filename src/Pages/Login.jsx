import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const userMatch = storedUsers.find(
            (user) =>
                user.email === loginData.email && user.password === loginData.password
        );

        if (userMatch) {
            toast.success("Login successful!");
            localStorage.setItem("currentUser", JSON.stringify(userMatch));
            localStorage.setItem("isLogin", "true");
            setTimeout(() => {
                navigate("/profile");
            }, 500);
        } else {
            toast.error("Invalid email or password!");
        }
    };

    return (
        <div>
            <BackButton />
            <ToastContainer position="top-center" theme="dark" />

            <div className="w-full max-w-md mx-auto mt-20 bg-zinc-800 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-red-500 text-center mb-6">
                    NEWSHUNT Login
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-2 rounded bg-zinc-600 text-white placeholder-white border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 rounded bg-zinc-600 text-white placeholder-white border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition duration-200"
                    >
                        Login
                    </button>
                    <p className="text-center text-sm text-white mt-4">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-red-400 hover:underline">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
