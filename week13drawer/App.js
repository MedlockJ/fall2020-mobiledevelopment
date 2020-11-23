import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Add 3 Components


function Home(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Sit Up Tracking"
        onPress={() => props.navigation.navigate('Sit Ups')}
      />
      <Button
        title="Push Up Tracking"
        onPress={() => props.navigation.navigate('Push Ups')}
      />
    </View>
  );
}

function Sit(props) {
  const [sit, changeSit] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sit Ups: {sit}</Text>
      <Button 
        title="Increse Rep"
        onPress={() => changeSit(sit+1)} 
      />
      <Button
        title="Reset"
        onPress={() => changeSit(sit*0)}
      />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function Push(props) {
  const [push, changePush] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Push Ups: {push}</Text>
      <Button
        title="Change Rep"
        onPress ={() => changePush(push+1)}
      />
      <Button
        title="Reset"
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

function App() {

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

export default App;
