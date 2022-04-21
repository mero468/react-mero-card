import logo from './logo.svg';
import './App.css';
import './style.css'
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Main } from './components/Main';
import React from 'react';

function App() {
  return (
    <div className="container">
      <Main/>
      <About/>
      <Interests/>
    </div>
  );
}

export default App;
