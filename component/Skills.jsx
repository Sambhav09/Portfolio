'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const HoverFunction = ({ img, name }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative w-full sm:w-60 h-20 sm:h-24 rounded-xl overflow-hidden border-2 border-green-400 shadow-md m-2 sm:m-4"
            animate={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(47, 90, 226, 1),  transparent 30%)`,
            }}
            transition={{ type: 'tween', duration: 0.2 }}
        >
            <div className="relative z-10 flex items-center justify-around h-full text-sm sm:text-lg font-semibold px-2">
                <img src={img} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain" />
                <h1 className='text-gray-500 text-xs sm:text-sm lg:text-base'>{name}</h1>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className='min-h-screen flex flex-col items-center bg-black px-4 sm:px-6 lg:px-8 overflow-x-hidden'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-400 mt-8 sm:mt-12 mb-4 sm:mb-6'>Skills</p>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3, }}
                className='h-1 bg-gray-400 mt-2 rounded'
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 w-full max-w-6xl">
                <HoverFunction img="/html.png" name="HTML" />
                <HoverFunction img="/css.png" name="CSS" />
                <HoverFunction img="/js.png" name="Javascript" />
                <HoverFunction img="/react.png" name="React" />
                <HoverFunction img="/tailwind.png" name="Tailwind" />
                <HoverFunction img="/node2.png" name="NodeJs" />
                <HoverFunction img="/next.png" name="Next JS" />
                <HoverFunction img="/python.png" name="Python" />
                <HoverFunction img="/c.png" name="C" />
                <HoverFunction img="/mongodb.png" name="Mongo DB" />
            </div>
        </div>
    );
};

export default Skills;
