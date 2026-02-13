import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// REQUEST INTERCEPTOR: Attaches the token to every outgoing message
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR: Watches for the "401 Unauthorized"
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // CHECK THE STATUS CODE HERE
    const status = error.response ? error.response.status : null;

    // Fix: Catch BOTH 401 (Unauthorized) AND 403 (Forbidden)
    if (status === 401 || status === 403) {
      console.warn('Session expired or invalid. Logging out...');
      
      localStorage.removeItem('authToken'); 
      localStorage.removeItem('userId');
      
      // Force redirect to login
      window.location.href = '/login'; 
    }
    
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('userId', response.data.userId); // Optional if you need it
    }
    return response.data;
  },

  logout: async () => {
    try {
      const response = await api.post('/auth/logout');
      return response.data;
    } finally {
      // Always clear storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      window.location.href = '/login';
    }
  },

  getProfile: async () => {
    const response = await api.get('/user/me'); 
    return response.data;
  },

  getDashboard: async () => {
    const response = await api.get('/user/dashboard/me');
    return response.data;
  },


  isAuthenticated: () => !!localStorage.getItem('authToken'),
  getToken: () => localStorage.getItem('authToken'),
  getUserId: () => localStorage.getItem('userId'),
};

export default api;