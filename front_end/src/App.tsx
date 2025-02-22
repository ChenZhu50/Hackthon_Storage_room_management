import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/Layout'
import { UserState } from './components/UserState'
import HomePage from './components/HomePage'

function App() {
  return (
    <UserState>
      <Layout>
        {/* Components go here! */}
        <HomePage />
      </Layout>
    </UserState>
  )
}

export default App
