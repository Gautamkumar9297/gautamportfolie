import { API_ENDPOINTS } from '../config/api';

export const submitFeedback = async (feedbackData) => {
    try {
        const response = await fetch(API_ENDPOINTS.FEEDBACK, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedbackData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to submit feedback');
        }

        return data;
    } catch (error) {
        console.error('Error submitting feedback:', error);
        throw error;
    }
};

export const getAllFeedback = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.FEEDBACK);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to fetch feedback');
        }

        return data;
    } catch (error) {
        console.error('Error fetching feedback:', error);
        throw error;
    }
};
