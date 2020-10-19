import React from 'react';
import './App.css';
import logo from './logo.svg';
import Squats from './components/squats'
import Laps from './components/laps'
import Clock from './components/clock'
import Pushups from './components/pushups'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome To The Fitness Tracker Where Physical Accountability Is Just a Click Away
        </p>
      </header>
      <div className="App-body">
        <Pushups />
        <Squats />
        <Laps />
        <Clock />
      </div>

      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Jacob Medlock 2020</p>
      </footer>
    </div>
  );
}

export default App;
