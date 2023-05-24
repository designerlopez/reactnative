import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = ({ origen, destino }) => {
  // Coordenadas de origen y destino
  const originCoordinates = { latitude: origen.latitude, longitude: origen.longitude };
  const destinationCoordinates = { latitude: destino.latitude, longitude: destino.longitude };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={originCoordinates}>
        {/* Marcador de origen */}
        <Marker coordinate={originCoordinates} title="Ubicación de origen" />

        {/* Marcador de destino */}
        <Marker coordinate={destinationCoordinates} title="Ubicación de destino" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
