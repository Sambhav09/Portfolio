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
            className='fixed top-0 bg-gray-800 h-16 z-50 flex justify-between items-center px-4 transition-all'
        >
            <div className="text-white text-xl font-bold">Portfolio</div>

            <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-white hover:text-blue-400 transition">Home</a>
                <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
                <a href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
                <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
                <a href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-start px-6 py-4 space-y-2 md:hidden">
                    <a onClick={toggleMenu} href="#home" className="text-white hover:text-blue-400 transition">Home</a>
                    <a onClick={toggleMenu} href="#about" className="text-white hover:text-blue-400 transition">About</a>
                    <a onClick={toggleMenu} href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
                    <a onClick={toggleMenu} href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
                    <a onClick={toggleMenu} href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
                </div>
            )}
        </motion.div>
    );
};

export default Navbar;
