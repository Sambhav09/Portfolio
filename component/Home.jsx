"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'

const Home = () => {
    const name = "Sambhav Jain"

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    }

    return (
        <div className='relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-20 px-4 md:px-24 overflow-hidden'>
            {/* Animated Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='w-full md:w-3/5 flex flex-col justify-center items-start gap-6 z-10'
            >
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Available for work
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h2 className='text-3xl md:text-4xl text-gray-400 font-medium'>Hello, I'm</h2>
                    <h1 className='text-6xl md:text-8xl font-black text-white tracking-tighter mt-2'>
                        {name.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                                className="inline-block"
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>

                <motion.h3
                    variants={itemVariants}
                    className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'
                >
                    Full Stack Web Developer
                </motion.h3>

                <motion.p
                    variants={itemVariants}
                    className='text-lg text-gray-400 max-w-xl leading-relaxed'
                >
                    I build high-performance, responsive web applications with a focus on exceptional user experience and clean, maintainable code.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className='flex flex-wrap gap-6 mt-4'
                >
                    <a href="#projects" className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                        <button className='relative flex items-center gap-2 px-8 py-4 bg-black rounded-full text-white font-bold transition duration-300 group-hover:bg-black/80'>
                            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </a>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "https://github.com/Sambhav09" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/sambhav-jain-61285a246/" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Column (Image/Profile) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className='hidden md:flex w-full md:w-2/5 justify-center items-center h-[500px] relative'
            >
                <div className="relative w-80 h-80 flex items-center justify-center">
                    {/* Original Spinning colorful border */}
                    <div className="absolute inset-0 z-0 rounded-full blur-md opacity-80 animate-spin-slow pointer-events-none"
                        style={{
                            background: "conic-gradient(from 0deg, #ff00cc, #3333ff, #00ffcc, #ffcc00, #ff00cc)"
                        }}>
                    </div>

                    {/* Glowing background fallback/extra depth */}
                    <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Image Container */}
                    <div className="relative h-72 w-72 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10 bg-neutral-900 flex items-center justify-center">
                        <motion.img
                            src="/profile.jpg"
                            alt="profile"
                            className="w-full object-cover pt-16 scale-[1.15]"
                            whileHover={{ scale: 1.25 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Home
