import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Flap Clock - Realtime Split-Flap Display',
    description: 'A stunning realtime clock with split-flap display animations powered by Framer Motion',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
