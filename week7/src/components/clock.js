import React from 'react';
import '../App.css';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
      this.tick = this.tick.bind(this);
    }
  
    tick() {
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          <p>Seconds: {this.state.seconds}</p>
          
          <button className="App-button" onClick={this.tick}> Start Timer</button>
        </div>
      );
    }
  }
  
export default Timer