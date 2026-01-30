'use client'

import { useState } from 'react'
import ClockDisplay from './components/ClockDisplay'
import DateDisplay from './components/DateDisplay'
import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'
import ModeSelector from './components/ModeSelector'

export default function Home() {
    const [mode, setMode] = useState<'clock' | 'stopwatch' | 'timer'>('clock')

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
            {/* Clock Container */}
            <div className="glassmorphism flap-shadow rounded-3xl p-8 sm:p-12 md:p-16 max-w-6xl w-full">
                {/* Title */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                        FLAP CLOCK
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-400 tracking-widest">
                        REALTIME SPLIT-FLAP DISPLAY
                    </p>
                </div>

                {/* Mode Selector */}
                <div className="flex justify-center mb-8">
                    <ModeSelector activeMode={mode} onModeChange={setMode} />
                </div>

                {/* Main Display Area */}
                <div className="min-h-[300px] flex items-center justify-center">
                    {mode === 'clock' && (
                        <div className="flex flex-col items-center">
                            <ClockDisplay />
                            <DateDisplay />
                        </div>
                    )}
                    {mode === 'stopwatch' && <Stopwatch />}
                    {mode === 'timer' && <Timer />}
                </div>

                {/* Footer */}
                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-xs text-gray-500">
                        Powered by <span className="text-flap-accent font-semibold">Framer Motion</span>
                    </p>
                </div>
            </div>

            {/* Ambient glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </main>
    )
}
