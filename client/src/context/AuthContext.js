import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_BASE_URL;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  
  const [isAuthenticated, setIsAuthenticated] = useState(false);  
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');

  // Load user from token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${API}/users/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch(() => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      });
    }
  }, []);

  const register = async (name, email, password) => {
    try {
      const res = await axios.post(`${API}/users/register`, { name, email, password }, {withCredentials: true});
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
      setMessage('Registration successful!');
    } catch (error) {
      setErrors(error.response?.data?.message || 'Registration failed');
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API}/users/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
      setMessage('Login successful!');
    } catch (error) {
      setErrors(error.response?.data?.message || 'Login failed');
      console.log(error);
      console.log("Login URL:", `${API}/users/login`);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    setMessage('Logged out successfully.');
  };

  const values = {
    user,
    isAuthenticated,
    register,
    login,
    logout,
    message,
    errors
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

