import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, Text} from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Jacob Medlock</Card.Title>
        <Text style={styles.paragraph}>
          Favorite Food #1: Pizza
        </Text>
        <Card.Divider />
        <Text> 
          Favorite Food #2: Any burger from Teak
        </Text>
        <Card.Divider />
        <Button title="Submit"></Button>
      </Card>
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
  paragraph:{
    margin: '1px'
  },
});
