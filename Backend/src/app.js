import express from 'express';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Portfolio API is running' });
});

app.use('/api/feedback', feedbackRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
