import React, {useState} from 'react';

function Squats() {

    let [squatCount, changeSquats] = useState(0);
    return(
        <div>
        <p>Squat Count: {squatCount}</p>
        <button onClick={() => {changeSquats(squatCount + 1)}}>Increase Repitition</button>
        <button onClick={() => {changeSquats(squatCount * 0)}}>Reset Counter</button>
        </div>
    );
}

export default Squats;