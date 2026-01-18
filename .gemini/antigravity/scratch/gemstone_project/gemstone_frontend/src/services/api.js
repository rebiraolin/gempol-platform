import axios from 'axios';

// Base URL for the Django REST Framework API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Create an Axios instance with default headers
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true,
});

// Request interceptor to include auth token or credentials
api.interceptors.request.use(
    (config) => {
        // Check if user is logged in (stored in localStorage)
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            // Here we ensure cookies (sessionid) are sent with requests if applicable.
            config.withCredentials = true;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * Registers a new user.
 * @param {Object} userData - { email, password, first_name, last_name }
 * @returns {Promise} Axios response
 */
export const registerUser = (userData) => {
    return api.post('/auth/register/', userData);
};

/**
 * Logs in a user.
 * @param {Object} credentials - { email, password }
 * @returns {Promise} Axios response
 */
export const loginUser = (credentials) => {
    return api.post('/auth/login/', credentials);
};

/**
 * Logs out the user (server-side session destruction).
 */
export const logoutUser = () => {
    return api.post('/auth/logout/')
        .then(() => {
            localStorage.removeItem('user');
        })
        .catch((error) => {
            // Even if server logout fails, clear local storage
            localStorage.removeItem('user');
            throw error;
        });
};

/**
 * Creates a new Machine Order.
 * @param {Object} orderData - { quantity }
 * @returns {Promise} Axios response
 */
export const createMachineOrder = (orderData) => {
    return api.post('/orders/', orderData);
};

/**
 * Creates a new Polishing Request.
 * @param {Object} requestData - { gem_type, service_type, pickup_location, delivery_location, notes }
 * @returns {Promise} Axios response
 */
export const createPolishingRequest = (requestData) => {
    return api.post('/services/', requestData);
};

/**
 * Sends a Contact Us message.
 * @param {Object} messageData - { name, email, message }
 * @returns {Promise} Axios response
 */
export const sendContactMessage = (messageData) => {
    return api.post('/contact/', messageData);
};

export default api;
