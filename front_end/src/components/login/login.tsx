"use client"

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Handle login logic here
    console.log('Logging in with:', { email, password });

    // Simulate successful login
    // You would typically check credentials here
    // If successful, navigate to the desired route
    navigate('/dashboard'); // Change '/dashboard' to your desired route
  };

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>
          Login
        </button>
        <button type="reset" style={{ padding: '10px 15px', cursor: 'pointer' }} onClick={handleButtonClick}>
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Login;
