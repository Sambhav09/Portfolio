"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
    title,
    description,
    image,
    github,
    demo,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass rounded-3xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-white/20 transition-all duration-500"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    src={image}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                    alt={title}
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                        Featured
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                <div className="flex gap-4 mt-auto">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-xs font-bold transition-all"
                    >
                        <Github size={16} />
                        Code
                    </a>

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/20"
                        >
                            <ExternalLink size={16} />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "ChatCode",
            description:
                "A real-time collaborative chat and code editor platform built with the MERN stack and Socket.io, enabling room-based messaging and live code collaboration.",
            image: "/ChatCode.png",
            github: "https://github.com/Sambhav09/ChatCode", // Update if different
            demo: https://chat-code-q5j5.vercel.app,
        },
        {
            title: "AI Interviewer",
            description:
                "A realistic interview experience powered by AI, simulating real-time conversations. Features performance analysis and detailed feedback for improvement.",
            image: "/interviewer2.png",
            github: "https://github.com/Sambhav09/Interviewer",
            demo: null,
        },
        {
            title: "SpeakWise AI",
            description:
                "An AI-powered language learning mobile application built with React Native and Expo. Features real-time AI voice conversations using Stream Voice SDK, secure authentication with Clerk, global state management using Zustand, and a responsive NativeWind interface for an engaging speaking practice experience across Android and iOS.",
            image: "/SpeakWise.png",
            github: "https://github.com/Sambhav09/React-native-SpeakWise-AI", 
            demo: null,
        },
        {
            title: "Koenigsegg Gemera",
            description:
                "Built a scroll-driven animated website for the Koenigsegg Gemera using dynamic image transitions to create a cinematic scrolling experience.",
            image: "/koenisegg.png",
            github: "https://github.com/Sambhav09/-Koenigsegg-Gemera",
            demo: "https://koenigsegg-gemera-beta.vercel.app/",
        },
        {
            title: "Happn",
            description:
                "Developed a responsive clone of the Happn website using React and Framer Motion with smooth animations and an engaging modern UI.",
            image: "/happn.png",
            github: "https://github.com/Sambhav09/happn",
            demo: "https://happn-wheat.vercel.app/",
        },
        {
            title: "Valloura Chocolate",
            description:
                "Developed a premium chocolate landing page featuring smooth animations, interactive sections, and elegant visual effects for an immersive user experience.",
            image: "/veloura.png",
            github: "https://github.com/Sambhav09/valloura-chocolate",
            demo: "https://valloura-chocolate.vercel.app/",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase">
                        Selected <span className="text-blue-500">Works</span>
                    </h2>

                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
