let state = {
    count: 0,
    presses: 0
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1, presses: state.presses + 1};
      case 'decrement':
        return {count: state.count - 1, presses: state.presses + 1};
      default:
        throw new Error();
    }
  }
  
  export {state, reducer};  