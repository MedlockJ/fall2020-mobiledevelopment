import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {state, reducer} from './components/ApplicationState';
import DecreaseCount from './components/DecreaseCount';
import IncreaseCount from './components/IncreaseCount';
import ShowCount from './components/ShowCount';

export default function App() {
  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="container">
      <header className="App-header">
        <IncreaseCount dispatch={dispatch} />
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
