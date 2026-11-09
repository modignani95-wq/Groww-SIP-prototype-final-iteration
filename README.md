# Groww Mutual Funds Dashboard & Habit Retention Engine (PWA)

A mobile-first Progressive Web App (PWA) replicating the official **Groww Mutual Funds Dashboard**, augmented with an innovative **"Habit & Momentum Mode"** toggle designed to increase retention for first-time SIP investors during their early months.

---

## 🚀 Live Demo & Vercel Deployment

This project is pre-configured for instant deployment on **Vercel** with zero manual configuration.

### Deploy to Vercel (One-Click)
1. Push this repository to your GitHub account (already linked).
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `Groww-SIP-prototype-final-iteration` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

> The included `vercel.json` ensures all SPA routes, client assets, and manifest files are served with optimized caching and rewrites.

---

## ✨ Key Features & Architectural Highlights

### 1. 🔄 Dual-View "Habit vs. Holdings" Interactive Card (Zero Layout Shift)
- **Segmented Mode Switcher:** Toggle smoothly between `[🔥 Habit Mode (Default)]` and `[📊 Holdings Mode]`.
- **Card Dimension Lock (258px):** Both views are strictly calibrated to the exact same vertical footprint (`258px`), ensuring **0 pixels of layout shift** or jumping when switching modes.
- **Privacy Mode:** Circular eye toggle button masks/unmasks portfolio values with `••••••`.
- **Preferences Persistence:** Remembers user's toggle state in `localStorage`.

### 2. 🔥 Habit & Momentum Engine (Retention Mode)
- **Day 47 Compounding Counter:** Flame badge (🔥) with an animated live micro-accrual indicator (`+₹1.48 today`).
- **Next Debit Countdown:** Visual progress bar tracking days remaining until the next scheduled SIP debit (`₹2,500 on 1st of month`).
- **SIP Consistency Rate:** Universal metric (`100% On-Time Debits`) suitable for both first-year and multi-year investors.
- **Mandate Health Indicator:** Real-time bank autopay verification status (`● Autopay Active & Verified` via HDFC Bank).
- **Behavioral Reassurance Carousel:** Research-backed financial psychology insights to mitigate short-term market panic.

### 3. 📊 Holdings & Financial Snapshot (Groww Exact Replication)
- Exact replica of the official Groww dashboard card:
  - Header: **HOLDINGS (2)** with circular Eye & Analytics chart action buttons.
  - Value: **₹7,084** bold header.
  - Dashed separator line.
  - **1D returns:** `+₹21 (0.30%)` in Groww emerald green (`#00D09C`).
  - **Total returns:** `+₹84 (1.20%)` in Groww emerald green.
  - **Invested:** `₹7,000`.
  - **XIRR:** `6.10%` with dropdown chevron.

### 4. 📱 Mobile-First PWA Standards
- **Progressive Web App Ready:** Includes `manifest.json`, theme color `#00D09C`, custom SVG app icons, and `/sw.js` service worker.
- **Screen Stability:** Automatically adapts to full mobile screen width and height (`100dvh`) without artificial borders on mobile devices.
- **Safe Area Inset Support:** Safe padding for mobile home gesture bars (`env(safe-area-inset-bottom)`).
- **Tactile Feedback:** Built-in Web Audio API tactile feedback and `navigator.vibrate` haptic pulses.

---

## 🛠 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/modignani95-wq/Groww-SIP-prototype-final-iteration.git

# 2. Navigate to project directory
cd Groww-SIP-prototype-final-iteration

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build for production
npm run build
```

---

## 🏗 Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React + Custom SVG Brand Vectors
- **Confetti:** Canvas-Confetti
- **Deployment Target:** Vercel (SPA mode with `vercel.json` rewrites)
