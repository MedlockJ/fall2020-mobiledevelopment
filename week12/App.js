import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Input} from 'react-native-elements';


export default function App() {

  const [pressed, setPressed] = useState(false);
  const [choice, setChoice] = useState('');

  const verifyPress = (props) => {
    if (props==1){
      setChoice('People');
      setPressed(true);
    }
    else if (props==2){
      setChoice('Places');
      setPressed(true);
    }
    else if (props==3){
      setChoice('Things');
      setPressed(true);
    }
  };

  return (
    <View style={styles.container}>
      {
        pressed? (
        <Card>
          <Text>You chose {choice}</Text>
        </Card>
      ) : (
        <Card>
          <Button title="People" type="raised" onPress={ () => {verifyPress(1)}}/>
          <Button title="Places" type="raised" onPress={ () => {verifyPress(2)}}/>
          <Button title="Things" type="raised" onPress={ () => {verifyPress(3)}} />
        </Card>
      )
      }
    </View>
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
