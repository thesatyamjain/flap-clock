'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FlapDigitProps {
    value: number
}

export default function FlapDigit({ value }: FlapDigitProps) {
    const [currentValue, setCurrentValue] = useState(value)
    const [previousValue, setPreviousValue] = useState(value)
    const [isFlipping, setIsFlipping] = useState(false)

    useEffect(() => {
        if (value !== currentValue) {
            setIsFlipping(true)
            setPreviousValue(currentValue)

            // Delay the value change to sync with animation
            const timer = setTimeout(() => {
                setCurrentValue(value)
                setIsFlipping(false)
            }, 300) // Half of flip duration

            return () => clearTimeout(timer)
        }
    }, [value, currentValue])

    return (
        <div className="relative w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32 perspective-1000">
            {/* Container for the flap effect */}
            <div className="relative w-full h-full">
                {/* Top half - static */}
                <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-lg bg-gradient-to-b from-gray-800 to-gray-900 flap-digit-shadow">
                    <div className="flex items-center justify-center w-full h-full text-4xl sm:text-5xl md:text-6xl font-bold text-flap-text pt-2">
                        {currentValue}
                    </div>
                </div>

                {/* Bottom half - static */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-lg bg-gradient-to-t from-gray-900 to-gray-800 flap-digit-shadow">
                    <div className="flex items-center justify-center w-full h-full text-4xl sm:text-5xl md:text-6xl font-bold text-flap-text -mt-16 sm:-mt-20 md:-mt-24">
                        {currentValue}
                    </div>
                </div>

                {/* Animated flipping top half */}
                <AnimatePresence>
                    {isFlipping && (
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-lg bg-gradient-to-b from-gray-800 to-gray-900 origin-bottom"
                            initial={{ rotateX: 0, zIndex: 10 }}
                            animate={{ rotateX: -90 }}
                            exit={{ rotateX: -90 }}
                            transition={{ duration: 0.3, ease: 'easeIn' }}
                            style={{
                                transformStyle: 'preserve-3d',
                                backfaceVisibility: 'hidden',
                            }}
                        >
                            <div className="flex items-center justify-center w-full h-full text-4xl sm:text-5xl md:text-6xl font-bold text-flap-text pt-2">
                                {previousValue}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Animated flipping bottom half */}
                <AnimatePresence>
                    {isFlipping && (
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-lg bg-gradient-to-t from-gray-900 to-gray-800 origin-top"
                            initial={{ rotateX: 90, zIndex: 10 }}
                            animate={{ rotateX: 0 }}
                            exit={{ rotateX: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.3 }}
                            style={{
                                transformStyle: 'preserve-3d',
                                backfaceVisibility: 'hidden',
                            }}
                        >
                            <div className="flex items-center justify-center w-full h-full text-4xl sm:text-5xl md:text-6xl font-bold text-flap-text -mt-16 sm:-mt-20 md:-mt-24">
                                {currentValue}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Center divider line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2 z-20"></div>
            </div>
        </div>
    )
}
