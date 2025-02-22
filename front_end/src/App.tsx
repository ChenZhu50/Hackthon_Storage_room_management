import React from 'react';
import SignUp from './components/signup';
import Login from './components/login';
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <h2>Welcome to the app!</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  gap: '20px', padding: '20px'}}>
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default App;
