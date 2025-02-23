import LoginPage from './pages/LoginPage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/Layout'
import { UserState } from './components/UserState'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router-dom'
import ItemPage from './components/ItemPage'
import ClubRegistrationPage from './components/ClubRegistrationPage'
import ClubInventoryPage from './components/ClubInventoryPage';

function App() {
  return (
    <UserState>
      <Layout>
        <Routes>
          <Route path="/items/:id" element={<ItemPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<ClubRegistrationPage />}/>
          <Route path="/clubs/:id/inventory" element={<ClubInventoryPage />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Layout>
    </UserState>
  )
}

export default App
