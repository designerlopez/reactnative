import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CreateShipmentScreen from '../screens/CreateShipmentScreen';
import EditShipmentScreen from '../screens/EditShipmentScreen';
import ShipmentDetailsScreen from '../screens/ShipmentDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateShipment" component={CreateShipmentScreen} />
      <Stack.Screen name="EditShipment" component={EditShipmentScreen} />
      <Stack.Screen name="ShipmentDetails" component={ShipmentDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
