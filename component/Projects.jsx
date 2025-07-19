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
        <div className='min-h-screen bg-black text-white px-4 sm:px-6 py-10'>
            <p className='text-4xl font-extrabold text-gray-400 mt-12 text-center'>
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


            <div className='flex flex-col md:flex-row gap-12 mt-20 justify-around items-center'>
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    className='bg-gray-800 rounded-2xl overflow-hidden w-full max-w-sm shadow-2xl'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 2, delay: 2.5 }}
                        src={images1[index1]}
                        alt="Project 1"
                        className='w-full h-[220px] object-fit'
                    />
                    <div className='p-6'>
                        <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Ai Powered Interviewer</h2>
                        <p className='text-sm sm:text-base text-gray-300'>
                            Our website offers a realistic interview experience powered by AI, simulating real-time conversations just like a human interviewer. After each interview, the AI analyzes your performance and provides detailed feedback to help you improve your skills and boost your confidence.
                        </p>
                    </div>
                    <div className=' flex justify-around items-center  gap-4 p-4 rounded-b-2xl'>
                        <a href="https://github.com/Sambhav09/Interviewer" target='_blank'>
                            <button className="flex items-center gap-2 text-white px-4 py-2 rounded bg-black hover:bg-gray-800 transition">
                                <Github /> Github
                            </button>
                        </a>
                        <a href="https://interviewer-nine.vercel.app/" target='_blank'>
                            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                                Try it here
                            </button>
                        </a>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    className='bg-gray-800 rounded-2xl overflow-hidden w-full max-w-sm shadow-2xl'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 2, delay: 2.5 }}
                        src={images2[index2]}
                        alt="Project 2"
                        className='w-full h-[220px] object-fit  '
                    />
                    <div className='p-6'>
                        <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Prompts</h2>
                        <p className='text-sm sm:text-base text-gray-300'>
                            Create, update, and delete your own prompts with ease. Secure authentication is handled using NextAuth, ensuring a personalized and safe user experience.
                        </p>
                    </div>
                    <div className=' flex justify-around items-center  gap-4 p-4 rounded-b-2xl'>
                        <a href="https://github.com/Sambhav09/Prompt" target='_blank'>
                            <button className="flex items-center gap-2 text-white px-4 py-2 rounded bg-black hover:bg-gray-800 transition">
                                <Github /> Github
                            </button>
                        </a>
                        <a href="https://prompt-sand.vercel.app/" target='_blank'>
                            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
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
