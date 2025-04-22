import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import BackButton from "../Components/BackButton";

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const isLogin = localStorage.getItem("isLogin");

        if (!isLogin || isLogin === "false") {
            navigate("/login");
        }

    }, [navigate]);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.length > 0) {
            setUser(users[users.length - 1]);
        }
    }, []);

    const handleLogout = () => {
        localStorage.setItem("isLogin", "false");
        navigate("/login");
    };

    return (
        <>
            <BackButton />
            <div className="min-h-[65vh] text-white p-6">

                <div className="max-w-md mx-auto mt-10 bg-zinc-800 rounded-lg shadow-md p-8 text-center">
                    <FaUserCircle className="text-7xl mx-auto text-red-500 mb-4" />

                    <h2 className="text-2xl font-semibold mb-1">
                        {user?.name || "Guest User"}
                    </h2>
                    <p className="text-zinc-400 mb-6">{user?.email || "Not Logged In"}</p>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded font-semibold transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Profile;
