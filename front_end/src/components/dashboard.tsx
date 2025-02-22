// src/components/Dashboard.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
        }}>
          Log out?
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
