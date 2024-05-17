"use client"
import React, { useState } from 'react';
import axiosInstance from '../../Configs/axiosInstance';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const updatedErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      updatedErrors.username = 'Username can only contain letters, numbers, and underscores';
      valid = false;
    }

    // Email validation: a simple regex for basic email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      updatedErrors.email = 'Invalid email address';
      valid = false;
    }

    // Password validation: should contain at least 8 characters
    if (formData.password.length < 8) {
      updatedErrors.password = 'Password must be at least 8 characters long';
      valid = false;
    }

    // Confirm Password validation: should match the password
    if (formData.password !== formData.confirmPassword) {
      updatedErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(updatedErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make an API call to your backend here
        const response = await axiosInstance.post('/api/user/register', formData);

        if (response.status === 400) {
          setUsernameAvailable('Username already exists');
        }

        // Handle the response as needed (e.g., show a success message or redirect)
        console.log('API Response:', response.data);
      } catch (error) {
        // Handle errors (e.g., show an error message)
        console.error('API Error:', error);
      }
    }
  };


  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:flex-1 bg-black p-8 md:pt-56 hidden md:block">
        <img
          src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Logos/Companylogo_lok0s3.svg"
          alt="Login"
          className="max-w-md mx-auto"
        />
      </div>
      <div className="flex-1 bg-gray-100 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h5 className="text-3xl font-semibold mb-4">Sign Up</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full border border-gray-500 rounded-full py-2 px-3 ${
                  errors.username ? 'border-red-500' : ''
                }`}
                placeholder="Enter your username"
              />
              {/* {usernameAvailable ? (
                <p className="text-green-500 text-xs mt-1">Username is available</p>
              ) : (
                <p className="text-red-500 text-xs mt-1">Username is not available</p>
              )} */}
               {usernameAvailable && <p className="text-red-500 text-xs mt-1">{usernameAvailable}</p>}
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border border-gray-500 rounded-full py-2 px-3 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border border-gray-500 rounded-full py-2 px-3 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full border border-gray-500 rounded-full py-2 px-3 ${
                  errors.confirmPassword ? 'border-red-500' : ''
                }`}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp
