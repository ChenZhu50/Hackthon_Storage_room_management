// src/index.tsx or src/App.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminPage from './components/admin/admin';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
