import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet} from 'react-native'; // Import necessary components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import Kustomi from './components/Kustomi';





const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator();

export default function App() {//Tämä on sovelluksen pääkomponentti, joka palauttaa koko navigaatiorakenteen.
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
       screenOptions={{
        header: (props) => <Kustomi {...props} />,
      }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

