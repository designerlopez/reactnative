import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const CreateShipmentScreen = ({ navigation }) => {
  const [idEnvio, setIdEnvio] = useState('');
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [estado, setEstado] = useState('');

  const handleCreateShipment = () => {
    // Verificar campos vacíos
  if (!idEnvio || !origen || !destino || !fechaEntrega || !estado) {
    Alert.alert('Campos vacíos', 'Por favor, complete todos los campos');
    return;
  }

    const shipmentData = {
      idEnvio,
      origen,
      destino,
      fechaEntrega,
      estado,
    };

    axios
      .post('http://192.168.0.21:3000/api/sent/', shipmentData)
      .then(() => {
        Alert.alert('Envío creado', 'El envío se ha creado exitosamente');
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.response && error.response.status === 500) {
          // Se recibió una respuesta con código de estado 500
          console.log('Error interno del servidor:', error.response.data);
        } else {
          // Otro tipo de error
          console.log('Error:', error.message);
        }
      });
  };

  return (
    <View>
      <TextInput
        placeholder="ID del envío"
        value={idEnvio}
        onChangeText={setIdEnvio}
      />
      <TextInput
        placeholder="Ubicación de origen"
        value={origen}
        onChangeText={setOrigen}
      />
      <TextInput
        placeholder="Ubicación de destino"
        value={destino}
        onChangeText={setDestino}
      />
      <TextInput
        placeholder="Fecha de entrega estimada"
        value={fechaEntrega}
        onChangeText={setFechaEntrega}
      />
      <TextInput
        placeholder="Estado del envío"
        value={estado}
        onChangeText={setEstado}
      />
      <Button title="Crear envío" onPress={handleCreateShipment} />
    </View>
  );
};

export default CreateShipmentScreen;
