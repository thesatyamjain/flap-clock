'use client'

import { useState, useRef, useEffect } from 'react'
import FlapDigit from './FlapDigit'
import ControlButton from './ControlButton'

export default function Stopwatch() {
    const [time, setTime] = useState(0) // in milliseconds
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 10)
            }, 10)
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [isRunning])

    const handleStart = () => setIsRunning(true)
    const handleStop = () => setIsRunning(false)
    const handleReset = () => {
        setIsRunning(false)
        setTime(0)
    }

    // Convert milliseconds to display format
    const minutes = Math.floor(time / 60000) % 100
    const seconds = Math.floor(time / 1000) % 60
    const centiseconds = Math.floor((time % 1000) / 10)

    const minuteDigits = minutes.toString().padStart(2, '0').split('').map(d => parseInt(d))
    const secondDigits = seconds.toString().padStart(2, '0').split('').map(d => parseInt(d))
    const centiDigits = centiseconds.toString().padStart(2, '0').split('').map(d => parseInt(d))

    return (
        <div className="flex flex-col items-center gap-8">
            {/* Display */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* Minutes */}
                <div className="flex gap-1">
                    <FlapDigit value={minuteDigits[0]} />
                    <FlapDigit value={minuteDigits[1]} />
                </div>

                {/* Separator */}
                <div className="flex flex-col gap-2 pb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-flap-accent"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-flap-accent"></div>
                </div>

                {/* Seconds */}
                <div className="flex gap-1">
                    <FlapDigit value={secondDigits[0]} />
                    <FlapDigit value={secondDigits[1]} />
                </div>

                {/* Separator */}
                <div className="text-2xl text-gray-400 font-bold pb-2">.</div>

                {/* Centiseconds */}
                <div className="flex gap-1">
                    <FlapDigit value={centiDigits[0]} />
                    <FlapDigit value={centiDigits[1]} />
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
                {!isRunning ? (
                    <ControlButton
                        label="Start"
                        onClick={handleStart}
                        variant="start"
                        icon="▶"
                    />
                ) : (
                    <ControlButton
                        label="Stop"
                        onClick={handleStop}
                        variant="stop"
                        icon="⏸"
                    />
                )}
                <ControlButton
                    label="Reset"
                    onClick={handleReset}
                    variant="reset"
                    icon="↻"
                    disabled={time === 0}
                />
            </div>

            {/* Label */}
            <div className="text-xs text-gray-500 tracking-widest">
                MINUTES : SECONDS . CENTISECONDS
            </div>
        </div>
    )
}
