import React from 'react';
import { View, Text } from 'react-native';

const ShipmentDetails = ({ shipment }) => {
  return (
    <View>
      <Text>ID de envío: {shipment.idEnvio}</Text>
      <Text>Ubicación de origen: {shipment.origen}</Text>
      <Text>Ubicación de destino: {shipment.destino}</Text>
      <Text>Fecha de entrega estimada: {shipment.fechaEntrega}</Text>
      <Text>Estado del envío: {shipment.estado}</Text>
    </View>
  );
};

export default ShipmentDetails;
