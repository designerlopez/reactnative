import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShipmentDetailsScreen = ({ route }) => {
  const { shipment } = route.params;
  const navigation = useNavigation();

  const handleEditShipment = () => {
    navigation.navigate('EditShipment', { shipment });
    console.log("envio "+shipment.idEnvio);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ID: {shipment.idEnvio}</Text>
      <Text style={styles.text}>Origen: {shipment.origen}</Text>
      <Text style={styles.text}>Destino: {shipment.destino}</Text>
      <Text style={styles.text}>Fecha de entrega estimada: {shipment.fechaEntrega}</Text>
      <Text style={styles.text}>Estado: {shipment.estado}</Text>
      <Button title="Editar" onPress={handleEditShipment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ShipmentDetailsScreen;
