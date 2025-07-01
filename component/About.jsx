"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const AuthPage = () => {
    const [change, setChange] = useState("biography");

    const handleModeChange = (mode) => {
        setChange(mode);
    };

    const ch = "About Me"

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-400 mt-8 sm:mt-12 mb-8 sm:mb-16 text-center px-4'>
                {ch.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: index * 0.3 }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </p>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full lg:w-1/3 flex justify-center items-center order-2 lg:order-1">
                    <motion.img
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 2, delay: 1 }}
                        src="/poirtfolio.jpeg"
                        alt="Portfolio"
                        className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] object-cover rounded-xl"
                    />
                </div>

                <div className="w-full lg:w-2/3 order-1 lg:order-2">
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.2, x: -50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            onClick={() => handleModeChange("biography")}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base ${change === "biography" ? "bg-blue-500" : "bg-gray-700"
                                }`}
                        >
                            Biography
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.2, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            onClick={() => handleModeChange("education")}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base ${change === "education" ? "bg-blue-500" : "bg-gray-700"
                                }`}
                        >
                            Education
                        </motion.button>
                    </div>

                    <div className="bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl">
                        {change === "biography" ? (
                            <div className="flex flex-col gap-4 sm:gap-6 text-justify">
                                <motion.p
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 2.5 }}
                                    className="text-sm sm:text-base lg:text-lg leading-relaxed"
                                >
                                    Hello! I am a dedicated and enthusiastic B.Tech student with a deep passion for technology and development.
                                    My journey into the world of web development began with curiosity and has evolved into a strong proficiency
                                    in full stack development. I specialize in creating responsive, dynamic, and interactive websites using
                                    modern web technologies.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 3 }}
                                    className="text-sm sm:text-base lg:text-lg leading-relaxed"
                                >
                                    As a full stack web developer, I have hands-on experience working with front-end technologies like HTML, CSS,
                                    JavaScript, React.js, and Tailwind CSS. I ensure that every website I build is mobile-friendly, user-centric,
                                    and visually appealing. On the back end, I work with Node.js, Express.js, and MongoDB to develop robust,
                                    scalable APIs and databases that support the applications I create.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 3.5 }}
                                    className="text-sm sm:text-base lg:text-lg leading-relaxed"
                                >
                                    I'm particularly interested in building applications that offer both functionality and creativity. I enjoy using
                                    animations and smooth transitions to enhance user experience and make interfaces more engaging. Whether it's a
                                    portfolio, blog, or an e-commerce site, I strive to make every project not only efficient but also beautiful.
                                </motion.p>
                            </div>
                        ) : (
                            <div className="text-base sm:text-lg lg:text-xl text-gray-300 space-y-3 sm:space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: -50, x: -50, z: -20 }}
                                    animate={{ opacity: 1, y: 0, x: 0, z: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}>
                                    <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-red-400"><strong>Education:</strong></p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: -50, x: -50, z: -20 }}
                                    animate={{ opacity: 1, y: 0, x: 0, z: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="space-y-1 sm:space-y-2">
                                    <h1 className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-semibold">Secondary Education (2019-2020)</h1>
                                    <span className="text-sm sm:text-base">Grain Chamber Public School - CBSE</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: -50, x: -50, z: -20 }}
                                    animate={{ opacity: 1, y: 0, x: 0, z: 0 }}
                                    transition={{ duration: 1, delay: 2 }}
                                    className="space-y-1 sm:space-y-2">
                                    <p className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-semibold">Higher Secondary Education (2021-2022)</p>
                                    <span className="text-sm sm:text-base">Grain Chamber Public School - CBSE</span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: -50, x: -50, z: -20 }}
                                    animate={{ opacity: 1, y: 0, x: 0, z: 0 }}
                                    transition={{ duration: 1, delay: 3 }}
                                    className="space-y-1 sm:space-y-2">
                                    <p className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-semibold">B.Tech in Computer Science Engineering — AKTU</p>
                                    <p className="text-green-300 text-sm sm:text-base">Pursuing</p>
                                    <p className="text-sm sm:text-base">Graduation Year : 2026</p>
                                    <p className="text-sm sm:text-base">Relevant Courses: Data Structures, DBMS, Compiler Designing</p>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
