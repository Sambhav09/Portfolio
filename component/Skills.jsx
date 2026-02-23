'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ img, name, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all group-hover:bg-white/5">
                <div className="w-16 h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                    <img src={img} alt={name} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-sm font-bold text-gray-400 group-hover:text-white tracking-widest uppercase">{name}</h3>

                {/* Subtle progress indicator (optional/visual) */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-blue-500"
                    ></motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skills = [
        { img: "/html.png", name: "HTML" },
        { img: "/css.png", name: "CSS" },
        { img: "/js.png", name: "Javascript" },
        { img: "/react.png", name: "React" },
        { img: "/tailwind.png", name: "Tailwind" },
        { img: "/node2.png", name: "NodeJs" },
        { img: "/next.png", name: "Next JS" },
        { img: "/python.png", name: "Python" },
        { img: "/c.png", name: "C" },
        { img: "/mongodb.png", name: "Mongo DB" },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-black/50">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        Technical <span className="text-blue-500">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} index={index} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
