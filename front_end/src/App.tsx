import React from 'react';
import HomePage from './components/homepage/homepage';
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  gap: '20px', padding: '20px'}}>
        <HomePage />
      </div>
    </div>
  );
};

export default App;
