import React from 'react';
import SignUp from './components/signup';
import Login from './components/login';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  gap: '20px', padding: '20px'}}>
      <Login />
      <SignUp />
    </div>
  );
};

export default App;