import React from 'react';

function ShowCount(props) {
  return (
      <div>
        <p>Count: {props.currentState.count}</p>
        <p>Total Presses: {props.currentState.presses}</p>
      </div>
  );
}

export default ShowCount;
