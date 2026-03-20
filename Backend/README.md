# Portfolio Backend API

Backend API for the portfolio website built with Express.js and MongoDB.

## Features

- Feedback submission and retrieval
- MongoDB integration
- RESTful API design
- Error handling middleware

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB credentials

4. Start development server:
```bash
npm run dev
```

## API Endpoints

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedback

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── app.js          # Express app setup
│   └── server.js       # Server entry point
├── .env.example
├── .gitignore
└── package.json
```
