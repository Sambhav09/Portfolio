'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { scrollY } = useScroll();

    const width = useTransform(scrollY, [0, 100], ['100%', '75%']);
    const borderRadius = useTransform(scrollY, [0, 100], ['0px', '12px']);
    const marginTop = useTransform(scrollY, [0, 100], ['0px', '32px']);
    const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.div
            style={{
                width,
                borderRadius,
                marginTop,
                opacity,
                left: '50%',
                transform: 'translateX(-50%)'
            }}
            className='fixed top-0 bg-gray-800 h-14 sm:h-16 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8 transition-all'
        >
            <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold">Portfolio</div>

            <div className="hidden lg:flex space-x-6 xl:space-x-8">
                <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm xl:text-base">Home</a>
                <a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm xl:text-base">About</a>
                <a href="#skills" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm xl:text-base">Skills</a>
                <a href="#projects" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm xl:text-base">Projects</a>
                <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm xl:text-base">Contact</a>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-start px-6 py-4 space-y-3 lg:hidden border-t border-gray-700"
                >
                    <a
                        onClick={toggleMenu}
                        href="#home"
                        className="text-white hover:text-blue-400 transition-colors duration-300 w-full py-2 text-sm sm:text-base"
                    >
                        Home
                    </a>
                    <a
                        onClick={toggleMenu}
                        href="#about"
                        className="text-white hover:text-blue-400 transition-colors duration-300 w-full py-2 text-sm sm:text-base"
                    >
                        About
                    </a>
                    <a
                        onClick={toggleMenu}
                        href="#skills"
                        className="text-white hover:text-blue-400 transition-colors duration-300 w-full py-2 text-sm sm:text-base"
                    >
                        Skills
                    </a>
                    <a
                        onClick={toggleMenu}
                        href="#projects"
                        className="text-white hover:text-blue-400 transition-colors duration-300 w-full py-2 text-sm sm:text-base"
                    >
                        Projects
                    </a>
                    <a
                        onClick={toggleMenu}
                        href="#contact"
                        className="text-white hover:text-blue-400 transition-colors duration-300 w-full py-2 text-sm sm:text-base"
                    >
                        Contact
                    </a>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Navbar;
