"use client"
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Cursor = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea')) {
                setIsHovering(true)
            }
        }

        const handleMouseOut = () => {
            setIsHovering(false)
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mouseout', handleMouseOut)
        }
    }, [mouseX, mouseY])

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-500/60 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0)',
                    borderColor: isHovering ? 'rgba(59, 130, 246, 0.9)' : 'rgba(59, 130, 246, 0.6)',
                    boxShadow: isHovering
                        ? '0 0 20px rgba(59, 130, 246, 0.4)'
                        : '0 0 10px rgba(59, 130, 246, 0.2)',
                }}
            />
        </>
    )
}

export default Cursor
