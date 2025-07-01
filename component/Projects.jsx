"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github } from "lucide-react"

const Projects = () => {

    const images1 = ["/interviewer0.png", "/interviewer1.png", "/interviewer2.png", "/interviewer3.png", "/interviewer4.png"];
    const images2 = ["/prompt1.png", "/prompt2.png", "/prompt3.png", "/prompt4.png", "/prompt5.png"];

    const [index1, setindex1] = useState(0);
    const [index2, setindex2] = useState(0);

    const ch = "Projects"

    useEffect(() => {
        const first = setInterval(() => {
            setindex1((prevIndex) => (prevIndex + 1) % images1.length);
        }, 3000);
        const second = setInterval(() => {
            setindex2((prevIndex) => (prevIndex + 1) % images2.length);
        }, 3000);
    }, [])

    return (
        <div className='min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 overflow-x-hidden'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-400 mt-8 sm:mt-12 mb-8 sm:mb-16 lg:mb-20 text-center'>
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

            <div className='flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 mt-12 sm:mt-16 lg:mt-20 justify-center items-center max-w-7xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    className='bg-gray-800 rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 2, delay: 2.5 }}
                        src={images1[index1]}
                        alt="Project 1"
                        className='w-full h-48 sm:h-56 lg:h-64 object-cover'
                    />
                    <div className='p-4 sm:p-6 lg:p-8'>
                        <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4'>Ai Powered Interviewer</h2>
                        <p className='text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed'>
                            Our website offers a realistic interview experience powered by AI, simulating real-time conversations just like a human interviewer. After each interview, the AI analyzes your performance and provides detailed feedback to help you improve your skills and boost your confidence.
                        </p>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-around items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-b-2xl'>
                        <a href="https://github.com/Sambhav09/Interviewer" target='_blank' className='w-full sm:w-auto'>
                            <button className="flex items-center justify-center gap-2 text-white px-4 py-2 sm:py-3 rounded bg-black hover:bg-gray-800 transition w-full sm:w-auto text-sm sm:text-base">
                                <Github size={16} className="sm:w-5 sm:h-5" /> Github
                            </button>
                        </a>
                        <a href="https://interviewer-nine.vercel.app/" target='_blank' className='w-full sm:w-auto'>
                            <button className="px-4 py-2 sm:py-3 bg-black text-white rounded hover:bg-gray-800 transition w-full sm:w-auto text-sm sm:text-base">
                                Try it here
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    className='bg-gray-800 rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 2, delay: 2.5 }}
                        src={images2[index2]}
                        alt="Project 2"
                        className='w-full h-48 sm:h-56 lg:h-64 object-cover'
                    />
                    <div className='p-4 sm:p-6 lg:p-8'>
                        <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4'>Prompts</h2>
                        <p className='text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed'>
                            Create, update, and delete your own prompts with ease. Secure authentication is handled using NextAuth, ensuring a personalized and safe user experience.
                        </p>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-around items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-b-2xl'>
                        <a href="https://github.com/Sambhav09/Prompt" target='_blank' className='w-full sm:w-auto'>
                            <button className="flex items-center justify-center gap-2 text-white px-4 py-2 sm:py-3 rounded bg-black hover:bg-gray-800 transition w-full sm:w-auto text-sm sm:text-base">
                                <Github size={16} className="sm:w-5 sm:h-5" /> Github
                            </button>
                        </a>
                        <a href="https://prompt-sand.vercel.app/" target='_blank' className='w-full sm:w-auto'>
                            <button className="px-4 py-2 sm:py-3 bg-black text-white rounded hover:bg-gray-800 transition w-full sm:w-auto text-sm sm:text-base">
                                Try it here
                            </button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects
