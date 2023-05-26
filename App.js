import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button } from 'react-native';

import HomeScreen from './src/frontend/screens/HomeScreen';
import CreateShipmentScreen from './src/frontend/screens/CreateShipmentScreen';
import EditShipmentScreen from './src/frontend/screens/EditShipmentScreen';
import ShipmentDetailsScreen from './src/frontend/screens/ShipmentDetailsScreen';

const Stack = createStackNavigator();

const HomeScreenWithButton = () => {
  const navigation = useNavigation();

  const handleCreateShipment = () => {
    navigation.navigate('CreateShipment');
  };

  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <Button title="Crear Envío" onPress={handleCreateShipment} />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenWithButton} />
        <Stack.Screen name="CreateShipment" component={CreateShipmentScreen} />
        <Stack.Screen name="EditShipment" component={EditShipmentScreen} />
        <Stack.Screen name="ShipmentDetail" component={ShipmentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
