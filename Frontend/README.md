# Portfolio Frontend

A modern, responsive portfolio website built with React, Vite, and React Router.

## Features

- Single Page Application (SPA) with React Router
- Responsive design with custom CSS animations
- Portfolio showcase with projects and skills
- Competitive coding profiles display
- Feedback form with backend integration
- Resume viewer and download

## Tech Stack

- React 19
- Vite
- React Router DOM
- React Icons
- CSS3 with animations

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, documents, icons
│   │   ├── images/      # Image files
│   │   └── documents/   # PDF and other documents
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── styles/          # CSS files
│   ├── constants/       # Static data
│   ├── services/        # API services
│   ├── config/          # Configuration files
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.example
├── index.html
├── vite.config.js
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
