import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

//Add 3 Components and use state
//Food Menu App

function Home(props) {
  const [push, changePush] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Push Ups: {push}</Text>
      <Button
        title="Menu Item"
        onPress ={() => changePush(push+1)}
      />
      <Button
        title="Menu Item"
        onPress={() => changePush(push*0)}
      />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function Brunch(props) {
  const [push, changePush] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Push Ups: {push}</Text>
      <Button
        title="Menu Item"
        onPress ={() => changePush(push+1)}
      />
      <Button
        title="Menu Item"
        onPress={() => changePush(push*0)}
      />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function Brunch(props) {
  const [push, changePush] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Push Ups: {push}</Text>
      <Button
        title="Menu Item"
        onPress ={() => changePush(push+1)}
      />
      <Button
        title="Menu Item"
        onPress={() => changePush(push*0)}
      />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sit Ups" component={Sit} />
        <Drawer.Screen name="Push Ups" component={Push} />
      </Drawer.Navigator>
    </NavigationContainer>
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
