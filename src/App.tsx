import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React + TypeScript: Login Practice</h1>
        <Login />
        <Logout />
      </header>
    </div>
  );
}

export default App;
