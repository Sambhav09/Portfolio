"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
    const name = "Sambhav Jain"

    return (
        <div className='min-h-screen flex flex-col md:flex-row bg-black'>
            <div className='w-full md:w-1/2 h-screen flex flex-col justify-center items-start gap-10 px-8 md:px-32'>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='text-3xl text-gray-500'>Hello I'm</motion.p>

                <p className='text-4xl font-extrabold text-gray-400 mt-12 text-center'>
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
                    className='text-3xl sm:text-4xl md:text-3xl font-semibold text-gray-500'>
                    Full stack Web Developer
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className='text-xl sm:text-lg md:text-xl text-gray-500'>
                    I'm a full stack web developer with the ability to build fully functional, responsive, and animated websites from start to finish. I specialize in both frontend and backend development, ensuring seamless user experiences and efficient performance across all devices.
                </motion.h2>
                <div className='gap-12 flex justify-center md:justify-around items-center mx-10 sm:mx-20'>
                    <a href="#projects">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='p-2 sm:p-3 rounded-3xl sm:rounded-full bg-gray-500 border-4 border-gray-700 text-white text-sm sm:text-base'>
                            My work
                        </motion.button>
                    </a>
                    <a href="#contact">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='p-2 sm:p-3 rounded-3xl sm:rounded-full bg-gray-500 border-4 border-gray-700 text-white text-sm sm:text-base'>
                            Get in touch
                        </motion.button>
                    </a>
                </div>

            </div>

            {/* Right Column (Image) */}
            <div className='sm:block w-full md:pl-40 md:w-1/2 h-screen flex justify-center items-center bg-black'>
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    className='w-full max-w-[400px] h-full flex justify-center items-center'
                >
                    <div className="relative h-80 w-80 flex items-center justify-center">
                        {/* Spinning colorful border */}
                        <div className="absolute inset-0 z-0 rounded-full blur-md opacity-80 animate-spin-slow pointer-events-none"
                            style={{
                                background: "conic-gradient(from 0deg, #ff00cc, #3333ff, #00ffcc, #ffcc00, #ff00cc)"
                            }}>
                        </div>
                        {/* Profile image with black background */}
                        <div className="relative h-72 w-72 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg z-10 bg-black flex items-center justify-center">
                            <img
                                src="/profile.jpg"
                                alt="profile"
                                className="w-full pt-24 object-cover scale-[1.2]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>


        </div>
    )
}

export default Home
