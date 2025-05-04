"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useAnimation, px } from 'framer-motion'

const Cursor = () => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const controls = useAnimation()

    const springX = useSpring(x, { stiffness: 50, damping: 30 })
    const springY = useSpring(y, { stiffness: 50, damping: 30 })
    const [isHovering, setisHovering] = useState(false)

    useEffect(() => {
        const updateCursor = (e) => {
            const offsetX = 40;
            const offsetY = 40;
            x.set(e.clientX - offsetX)
            y.set(e.clientY - offsetY)
        }
        const handleMouseEnter = (e) => {
            const target = e.target
            if (target.closest('a, button')) {
                setisHovering(true)
            }
        }

        window.addEventListener('mousemove', updateCursor)
        window.addEventListener('mouseover', handleMouseEnter)
        window.addEventListener('mouseout', () => setisHovering(false))

        return () => {
            window.removeEventListener('mousemove', updateCursor)
            window.removeEventListener('mouseover', handleMouseEnter)
        }
    }, [x, y])

    useEffect(() => {
        if (isHovering) {
            controls.start({
                scale: 1.5,
            })
        } else {
            controls.start({
                scale: 1,
            })
        }
    }, [isHovering, controls])


    return (
        <motion.div className='fixed h-9 w-9 rounded-full bg-gray-500'
            style={{
                translateX: springX,
                translateY: springY,
            }}
            animate={controls}
        >

        </motion.div >
    )
}

export default Cursor
