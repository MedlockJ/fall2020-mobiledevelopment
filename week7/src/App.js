import React from 'react';
import './App.css';
import Squats from './components/squats'
import Laps from './components/laps'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Squats />
        <Laps />
      </header>
    </div>
  );
}

export default App;
