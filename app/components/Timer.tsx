'use client'

import { useState, useRef, useEffect } from 'react'
import FlapDigit from './FlapDigit'
import ControlButton from './ControlButton'

export default function Timer() {
    const [targetTime, setTargetTime] = useState(0) // Total seconds to count down from
    const [remainingTime, setRemainingTime] = useState(0) // Current remaining seconds
    const [isRunning, setIsRunning] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (isRunning && remainingTime > 0) {
            intervalRef.current = setInterval(() => {
                setRemainingTime(prev => {
                    if (prev <= 1) {
                        setIsRunning(false)
                        setIsComplete(true)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)
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
    }, [isRunning, remainingTime])

    const handlePreset = (seconds: number) => {
        setTargetTime(seconds)
        setRemainingTime(seconds)
        setIsRunning(false)
        setIsComplete(false)
    }

    const handleStart = () => {
        if (remainingTime > 0) {
            setIsRunning(true)
            setIsComplete(false)
        }
    }

    const handlePause = () => setIsRunning(false)

    const handleReset = () => {
        setIsRunning(false)
        setRemainingTime(targetTime)
        setIsComplete(false)
    }

    // Convert seconds to display format
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60

    const hourDigits = hours.toString().padStart(2, '0').split('').map(d => parseInt(d))
    const minuteDigits = minutes.toString().padStart(2, '0').split('').map(d => parseInt(d))
    const secondDigits = seconds.toString().padStart(2, '0').split('').map(d => parseInt(d))

    return (
        <div className="flex flex-col items-center gap-8">
            {/* Display */}
            <div className={`
        flex items-center gap-2 sm:gap-3 md:gap-4 
        ${isComplete ? 'animate-pulse' : ''}
      `}>
                {/* Hours */}
                <div className="flex gap-1">
                    <FlapDigit value={hourDigits[0]} />
                    <FlapDigit value={hourDigits[1]} />
                </div>

                {/* Separator */}
                <div className="flex flex-col gap-2 pb-2">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isComplete ? 'bg-red-500' : 'bg-flap-accent'}`}></div>
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isComplete ? 'bg-red-500' : 'bg-flap-accent'}`}></div>
                </div>

                {/* Minutes */}
                <div className="flex gap-1">
                    <FlapDigit value={minuteDigits[0]} />
                    <FlapDigit value={minuteDigits[1]} />
                </div>

                {/* Separator */}
                <div className="flex flex-col gap-2 pb-2">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isComplete ? 'bg-red-500' : 'bg-flap-accent'}`}></div>
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isComplete ? 'bg-red-500' : 'bg-flap-accent'}`}></div>
                </div>

                {/* Seconds */}
                <div className="flex gap-1">
                    <FlapDigit value={secondDigits[0]} />
                    <FlapDigit value={secondDigits[1]} />
                </div>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2 justify-center">
                <ControlButton label="1 min" onClick={() => handlePreset(60)} variant="preset" />
                <ControlButton label="5 min" onClick={() => handlePreset(300)} variant="preset" />
                <ControlButton label="10 min" onClick={() => handlePreset(600)} variant="preset" />
                <ControlButton label="30 min" onClick={() => handlePreset(1800)} variant="preset" />
                <ControlButton label="1 hr" onClick={() => handlePreset(3600)} variant="preset" />
            </div>

            {/* Controls */}
            <div className="flex gap-4">
                {!isRunning ? (
                    <ControlButton
                        label={isComplete ? "Time's Up!" : "Start"}
                        onClick={handleStart}
                        variant="start"
                        icon="▶"
                        disabled={remainingTime === 0 || isComplete}
                    />
                ) : (
                    <ControlButton
                        label="Pause"
                        onClick={handlePause}
                        variant="stop"
                        icon="⏸"
                    />
                )}
                <ControlButton
                    label="Reset"
                    onClick={handleReset}
                    variant="reset"
                    icon="↻"
                    disabled={remainingTime === targetTime && !isComplete}
                />
            </div>

            {/* Status */}
            {isComplete && (
                <div className="text-xl font-bold text-red-500 animate-pulse">
                    ⏰ Timer Complete!
                </div>
            )}

            {/* Label */}
            <div className="text-xs text-gray-500 tracking-widest">
                HOURS : MINUTES : SECONDS
            </div>
        </div>
    )
}
