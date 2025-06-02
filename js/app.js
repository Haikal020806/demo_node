// Main app initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Core app functionality
const initializeApp = () => {
    setupIntersectionObserver();
    setupFormHandling();
    // More features will be added here
};

// Intersection Observer for scroll animations
const setupIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all major sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
};

// Form handling with validation
const setupFormHandling = () => {
    const form = document.querySelector('.signup-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            // Simulate API call
            await submitFormData(data);
            showNotification('Welcome to ShoreSquad! 🌊');
            form.reset();
        } catch (error) {
            showNotification('Oops! Something went wrong. Please try again.', 'error');
        }
    });
};

// Utility function for form submission
const submitFormData = async (data) => {
    // This will be replaced with actual API endpoint
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form data:', data);
            resolve({ success: true });
        }, 1000);
    });
};

// Notification system
const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Auto-remove notification
    setTimeout(() => {
        notification.remove();
    }, 3000);
};

// Weather data fetching (to be implemented)
const fetchWeatherData = async (location) => {
    // Will be implemented with weather API
};

// Map initialization (to be implemented)
const initializeMap = () => {
    // Will be implemented with mapping library
};

// Local storage utilities
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage error:', e);
        }
    },
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    }
};
