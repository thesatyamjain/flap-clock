'use client'

interface ModeSelectorProps {
    activeMode: 'clock' | 'stopwatch' | 'timer'
    onModeChange: (mode: 'clock' | 'stopwatch' | 'timer') => void
}

export default function ModeSelector({ activeMode, onModeChange }: ModeSelectorProps) {
    const modes = [
        { id: 'clock' as const, label: 'Clock', icon: '🕐' },
        { id: 'stopwatch' as const, label: 'Stopwatch', icon: '⏱️' },
        { id: 'timer' as const, label: 'Timer', icon: '⏲️' }
    ]

    return (
        <div className="flex gap-2 bg-black/30 rounded-xl p-2">
            {modes.map((mode) => (
                <button
                    key={mode.id}
                    onClick={() => onModeChange(mode.id)}
                    className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
            transition-all duration-300
            ${activeMode === mode.id
                            ? 'bg-flap-accent text-white shadow-lg shadow-blue-500/50'
                            : 'bg-transparent text-gray-400 hover:text-gray-200'
                        }
          `}
                >
                    <span className="text-lg">{mode.icon}</span>
                    <span>{mode.label}</span>
                </button>
            ))}
        </div>
    )
}
