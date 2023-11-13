import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FillCarData from './Crear/FillCarData';
import FillAppointment from './Crear/FillAppointment';
import SearchAppointment from './Editar/SearchAppointment';

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Crear = () => {
    const Nav = createNativeStackNavigator();
    return(
        <Nav.Navigator>
          <Nav.Screen name='Datos del Vehiculo' component={FillCarData}/>
          <Nav.Screen name='Datos de la cita' component={FillAppointment} />
        </Nav.Navigator>
    );
  }

  Editar = () => {
    const Nav = createNativeStackNavigator();
    return (
      <Nav.Navigator>
        <Nav.Screen name='Busqueda' component={SearchAppointment} />
      </Nav.Navigator>
    );
  }

  render() {

    const Tab = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Tab.Screen name='Crear' component={this.Crear} options={{ headerShown: false }} />
          <Tab.Screen name='Editar' component={this.Editar} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
