import React from 'react';
import { View, FlatList, Text } from 'react-native';

const ShipmentList = ({ shipments, filterByStatus }) => {
  const renderItem = ({ item }) => (
    <Text>{item.idEnvio} - {item.estado}</Text>
  );

  return (
    <View>
      <FlatList
        data={shipments}
        renderItem={renderItem}
        keyExtractor={(item) => item.idEnvio}
      />
      <Text>Filtrar por estado:</Text>
      <Button title="En tránsito" onPress={() => filterByStatus('En tránsito')} />
      <Button title="Entregado" onPress={() => filterByStatus('Entregado')} />
      <Button title="Pendiente" onPress={() => filterByStatus('Pendiente')} />
    </View>
  );
};

export default ShipmentList;
