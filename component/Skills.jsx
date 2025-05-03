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
            className="relative w-70 h-30 rounded-xl overflow-hidden border-2 border-green-400 shadow-md m-4"
            animate={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(47, 90, 226, 1),  transparent 30%)`,
            }}
            transition={{ type: 'tween', duration: 0.2 }}
        >
            <div className="relative z-10 flex items-center justify-around h-full text-lg font-semibold ">
                <img src={img} alt={name} className="w-16 h-16 object-contain mb-2" />
                <h1 className='text-gray-500'>{name}</h1>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className='min-h-screen flex flex-col items-center bg-black'>
            <p className='text-4xl font-extrabold text-gray-400 mt-12'>Skills</p>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3, }}
                className='h-1 bg-gray-400 mt-2 rounded'
            />
            <div className="flex flex-wrap justify-center pt-12">
                <HoverFunction img="/html.png" name="HTML" />
                <HoverFunction img="/csss.png" name="CSS" />
                <HoverFunction img="/js.jpeg" name="Javascript" />
                <HoverFunction img="/react.png" name="React" />
                <HoverFunction img="/tailwind.png" name="Tailwind" />
                <HoverFunction img="/node2.png" name="NodeJs" />
                <HoverFunction img="/next.png" name="Next JS" />
                <HoverFunction img="/python.jpeg" name="Python" />
                <HoverFunction img="/c.png" name="C" />
                <HoverFunction img="/mongodb.png" name="Mongo DB" />
            </div>
        </div>
    );
};

export default Skills;
