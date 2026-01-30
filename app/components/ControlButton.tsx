'use client'

interface ControlButtonProps {
    label: string
    onClick: () => void
    variant: 'start' | 'stop' | 'reset' | 'preset'
    disabled?: boolean
    icon?: string
}

export default function ControlButton({
    label,
    onClick,
    variant,
    disabled = false,
    icon
}: ControlButtonProps) {
    const variantStyles = {
        start: 'bg-green-600 hover:bg-green-700 text-white',
        stop: 'bg-red-600 hover:bg-red-700 text-white',
        reset: 'bg-gray-600 hover:bg-gray-700 text-white',
        preset: 'bg-blue-600 hover:bg-blue-700 text-white'
    }

    const disabledStyles = 'opacity-50 cursor-not-allowed hover:bg-current'

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        px-6 py-3 rounded-lg font-semibold text-sm
        transition-all duration-200
        shadow-lg hover:shadow-xl
        ${variantStyles[variant]}
        ${disabled ? disabledStyles : 'active:scale-95'}
      `}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    )
}
