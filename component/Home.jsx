"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
    const name = "Sambhav Jain"

    return (
        <div className='min-h-screen flex flex-col lg:flex-row bg-black overflow-x-hidden'>
            {/* Left Column (Content) */}
            <div className='w-full lg:w-1/2 h-screen flex flex-col justify-center items-start gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-16 xl:px-32'>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='text-xl sm:text-2xl lg:text-3xl text-gray-500'>Hello I'm</motion.p>

                <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-400 text-center lg:text-left'>
                    {name.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 10, x: 10, z: 10 }}
                            animate={{ opacity: 1, y: 0, x: 0, z: 0 }}
                            transition={{ duration: 2, delay: index * 0.15, ease: "easeInOut" }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </p>
                <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-500 text-center lg:text-left'>
                    Full stack Web Developer
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 text-center lg:text-left leading-relaxed'>
                    I'm a full stack web developer with the ability to build fully functional, responsive, and animated websites from start to finish. I specialize in both frontend and backend development, ensuring seamless user experiences and efficient performance across all devices.
                </motion.h2>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 justify-center lg:justify-start items-center w-full'>
                    <a href="#projects" className='w-full sm:w-auto'>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-500 border-4 border-gray-700 text-white text-sm sm:text-base lg:text-lg hover:bg-gray-600 transition-all duration-300'>
                            My work
                        </motion.button>
                    </a>
                    <a href="#contact" className='w-full sm:w-auto'>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-500 border-4 border-gray-700 text-white text-sm sm:text-base lg:text-lg hover:bg-gray-600 transition-all duration-300'>
                            Get in touch
                        </motion.button>
                    </a>
                </div>
            </div>

            {/* Right Column (Image) */}
            <div className='w-full lg:w-1/2 h-screen flex justify-center items-center bg-black px-4 sm:px-8'>
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    className='w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] h-full flex justify-center items-center'
                >
                    <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 flex items-center justify-center">
                        {/* Spinning colorful border */}
                        <div className="absolute inset-0 z-0 rounded-full blur-md opacity-80 animate-spin-slow pointer-events-none"
                            style={{
                                background: "conic-gradient(from 0deg, #ff00cc, #3333ff, #00ffcc, #ffcc00, #ff00cc)"
                            }}>
                        </div>
                        {/* Profile image with black background */}
                        <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg z-10 bg-black flex items-center justify-center">
                            <img
                                src="/profile.jpg"
                                alt="profile"
                                className="w-full pt-20 sm:pt-24 lg:pt-28 xl:pt-32 object-cover scale-[1.2]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home
