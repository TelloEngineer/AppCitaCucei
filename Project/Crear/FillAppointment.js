import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FillAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nombre: "",
      entrada: 0,
      vehiculo: "",
      hora: "",
      fecha: "",
    };
  }

  render() {
    return (
      <View>
        <Text> FillAppointment </Text>
      </View>
    );
  }
}
