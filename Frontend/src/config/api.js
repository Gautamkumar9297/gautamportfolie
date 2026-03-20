const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
    FEEDBACK: `${API_BASE_URL}/feedback`,
};

export default API_BASE_URL;
