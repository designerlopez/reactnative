import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';

const ShipmentList = ({ shipments }) => {
  const navigation = useNavigation();

  const handleSeeDetails = (shipment) => {
    navigation.navigate('ShipmentDetail', { shipment });
  };

  const renderShipmentItem = ({ item }) => (
    <View style={styles.shipmentContainer}>
      <Text style={styles.shipmentText}>Envío: {item.idEnvio}</Text>
      <Button title="Ver más" onPress={() => handleSeeDetails(item)} />
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>Tus últimos envíos</Text>
      <FlatList
        data={shipments}
        renderItem={renderShipmentItem}
        keyExtractor={(item) => item.idEnvio}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  shipmentContainer: {
    margin: 5,
    marginBottom: 10,
  },
  shipmentText: {
    fontSize: 17,
    padding: 10,
    backgroundColor: '#fff',
    textTransform: 'capitalize', // Capitaliza la primera letra de cada palabra
  },
});

export default ShipmentList;
