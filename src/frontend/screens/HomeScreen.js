import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';

import ShipmentList from '../components/ShipmentList';

const HomeScreen = ({ navigation }) => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const URL = 'http://192.168.0.21:3000/api/sent/';
    axios.get(URL)
      .then(res => {
        setShipments(res.data);
      })
      .catch(err => {
        console.log('Error:', err.message);
        console.log('Response:', err.response);
        console.log('Request:', err.request);
        console.log('Config:', err.config);
      });
  }, []);

  return (
    <View>
      <ShipmentList shipments={shipments} />
    </View>
  );
};

export default HomeScreen;
