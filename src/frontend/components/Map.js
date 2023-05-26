import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  // Coordenadas predeterminadas de origen y destino
  const originCoordinates = { latitude: 37.78825, longitude: -122.4324 };
  const destinationCoordinates = { latitude: 37.7749, longitude: -122.4194 };

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
