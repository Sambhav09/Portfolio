"use client"
import React, { useState } from 'react'
import { Mail, Phone, } from 'lucide-react'
import { motion } from 'framer-motion'

const Information = () => {
    const [loading, setloading] = useState(false)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setloading(true)
            const data = {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(data)

        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
            setname("")
            setemail("")
            setsubject("")
            setmessage("")
        }

    }


    return (
        <div className='min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-x-hidden'>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 lg:mb-16'>Contact</motion.h1>
            <div className='w-full flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.5, delay: 1 }}
                    className='w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 sm:gap-6'
                >
                    <div className='p-4 sm:p-6 flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6 rounded-lg border-2 shadow-lg w-full max-w-sm sm:max-w-md'>
                        <Mail size={24} className="sm:w-8 sm:h-8" />
                        <div className='text-center sm:text-left'>
                            <p className='font-semibold text-sm sm:text-base'>Mail</p>
                            <p className='text-xs sm:text-sm lg:text-base'>Jsambhav2004@gmail.com</p>
                        </div>
                    </div>

                    <div className='p-4 sm:p-6 flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6 rounded-lg border-2 shadow-lg w-full max-w-sm sm:max-w-md'>
                        <Phone size={24} className="sm:w-8 sm:h-8" />
                        <div className='text-center sm:text-left'>
                            <p className='font-semibold text-sm sm:text-base'>Mobile no.</p>
                            <p className='text-xs sm:text-sm lg:text-base'>+91 7599097078</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5, delay: 1 }}
                    className='w-full lg:w-1/2 flex justify-center items-center'>
                    <form autoComplete='off' action="submit" onSubmit={handleSubmit} className='w-full max-w-md sm:max-w-lg'>
                        <div className='flex flex-col gap-4 sm:gap-6'>
                            <div className='gap-4 sm:gap-6 flex flex-col sm:flex-row'>
                                <input
                                    autoComplete='off'
                                    type="text"
                                    placeholder='Name'
                                    required
                                    onChange={(e) => setname(e.target.value)}
                                    value={name}
                                    className='p-3 sm:p-4 rounded-lg text-white border-2 border-gray-500 bg-transparent w-full text-sm sm:text-base focus:border-blue-500 focus:outline-none transition-colors'
                                />
                                <input
                                    autoComplete='off'
                                    type="email"
                                    required
                                    onChange={(e) => setemail(e.target.value)}
                                    value={email}
                                    placeholder='Email'
                                    className='p-3 sm:p-4 rounded-lg text-white border-2 border-gray-500 bg-transparent w-full text-sm sm:text-base focus:border-blue-500 focus:outline-none transition-colors'
                                />
                            </div>
                            <input
                                autoComplete='off'
                                type="text"
                                required
                                onChange={(e) => setsubject(e.target.value)}
                                value={subject}
                                placeholder='Subject'
                                className='p-3 sm:p-4 rounded-lg border-2 text-white border-gray-500 bg-transparent text-sm sm:text-base focus:border-blue-500 focus:outline-none transition-colors'
                            />
                            <textarea
                                autoComplete='off'
                                placeholder='Message'
                                required
                                onChange={(e) => setmessage(e.target.value)}
                                value={message}
                                className='p-3 sm:p-4 rounded-lg border-2 text-white border-gray-500 bg-transparent text-sm sm:text-base focus:border-blue-500 focus:outline-none transition-colors resize-none'
                                rows="5"
                            ></textarea>
                            <button
                                type="submit"
                                className='p-3 sm:p-4 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-all duration-300 text-sm sm:text-base font-medium'
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Information
