import Feedback from '../models/Feedback.js';

export const createFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();

        res.status(201).json({
            success: true,
            message: 'Feedback submitted successfully',
            data: newFeedback,
        });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to save feedback',
        });
    }
};

export const getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: feedbacks.length,
            data: feedbacks,
        });
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to fetch feedback',
        });
    }
};
