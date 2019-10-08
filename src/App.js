import React from 'react';
import './App.css';
import Routes from './components/Routes';

import exit from './media/icons/exit.png'

function App() {
  return (
    <div className="framework">
      <div>
        <img className="exit-btn" src={exit} alt="exit icon"/>
      </div>
      <Routes />
    </div>
  );
}

export default App;
