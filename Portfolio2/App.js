import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';

//Add 3 Components and use state
//Food Menu App

function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Generic Restaraunt!</Text>
      <Button style={styles.button}
        title="Brunch"
        onPress ={() => props.navigation.navigate('Brunch')}
      />
      <Button style={styles.button}
        title="Lunch"
        onPress={() => props.navigation.navigate('Lunch')}
      />
      <Button style={styles.button}
        title="Drinks"
        onPress={() => props.navigation.navigate('Drinks')}
      />
    </View>
  );
}

function Brunch(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Text style={styles.text}>Brunch Specials</Text>
      <Card>
      <Button
        title="Details"
        onPress ={() => props.navigation.navigate('BrunchItem')}
      />
      </Card>
      <Card>
      <Button
        title="Details"
        onPress={() => props.navigation.navigate('BrunchItem2')}
      />
      </Card>
      
    
      <Button style={styles.button}
        title="Return Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function Lunch(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Lunch Menu 11AM-5PM</Text>
      <Button
        title="Details"
        onPress ={() => props.navigation.navigate('LunchItem')}
      />
      <Button
        title="Details"
        onPress={() => props.navigation.navigate('LunchItem2')}
      />
      <Button style={styles.button}
        title="Return Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

function Drinks(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Drinks Available on Tap</Text>
      <Button
        title="Details"
        onPress ={() => props.navigation.navigate('DrinkItem')}
      />
      <Button
        title="Details"
        onPress={() => props.navigation.navigate('DrinkItem2')}
      />
      <Button style={styles.button}
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
      <Card>
      <Text>Chicken and Waffles</Text>

      <Button
        title="Back"
        onPress={() => props.navigation.navigate('Brunch')}
      />
      </Card>
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

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Brunch" component={Brunch} />
            <Drawer.Screen name="BrunchItem" component={BrunchItem} />
            <Drawer.Screen name="BrunchItem2" component={BrunchItem2} />
          <Drawer.Screen name="Lunch" component={Lunch} />
          <Drawer.Screen name="Drinks" component={Drinks} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: '30px'
  },
  container: {
    flex: 1,
    backgroundColor: 'Black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px'
  },
  button:{
    margin: '5px',
    backgroundColor: 'Gray'
  },
});