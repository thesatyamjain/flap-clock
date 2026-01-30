# 🕐 Flap Clock

A stunning realtime clock with split-flap display animations built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

![Flap Clock Demo](https://img.shields.io/badge/Next.js-15.5.11-black?style=for-the-badge&logo=next.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-pink?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)

## ✨ Features

### 🕐 Clock Mode
- **Realtime clock** with smooth animations
- **12/24 hour toggle** with localStorage persistence
- **AM/PM indicator** for 12-hour format
- **Date display** with flap animations (DD/MM/YYYY)

### ⏱️ Stopwatch Mode
- **Centisecond precision** (MM:SS.CS)
- **Start/Stop/Reset controls**
- Smooth counting with 10ms intervals
- Up to 99 minutes and 59 seconds

### ⏲️ Timer Mode
- **Countdown timer** with hours, minutes, seconds
- **5 Quick presets**: 1min, 5min, 10min, 30min, 1hr
- **Pause/Resume** functionality
- **Visual alerts** when timer completes
- Pulsing animation on completion

## 🎨 Design

- **Premium dark theme** with radial gradients
- **Glassmorphism effects** with backdrop blur
- **3D flip animations** using Framer Motion
- **Orbitron font** for futuristic aesthetic
- **Fully responsive** for mobile, tablet, and desktop
- **Pulsing ambient glow** background effect

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone git@github.com:thesatyamjain/flap-clock.git
cd flap-clock
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Orbitron (Google Fonts)

## 📁 Project Structure

```
flap-clock/
├── app/
│   ├── components/
│   │   ├── FlapDigit.tsx       # Core flap animation component
│   │   ├── ClockDisplay.tsx    # Clock with 12/24hr toggle
│   │   ├── DateDisplay.tsx     # Date with flap animations
│   │   ├── Stopwatch.tsx       # Stopwatch mode
│   │   ├── Timer.tsx           # Timer mode
│   │   ├── ModeSelector.tsx    # Mode switching tabs
│   │   └── ControlButton.tsx   # Reusable button component
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main app container
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎯 Key Features Explained

### Split-Flap Animation

The flip animation uses Framer Motion's 3D transforms:
- `rotateX` transform for realistic mechanical flap effect
- Staggered timing (top flap → bottom flap)
- `AnimatePresence` for smooth enter/exit
- GPU-accelerated for 60fps performance

### Mode Switching

Three distinct modes accessible via tab selector:
1. **Clock** - Shows current time and date
2. **Stopwatch** - Count up with centisecond precision
3. **Timer** - Count down from preset or custom time

### State Management

- **Clock**: Updates every second using `setInterval`
- **Stopwatch**: 10ms interval for smooth centisecond counting
- **Timer**: 1-second countdown with completion detection
- **Format preference**: Persisted in localStorage

## 📱 Responsive Design

- **Mobile** (375px): Compact digit sizing
- **Tablet** (768px): Medium-sized elements
- **Desktop** (1024px+): Full-size display
- All breakpoints use Tailwind's responsive utilities

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  flap: {
    dark: '#0a0a0a',
    card: '#1a1a1a',
    text: '#f5f5f5',
    accent: '#3b82f6',
  },
}
```

### Animation Duration

Modify flip timing in `FlapDigit.tsx`:

```typescript
transition={{ duration: 0.3, ease: 'easeIn' }}
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- **Framer Motion** for the amazing animation library
- **Next.js** team for the excellent React framework
- **Tailwind CSS** for the utility-first CSS framework
- Inspired by classic split-flap displays found in airports and train stations

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using Next.js and Framer Motion**
