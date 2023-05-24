import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditShipmentForm = ({ shipment, onUpdateShipment }) => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    // Actualizar los campos del formulario con los datos del envío
    setOrigen(shipment.origen);
    setDestino(shipment.destino);
    setFechaEntrega(shipment.fechaEntrega);
    setEstado(shipment.estado);
  }, [shipment]);

  const handleUpdateShipment = () => {
    // Validar y procesar los datos ingresados

    const updatedShipment = {
      idEnvio: shipment.idEnvio, // Mantener el mismo ID del envío
      origen,
      destino,
      fechaEntrega,
      estado,
    };

    // Llamar a la función de actualización de envío pasada por prop
    onUpdateShipment(updatedShipment);
  };

  return (
    <View>
      <Text>ID de envío: {shipment.idEnvio}</Text>
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
      <Button title="Actualizar envío" onPress={handleUpdateShipment} />
    </View>
  );
};

export default EditShipmentForm;
