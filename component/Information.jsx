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
        <div className='min-h-screen sm:h-screen w-full bg-black text-white px-4 py-8 overflow-x-hidden overflow-y-hidden'>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='text-center text-4xl'>Contact</motion.h1>
            <div className='w-full h-full pt-20 sm:pt-0 flex flex-col md:flex-row gap-8'>
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.5, delay: 1 }}
                    className='w-full h-full md:w-1/2 flex flex-col items-center justify-center gap-6'
                >
                    <div className='p-6 flex flex-col w-80 sm:flex-row justify-start items-center gap-6 rounded-lg border-2 shadow-lg'>
                        <Mail size={30} />
                        <div className='text-center sm:text-left'>
                            <p className='font-semibold'>Mail</p>
                            <p>Jsambhav2004@gmail.com</p>
                        </div>
                    </div>

                    <div className='p-6 flex flex-col w-80 sm:flex-row justify-start items-center gap-6 rounded-lg border-2 shadow-lg'>
                        <Phone size={32} />
                        <div className='text-center sm:text-left'>
                            <p className='font-semibold'>Mobile no.</p>
                            <p>+91 7599097078</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5, delay: 1 }}
                    className='w-full md:w-1/2 flex justify-center items-center'>
                    <form autoComplete='off' action="submit" onSubmit={handleSubmit} className='w-full max-w-md'>
                        <div className='flex flex-col gap-4'>
                            <div className='gap-4 flex flex-col md:flex-row'>
                                <input
                                    autoComplete='off'
                                    type="text"
                                    placeholder='Name'
                                    required
                                    onChange={(e) => setname(e.target.value)}
                                    value={name}
                                    className='p-2 rounded-lg text-white border-2 border-gray-500 bg-transparent w-full'
                                />
                                <input
                                    autoComplete='off'
                                    type="email"
                                    required
                                    onChange={(e) => setemail(e.target.value)}
                                    value={email}
                                    placeholder='Email'
                                    className='p-2 rounded-lg text-white border-2 border-gray-500 bg-transparent w-full'
                                />
                            </div>
                            <input
                                autoComplete='off'
                                type="text"
                                required
                                onChange={(e) => setsubject(e.target.value)}
                                value={subject}
                                placeholder='Subject'
                                className='p-3 rounded-lg border-2 text-white border-gray-500 bg-transparent'
                            />
                            <textarea
                                autoComplete='off'
                                placeholder='Message'
                                required
                                onChange={(e) => setmessage(e.target.value)}
                                value={message}
                                className='p-3 rounded-lg border-2 text-white border-gray-500 bg-transparent'
                                rows="5"
                            ></textarea>
                            <button
                                type="submit"
                                className='p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition'
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
