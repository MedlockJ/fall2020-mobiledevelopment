import React, {useState} from 'react';
import '../App.css';

function Pushups() {

    let [pushCount, changePush] = useState(0);
    return(
        <div>
        <p>Pushup Count: {pushCount}</p>
        <button className="App-button" onClick={() => {changePush(pushCount + 1)}}>Add Pushup</button>
        <button className="App-button" onClick={() => {changePush(pushCount * 0)}}>Reset Counter</button>
        </div>
    );
}

export default Pushups;