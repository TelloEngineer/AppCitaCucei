import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
{/*
  placas: this.props.route.params.placas,
    marca: this.props.route.params.marca,
      color: this.props.route.params.color,
        tipo: this.props.route.params.tipo,
*/}
export default class FillAppointment extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: 0,
      nombre: "",
      entrada: 0,
      hora: "",
      fecha: "",

      
      code: 0,
      message: "",
    };
  }

  sendCita = () => {

    const cita = {
      nombre: this.state.nombre,
      hora: this.state.hora,
      fecha: this.state.fecha,
      vehiculo: {
        placas: this.props.route.params.placas,
        marca: this.props.route.params.marca,
        color: this.props.route.params.color,
        tipo: this.props.route.params.tipo,
      },
      entrada: this.state.entrada,
    };

    const citaExample = {
      nombre: "jose marron",
      fecha: "14/11/2023",
      hora: "23:15",
      vehiculo: {
        placas: "J13424421",
        marca: "Ford",
        color: "rojo",
        tipo: "Automovil"
      },
      "entrada": 3
    }

    const url = "http://192.168.100.6:8080/CitaCucei"
    const options = {
      method: 'POST',
      body: JSON.stringify(citaExample),
      headers: {
        'Content-Type': 'application/json'
      }
    }

   
      fetch(url, options)
        .then(response => {
          if (response.ok) {
            throw new Error('Network error');
          }
          return response.json();
        })
        .then(response => {
          this.setState({ code: response.code })
          this.setState({ message: response.message })
          console.log(this.state.code + " " + this.state.message)
        })
        .catch(err => console.log( "hjajsj " + err))
    
  }

  isEmpty = () => {
    if (this.state.nombre.trim() === "") {
      return "nombre esta vacio";
    }
    if (this.state.fecha.trim() === "") {
      return "fecha esta vacio";
    }
    if (this.state.hora.trim() === "") {
      return "hora esta vacio";
    }
    if (this.state.entrada.trim() === "") {
      return "entrada esta vacio";
    }
    return "";
  }

  send = () => {
    check = this.isEmpty();
    console.log(check);
    if (check != "") {
      console.log(check);
    } else {
      this.sendCita();
    }
  }


  Accept = () => {
    return (
      <TouchableOpacity style={stylesAccept.fondo} onPress={this.sendCita}>
        <Text style={{ "fontSize": 40 }}>Siguiente</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <Text style={{color: "red"}}> hola: {this.state.vehiculo} </Text>
        <this.Accept></this.Accept>
      </View>
      
    );
  }
}

const stylesAccept = StyleSheet.create({
  fondo: {
    height: 70,
    width: 350,
    borderRadius: 30,
    //justifyContent: 'space-around', //define la posicion, entre los elementos adentro (hijos)
    resizeMode: 'center',
    backgroundColor: "#D63616",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});