import React, {useState} from 'react';
import '../App.css';

function Squats() {

    let [squatCount, changeSquats] = useState(0);
    return(
        <div>
        <p>Squat Count: {squatCount}</p>
        <button className="App-button" onClick={() => {changeSquats(squatCount + 1)}}>Add Squat</button>
        <button className="App-button" onClick={() => {changeSquats(squatCount * 0)}}>Reset Counter</button>
        </div>
    );
}

export default Squats;