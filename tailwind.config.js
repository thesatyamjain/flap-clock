/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
            },
            colors: {
                flap: {
                    dark: '#0a0a0a',
                    card: '#1a1a1a',
                    text: '#f5f5f5',
                    accent: '#3b82f6',
                },
            },
        },
    },
    plugins: [],
}
