import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const CreateTrip = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/home-page.png')" }}
            />
            <div className="absolute inset-0 bg-black/70" />

            <Navbar />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="text-7xl mb-8"
                    >
                        🗺️
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide mb-6">
                        AI Trip Planner
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-4">
                        Our intelligent AI planner is being connected to this interface.
                    </p>
                    <p className="text-lg text-gray-400 mb-12">
                        Soon, you'll be able to create personalized Braj pilgrimage itineraries
                        powered by advanced AI — tailored to your interests, time, and budget.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold tracking-widest uppercase rounded-full shadow-lg cursor-default"
                        >
                            Coming Soon
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/home")}
                            className="px-10 py-4 border-2 border-white text-white font-semibold tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
                        >
                            Explore Destinations
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CreateTrip;
