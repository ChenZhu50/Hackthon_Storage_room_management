"use client"

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  // State for form fields
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic validation
    if (!email || !username || !password || !name) {
      setError('All fields are required.');
      return;
    }

    // Reset error
    setError(null);

    // Simulate an API call
    try {
      // Replace this with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      navigate("/");
    } catch (err) {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Sign up successful!</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
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
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
