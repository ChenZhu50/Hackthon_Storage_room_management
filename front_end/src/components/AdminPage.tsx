// src/AdminPage.tsx
import React from 'react';
import ClubList from './ClubList';

const AdminPage: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ClubList />
    </div>
  );
};

export default AdminPage;
