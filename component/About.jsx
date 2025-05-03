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
            <p className='text-4xl font-extrabold text-gray-400 mt-12 mb-16 text-center'>
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
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 max-w-6xl mx-auto px-4">
                <div className="w-full md:w-1/3 sm:mr-28 flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 2, delay: 1 }}
                        src="/poirtfolio.jpeg"
                        alt="Portfolio"
                        className="w-full max-w-[300px] object-cover rounded-xl"
                    />
                </div>

                <div className="w-full md:w-2/3">
                    <div className="flex justify-center md:justify-start gap-4 mb-6">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.2, x: -50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            onClick={() => handleModeChange("biography")}
                            className={`px-6 py-2 rounded-lg transition ${change === "biography" ? "bg-blue-500" : "bg-gray-700"
                                }`}
                        >
                            Biography
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.2, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            onClick={() => handleModeChange("education")}
                            className={`px-6 py-2 rounded-lg transition ${change === "education" ? "bg-blue-500" : "bg-gray-700"
                                }`}
                        >
                            Education
                        </motion.button>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
                        {change === "biography" ? (
                            <div className="flex flex-col gap-6 text-justify">
                                <motion.p
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 2.5 }}
                                >
                                    Hello! I am a dedicated and enthusiastic B.Tech student with a deep passion for technology and development.
                                    My journey into the world of web development began with curiosity and has evolved into a strong proficiency
                                    in full stack development. I specialize in creating responsive, dynamic, and interactive websites using
                                    modern web technologies.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 3 }}>
                                    As a full stack web developer, I have hands-on experience working with front-end technologies like HTML, CSS,
                                    JavaScript, React.js, and Tailwind CSS. I ensure that every website I build is mobile-friendly, user-centric,
                                    and visually appealing. On the back end, I work with Node.js, Express.js, and MongoDB to develop robust,
                                    scalable APIs and databases that support the applications I create.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 3.5 }}>
                                    I’m particularly interested in building applications that offer both functionality and creativity. I enjoy using
                                    animations and smooth transitions to enhance user experience and make interfaces more engaging. Whether it's a
                                    portfolio, blog, or an e-commerce site, I strive to make every project not only efficient but also beautiful.
                                </motion.p>
                            </div>
                        ) : (
                            <div className="text-lg text-gray-300 space-y-2">
                                <p><strong>Education:</strong></p>
                                <p>B.Tech in Computer Science Engineering — AKTU </p>
                                <p>Graduation Year: 3rd Year</p>
                                <p>Relevant Courses: Data Structures, DBMS, Compiler Designing</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
