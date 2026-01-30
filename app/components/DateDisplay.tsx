'use client'

import { useState, useEffect } from 'react'
import FlapDigit from './FlapDigit'

export default function DateDisplay() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        // Update date at midnight
        const updateDate = () => setDate(new Date())

        // Calculate time until next midnight
        const now = new Date()
        const tomorrow = new Date(now)
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(0, 0, 0, 0)
        const msUntilMidnight = tomorrow.getTime() - now.getTime()

        // Set timeout for midnight, then interval for subsequent days
        const midnightTimeout = setTimeout(() => {
            updateDate()
            const dailyInterval = setInterval(updateDate, 24 * 60 * 60 * 1000)
            return () => clearInterval(dailyInterval)
        }, msUntilMidnight)

        return () => clearTimeout(midnightTimeout)
    }, [])

    // Format: DD/MM/YYYY
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()

    const dayDigits = [parseInt(day[0]), parseInt(day[1])]
    const monthDigits = [parseInt(month[0]), parseInt(month[1])]
    const yearDigits = year.split('').map(d => parseInt(d))

    return (
        <div className="flex items-center justify-center gap-2 mt-6">
            {/* Day */}
            <div className="flex gap-1">
                <FlapDigit value={dayDigits[0]} />
                <FlapDigit value={dayDigits[1]} />
            </div>

            {/* Separator */}
            <div className="text-2xl text-gray-400 font-bold pb-2">/</div>

            {/* Month */}
            <div className="flex gap-1">
                <FlapDigit value={monthDigits[0]} />
                <FlapDigit value={monthDigits[1]} />
            </div>

            {/* Separator */}
            <div className="text-2xl text-gray-400 font-bold pb-2">/</div>

            {/* Year */}
            <div className="flex gap-1">
                <FlapDigit value={yearDigits[0]} />
                <FlapDigit value={yearDigits[1]} />
                <FlapDigit value={yearDigits[2]} />
                <FlapDigit value={yearDigits[3]} />
            </div>
        </div>
    )
}
