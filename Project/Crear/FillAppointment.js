import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
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

      error: "",
      stateError: false,
      stateAcept: false,
    };
  }

  AcceptMessage = () => {
    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={this.state.stateAcept}>
        <View style={{
          borderWidth: 2,
          marginLeft: 35,
          marginTop: 300,
          borderRadius: 20,
          width: 300,
          height: 120,
          backgroundColor: "#1960A2",

          alignItems: "center",
          alignContent: "center"
        }}>
          <Text style={{
            flex: 1,
            marginTop: 10,
            fontWeight: "bold",
            color: "black",
            fontSize: 20,
            textAlign: "center"
          }}>{this.state.error}</Text>
          <TouchableOpacity style={{
            flex: 1,
            borderWidth: 2,
            borderColor: "#063970",
            backgroundColor: "#919EC2",
            width: 250,
            height: 50,
            borderRadius: 40,

            alignItems: "center",
            alignContent: "center"
          }} onPress={() => {
                this.setState({ stateAcept: false })
                const navigation = this.props.navigation;
                navigation.navigate("Home");
              }
            }>
            <Text style={{ flex: 1 }}></Text>
            <Text style={{
              flex: 3,
              fontSize: 20,
              /*marginLeft:100,*/
              fontWeight: "bold",
              color: "#0D246A",
            }}> ACEPTAR </Text>
          </TouchableOpacity>

        </View>
      </Modal>
    );
  }
  errorMessage = () => {
    return (
      <Modal
        transparent={true}
        /*onRequestClose={() => {
           this.setState({modalVisible:false}) 
        }}*/
        animationType="slide"
        visible={this.state.stateError}>
        <View style={{
          borderWidth: 2,
          marginLeft: 35,
          marginTop: 300,
          borderRadius: 20,
          width: 300,
          height: 120,
          backgroundColor: "#D31717",

          alignItems: "center",
          alignContent: "center"
        }}>
          <Text style={{
            flex: 1,
            marginTop: 10,
            fontWeight: "bold",
            color: "black",
            fontSize: 20,
            textAlign: "center"
          }}>{this.state.error}</Text>
          <TouchableOpacity style={{
            flex: 1,
            borderWidth: 2,
            borderColor: "#063970",
            backgroundColor: "#919EC2",
            width: 250,
            height: 50,
            borderRadius: 40,

            alignItems: "center",
            alignContent: "center"
          }} onPress={() => this.setState({ stateError: false })}>
            <Text style={{ flex: 1 }}></Text>
            <Text style={{
              flex: 3,
              fontSize: 20,
              /*marginLeft:100,*/
              fontWeight: "bold",
              color: "#0D246A",
            }}> ACEPTAR </Text>
          </TouchableOpacity>

        </View>
      </Modal>
    );
  }

  returnHome = () =>{
    if(this.state.code == 0){
      this.setState({ stateAcept: true })
      
    }else{
      this.setState({ stateError: true });
    }
      
  }

  sendCita = () => {

    const cita = {
      nombre: this.state.nombre,
      entrada: this.state.entrada,
      cita: {
        fecha: this.state.fecha
      },
      vehiculo: {
        placas: this.props.route.params.placas,
        marca: this.props.route.params.marca,
        color: this.props.route.params.color,
        tipo: this.props.route.params.tipo,
      }
    };

    const citaExample = {
      nombre: "juan perez",
      entrada: 2,
      cita: {
        fecha: "21/11/2023 20:13"
      },
      vehiculo: {
        placas: "J134241",
        marca: "Ford",
        color: "verde",
        tipo: "Motocicleta"
      }
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
          if (!response.ok) {
            this.setState({ stateError: true })
            this.setState({ error: response.message })
            throw new Error('Network error');
          }
          return response.json();
        })
        .then(response => {
          this.setState({ code: response.code })
          this.setState({ error: response.message })
          this.returnHome();
        })
        .catch(err => {
            this.setState({ stateError: true })
            this.setState({ error: err })
          }
        )
    
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
      this.setState({ stateError: true })
      this.setState({ error: check })
      console.log(check);
    } else {
      this.setState({ stateError: false })
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
        <Text style={{ color: "red" }}> hola: {this.props.route.params.tipo} </Text>
        <this.Accept></this.Accept>
        <this.errorMessage />
        <this.AcceptMessage/>
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