import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/frontend/screens/HomeScreen';
import CreateShipmentScreen from './src/frontend/screens/CreateShipmentScreen';
import EditShipmentScreen from './src/frontend/screens/EditShipmentScreen';
import ShipmentDetailsScreen from './src/frontend/screens/ShipmentDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateShipment" component={CreateShipmentScreen} />
        <Stack.Screen name="EditShipment" component={EditShipmentScreen} />
        <Stack.Screen name="ShipmentDetails" component={ShipmentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
