// src/components/AdminPage.tsx

import React from 'react';

const AdminPage: React.FC = () => {
    return (
        <div className="admin-page">
            <Sidebar />
            <div className="content">
                <h1>Admin Dashboard</h1>
                {/* Add more components or content here */}
            </div>
        </div>
    );
};

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Admin Menu</h2>
            <ul>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Settings</li>
                <li>Reports</li>
            </ul>
        </div>
    );
};

export default AdminPage;
