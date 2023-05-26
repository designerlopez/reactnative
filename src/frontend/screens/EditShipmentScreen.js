import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditShipmentScreen = ({ route, navigation }) => {
  const { idEnvio } = route.params; // Obtener el ID del envío de la ruta de navegación

  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    // Aquí puedes realizar una llamada al backend para obtener los detalles del envío con el ID proporcionado
    // y actualizar los valores de estado (origen, destino, fechaEntrega, estado) con los datos recuperados
    // Puedes utilizar fetch, axios u otra biblioteca para realizar la solicitud al backend

    // Ejemplo de solicitud con fetch:
    fetch(`http://192.168.0.21:3000/api/sent/${idEnvio}`)
      .then((response) => response.json())
      .then((data) => {
        setOrigen(data.origen);
        setDestino(data.destino);
        setFechaEntrega(data.fechaEntrega);
        setEstado(data.estado);
      })
      .catch((error) => {
        console.log('Error fetching shipment details:', error);
      });
  }, [idEnvio]);

  const handleEditShipment = () => {
    // Aquí puedes realizar las acciones necesarias para editar la información del envío en la base de datos
    // Utiliza los valores de las variables de estado (origen, destino, fechaEntrega, estado)
    // para enviar los datos actualizados al backend y realizar las operaciones requeridas

    // Luego de editar el envío, puedes realizar alguna acción adicional, como redirigir a otra pantalla o mostrar un mensaje de éxito
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ubicación de origen"
        value={origen}
        onChangeText={setOrigen}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación de destino"
        value={destino}
        onChangeText={setDestino}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de entrega estimada"
        value={fechaEntrega}
        onChangeText={setFechaEntrega}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado del envío"
        value={estado}
        onChangeText={setEstado}
      />
      <Button title="Guardar cambios" onPress={handleEditShipment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EditShipmentScreen;
