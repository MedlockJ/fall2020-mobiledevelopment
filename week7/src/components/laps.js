import React, {useState} from 'react';

function Laps() {

    let [lapCount, changeLaps] = useState(0);
    return(
        <div>
        <p>Lap Count: {lapCount}</p>
        <button onClick={() => {changeLaps(lapCount + 1)}}>Add Lap</button>
        <button onClick={() => {changeLaps(lapCount * 0)}}>Reset Counter</button>
        </div>
    );
}

export default Laps;