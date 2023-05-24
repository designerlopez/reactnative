import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CreateShipmentScreen = () => {
  const [idEnvio, setIdEnvio] = useState('');
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [estado, setEstado] = useState('');

  const handleCreateShipment = () => {
    // Aquí puedes realizar las acciones necesarias para crear el envío en la base de datos
    // Utiliza los valores de las variables de estado (idEnvio, origen, destino, fechaEntrega, estado)
    // para enviar los datos al backend o realizar las operaciones requeridas

    // Luego de crear el envío, puedes realizar alguna acción adicional, como redirigir a otra pantalla o mostrar un mensaje de éxito
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
