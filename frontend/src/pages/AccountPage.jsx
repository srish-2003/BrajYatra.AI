import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";

const AccountPage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/", { replace: true });
    };

    if (!user) return null;

    const initials = user.name
        ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
        : "?";

    const memberSince = user.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-IN", { year: "numeric", month: "long" })
        : "Recently";

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Hero strip */}
            <div className="h-48 bg-gradient-to-br from-amber-900/60 to-orange-900/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/home-page.png')] bg-cover bg-center opacity-20" />
            </div>

            {/* Back to Home */}
            <div className="max-w-2xl mx-auto px-6 pt-6">
                <Link to="/home">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400 transition-all text-sm"
                    >
                        ← Back to Home
                    </motion.button>
                </Link>
            </div>

            {/* Profile card */}
            <div className="max-w-2xl mx-auto px-6 -mt-2 relative z-10 pt-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
                >
                    {/* Avatar */}
                    <div className="flex flex-col items-center mb-8">
                        {user.avatar ? (
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-24 h-24 rounded-full border-4 border-amber-500/30 object-cover"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-3xl font-bold">
                                {initials}
                            </div>
                        )}
                        <h2 className="text-white text-2xl font-bold mt-4">{user.name}</h2>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                        <span className="mt-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs uppercase tracking-widest">
                            {user.authProvider === "google" ? "Google Account" : "Email Account"}
                        </span>
                    </div>

                    {/* Info */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Member Since</p>
                            <p className="text-white font-semibold">{memberSince}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Status</p>
                            <p className="text-green-400 font-semibold">Active Yatri</p>
                        </div>
                    </div>

                    {/* Logout */}
                    <motion.button
                        onClick={handleLogout}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition-all"
                    >
                        Log Out
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default AccountPage;
