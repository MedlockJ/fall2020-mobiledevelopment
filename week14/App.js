import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {state, reducer} from './components/ApplicationState';

export default function App() {
  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => { dispatch({"type": "increment"}) } }>Click me (in App)!</button>
        <ShowCount currentState={currentState} />
        <DecreaseCount dispatch={dispatch} />
      </header>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
