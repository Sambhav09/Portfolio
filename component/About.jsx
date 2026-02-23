"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, GraduationCap, Briefcase, Calendar } from "lucide-react";

const About = () => {
    const [activeTab, setActiveTab] = useState("biography");

    const tabs = [
        { id: "biography", label: "Biography", icon: User },
        { id: "education", label: "Education", icon: GraduationCap },
    ];

    return (
        <section className="min-h-screen py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        About <span className="text-blue-500">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative glass rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                            <img
                                src="/poirtfolio.jpeg"
                                alt="About me"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                    </motion.div>

                    {/* Right: Content Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                    >
                        {/* Tab Switcher */}
                        <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl mb-8 w-fit">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === tab.id
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <tab.icon size={16} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="glass p-8 rounded-2xl min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {activeTab === "biography" ? (
                                    <motion.div
                                        key="bio"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-bold text-white">Who is <span className="text-blue-500">Sambhav?</span></h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Hello! I am a dedicated and enthusiastic B.Tech student with a deep passion for technology and development.
                                            My journey into the world of web development began with curiosity and has evolved into a strong proficiency
                                            in full stack development.
                                        </p>
                                        <p className="text-gray-400 leading-relaxed">
                                            As a full stack web developer, I have hands-on experience working with front-end technologies like HTML, CSS,
                                            JavaScript, React.js, and Tailwind CSS. I ensure that every website I build is mobile-friendly, user-centric,
                                            and visually appealing.
                                        </p>
                                        <p className="text-gray-400 leading-relaxed">
                                            On the back end, I work with Node.js, Express.js, and MongoDB to develop robust,
                                            scalable APIs and databases that support the applications I create.
                                        </p>
                                        <div className="flex gap-4 pt-4">
                                            <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                                <span className="block text-2xl font-bold text-blue-500">2026</span>
                                                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Graduation</span>
                                            </div>
                                            <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                                <span className="block text-2xl font-bold text-blue-500">10+</span>
                                                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Projects</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="edu"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-8"
                                    >
                                        <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
                                            <div className="relative">
                                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#030303]"></div>
                                                <div className="flex items-center gap-2 text-blue-500 text-sm font-bold mb-2">
                                                    <Calendar size={14} /> 2022 — Present
                                                </div>
                                                <h4 className="text-xl font-bold text-white uppercase tracking-tight">B.Tech in CSE</h4>
                                                <p className="text-gray-500 font-medium">AKTU (Pursuing)</p>
                                                <p className="text-gray-400 mt-2 text-sm">Relevant Courses: Data Structures, DBMS, Compiler Designing</p>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#030303]"></div>
                                                <div className="flex items-center gap-2 text-blue-500 text-sm font-bold mb-2">
                                                    <Calendar size={14} /> 2021 — 2022
                                                </div>
                                                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Higher Secondary</h4>
                                                <p className="text-gray-500 font-medium">Grain Chamber Public School - CBSE</p>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#030303]"></div>
                                                <div className="flex items-center gap-2 text-blue-500 text-sm font-bold mb-2">
                                                    <Calendar size={14} /> 2019 — 2020
                                                </div>
                                                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Secondary Education</h4>
                                                <p className="text-gray-500 font-medium">Grain Chamber Public School - CBSE</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
