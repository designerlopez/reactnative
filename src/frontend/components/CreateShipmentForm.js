import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CreateShipmentForm = ({ onCreateShipment }) => {
  const [idEnvio, setIdEnvio] = useState('');
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [estado, setEstado] = useState('');

  const handleCreateShipment = () => {
    // Validar y procesar los datos ingresados

    const newShipment = {
      idEnvio,
      origen,
      destino,
      fechaEntrega,
      estado,
    };

    // Llamar a la función de creación de envío pasada por prop
    onCreateShipment(newShipment);
  };

  return (
    <View>
      <TextInput
        placeholder="ID de envío"
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

export default CreateShipmentForm;
