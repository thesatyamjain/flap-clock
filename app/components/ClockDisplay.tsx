'use client'

import { useState, useEffect } from 'react'
import FlapDigit from './FlapDigit'

export default function ClockDisplay() {
    const [time, setTime] = useState(new Date())
    const [is24Hour, setIs24Hour] = useState(true)

    useEffect(() => {
        // Load preference from localStorage
        const saved = localStorage.getItem('is24Hour')
        if (saved !== null) {
            setIs24Hour(saved === 'true')
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const toggleFormat = () => {
        const newValue = !is24Hour
        setIs24Hour(newValue)
        localStorage.setItem('is24Hour', newValue.toString())
    }

    // Extract time components and split into digits
    let hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    let ampm = ''
    if (!is24Hour) {
        ampm = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12 || 12 // Convert to 12-hour format
    }

    const hoursStr = hours.toString().padStart(2, '0')
    const minutesStr = minutes.toString().padStart(2, '0')
    const secondsStr = seconds.toString().padStart(2, '0')

    const hourDigits = [parseInt(hoursStr[0]), parseInt(hoursStr[1])]
    const minuteDigits = [parseInt(minutesStr[0]), parseInt(minutesStr[1])]
    const secondDigits = [parseInt(secondsStr[0]), parseInt(secondsStr[1])]

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Format Toggle */}
            <button
                onClick={toggleFormat}
                className="px-4 py-2 text-xs font-semibold bg-black/30 hover:bg-black/50 rounded-lg transition-all duration-200"
            >
                {is24Hour ? '24H' : '12H'} Format
            </button>

            {/* Clock Display */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* Hours */}
                <div className="flex gap-1">
                    <FlapDigit value={hourDigits[0]} />
                    <FlapDigit value={hourDigits[1]} />
                </div>

                {/* Separator */}
                <div className="flex flex-col gap-2 pb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-flap-accent animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-flap-accent animate-pulse"></div>
                </div>

                {/* Minutes */}
                <div className="flex gap-1">
                    <FlapDigit value={minuteDigits[0]} />
                    <FlapDigit value={minuteDigits[1]} />
                </div>

                {/* Separator */}
                <div className="flex flex-col gap-2 pb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-flap-accent animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-flap-accent animate-pulse"></div>
                </div>

                {/* Seconds */}
                <div className="flex gap-1">
                    <FlapDigit value={secondDigits[0]} />
                    <FlapDigit value={secondDigits[1]} />
                </div>
            </div>

            {/* AM/PM Indicator */}
            {!is24Hour && (
                <div className="text-2xl font-bold text-flap-accent tracking-wider">
                    {ampm}
                </div>
            )}
        </div>
    )
}
