'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { scrollY } = useScroll();

    const width = useTransform(scrollY, [0, 100], ['100%', '90%']);
    const borderRadius = useTransform(scrollY, [0, 100], ['0px', '24px']);
    const marginTop = useTransform(scrollY, [0, 100], ['0px', '20px']);
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ['rgba(3, 3, 3, 0)', 'rgba(3, 3, 3, 0.8)']
    );
    const border = useTransform(
        scrollY,
        [0, 100],
        ['1px solid rgba(255, 255, 255, 0)', '1px solid rgba(255, 255, 255, 0.1)']
    );

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            style={{
                width,
                borderRadius,
                marginTop,
                backgroundColor,
                border,
                left: '50%',
                x: '-50%',
            }}
            className='fixed top-0 z-50 flex justify-between items-center px-8 h-12 backdrop-blur-md transition-all'
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-white text-xl font-extrabold tracking-tighter"
            >
                SAMBHAV<span className="text-blue-500">.</span>
            </motion.div>

            <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        whileHover={{ y: -2 }}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    </motion.a>
                ))}
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none p-2">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-0 w-full glass rounded-3xl flex flex-col items-center py-8 space-y-6 md:hidden shadow-2xl"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            onClick={toggleMenu}
                            href={link.href}
                            className="text-lg font-semibold text-gray-300 hover:text-white transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
