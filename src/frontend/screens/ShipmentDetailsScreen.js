import React from 'react';
import { View, Text } from 'react-native';

const ShipmentDetailsScreen = ({ route }) => {
  const { shipment } = route.params;

  return (
    <View>
      <Text>ID: {shipment.idEnvio}</Text>
      <Text>Origen: {shipment.origen}</Text>
      <Text>Destino: {shipment.destino}</Text>
      <Text>Fecha de entrega estimada: {shipment.fechaEntrega}</Text>
      <Text>Estado: {shipment.estado}</Text>
    </View>
  );
};

export default ShipmentDetailsScreen;
