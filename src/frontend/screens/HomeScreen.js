import { axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';



const HomeScreen = ({ navigation }) => {
  const [shipments, setShipments] = useState([]);
  const [filteredShipments, setFilteredShipments] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
   const URL=`http://localhost:3000/api/sent/`
   axios.get(URL)
    .then(res=>setShipments(res.data))
    .catch(err=>console.log(err))
  
    
   }, []);

  // const handleFilterShipments = () => {
  //   const filtered = shipments.filter((shipment) =>
  //     shipment.estado.toLowerCase().includes(filter.toLowerCase())
  //   );
  //   setFilteredShipments(filtered);
  // };

  // const renderItem = ({ item }) => (
  //   <View>
  //     <Text>ID: {item.idEnvio}</Text>
  //     <Text>Origen: {item.origen}</Text>
  //     <Text>Destino: {item.destino}</Text>
  //     <Text>Fecha de entrega estimada: {item.fechaEntrega}</Text>
  //     <Text>Estado: {item.estado}</Text>
  //     <Button
  //       title="Ver detalles"
  //       onPress={() => navigation.navigate('ShipmentDetails', { shipment: item })}
  //     />
  //   </View>
  // );

  return (
    <View>
      <Text>Filtrar por estado aja:</Text>
      <TextInput
        placeholder="Ingrese un estado"
        value={filter}
        // onChangeText={setFilter}
        // onSubmitEditing={handleFilterShipments}
      />
      <Button title="Filtrar"  />
      <FlatList
        // data={filteredShipments}
        // renderItem={renderItem}
        // keyExtractor={(item) => item.idEnvio.toString()}
      />
    </View>
  );
};

export default HomeScreen;
