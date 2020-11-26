import React from 'react';

function IncreaseCount(props) {
  return (
    <div>
      <button onClick={() => {props.dispatch({"type": "increment"}) }}>Increase</button>
    </div>
  );
}

export default IncreaseCount;