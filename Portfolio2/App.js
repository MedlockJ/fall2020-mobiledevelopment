import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

//Add 3 Components and use state
//Food Menu App

function Home(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Generic Restaraunt!</Text>
      <Button
        title="Brunch"
        onPress ={() => props.navigation.navigate('Brunch')}
      />
      <Button
        title="Lunch"
        onPress={() => props.navigation.navigate('Lunch')}
      />
      <Button
        title="Drinks"
        onPress={() => props.navigation.navigate('Drinks')}
      />
    </View>
  );
}

function Brunch(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Brunch Specials</Text>
      <Button
        title="Details"
        onPress ={() => props.navigation.navigate('BrunchItem')}
      />
      <Button
        title="Details"
        onPress={() => props.navigation.navigate('BrunchItem2')}
      />
      <Button
        title="Return Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function Lunch(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lunch Menu 11AM-5PM</Text>
      <Button
        title="Detais"
        onPress ={() => props.navigation.navigate('LunchItem')}
      />
      <Button
        title="Detaila"
        onPress={() => props.navigation.navigate('LunchItem2')}
      />
      <Button
        title="Return Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function Drinks(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drinks Available on Tap</Text>
      <Button
        title="Detais"
        onPress ={() => props.navigation.navigate('DrinkItem')}
      />
      <Button
        title="Details"
        onPress={() => props.navigation.navigate('DrinkItem2')}
      />
      <Button
        title="Return Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function BrunchItem(props) {
  const [push, changePush] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chicken and Waffles</Text>

      <Button
        title="Back"
        onPress={() => props.navigation.navigate('Brunch')}
      />
    </View>
  );
}

function BrunchItem2(props) {
  const [push, changePush] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Biscuits and Gravy</Text>

      <Button
        title="Back"
        onPress={() => props.navigation.navigate('Brunch')}
      />
    </View>
  );
}

function LunchItem(props) {
  const [push, changePush] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Buffalo Mac</Text>

      <Button
        title="Back"
        onPress={() => props.navigation.navigate('Lunch')}
      />
    </View>
  );
}

function LunchItem2(props) {
  const [push, changePush] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Burger</Text>

      <Button
        title="Back"
        onPress={() => props.navigation.navigate('Lunch')}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Brunch" component={Brunch} />
      <Stack.Screen name="Lunch" component={Lunch} />
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="BrunchItem" component={BrunchItem} />
      <Stack.Screen name="BrunchItem2" component={BrunchItem2} />
      <Stack.Screen name="LunchItem" component={LunchItem} />
      <Stack.Screen name="LunchItem2" component={LunchItem2} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Root" component={Root} />
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
