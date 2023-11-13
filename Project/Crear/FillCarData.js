import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

export default class FillCarData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placas: "",
      marca: "",
      color: "",
      tipo: "",
    };
  }

  next = () => {
    const navigation = this.props.navigation;

    console.log(this.state);
    navigation.navigate("Datos de la cita", {
      placas: this.state.placas,
      marca: this.state.marca,
      color: this.state.color,
      tipo: this.state.tipo
    });
  }

  Accept = () => {
    return (
      <TouchableOpacity style={stylesAccept.fondo} onPress={this.next}>
        <Text style={{ "fontSize": 40 }}>Siguiente</Text>
      </TouchableOpacity>
    );
  }

  formulario = () => {
    
    const Campo = ({ nombre, saveState}) =>{
        return(
          <View>
            <Text style={{
              marginLeft: 22,
              marginTop: 10,
              fontWeight: "bold",
              color: "black",
              fontSize: 18,
            }}>{nombre}: </Text>
            <TextInput style={{
              borderWidth: 1,
              width: 200,
              height: 50,
              borderRadius: 20,
              borderColor: "white",
              marginTop: 5,
              marginBottom: 8,
              marginLeft: 20,
              width: 280,
              backgroundColor: "white",
              fontSize: 15,
              marginLeft: 20,
              color: "black",
            }} onChangeText={saveState}
            ></TextInput>
          </View>
        );
    }

   const onChange = name => value => {
      this.setState({ [name]: value });
    }


    return (
      <View style={stylesFormulario.fondo}>
        <Campo nombre={"Placas"} saveState={onChange("placas")} /> 
        <Campo nombre={"Marca"} saveState={onChange("marca")} />
        <Campo nombre={"Color"} saveState={onChange("color")} />
        <Campo nombre={"Tipo"} saveState={onChange("tipo")} />
      </View>

    );
  }

  render() {
    const image = require("../../Imagenes/Carro.jpg");
    return (
      <View style={stylesMain.container}>
        <ImageBackground source={image} resizeMode="cover" style={stylesMain.image}>
          <View style={stylesMain.containerHigh}>
            <this.formulario />
          </View>
          <View style={stylesMain.containerLow}>
            <this.Accept/>
          </View>
        </ImageBackground>
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

const stylesFormulario = StyleSheet.create({
  fondo: {
    height: 400,
    width: 350,
    borderRadius: 30,
    //justifyContent: 'space-around', //define la posicion, entre los elementos adentro (hijos)
    resizeMode: 'center',
    backgroundColor: "#E47B1F",

    flexDirection: "column",
  },
  container: {
    flex: 1, // ocupar todo el espacio que pueda
    flexDirection: "row", //define como alineara los items (default: column (columna))
    //los reverse, sera al reves (final es el inicio, etc)
    alignItems: "center",
    justifyContent: "center",
  }
});

const stylesMain = StyleSheet.create({
  container: {
    flex: 1, // ocupar todo el espacio que pueda
    flexDirection: "column", //define como alineara los items (default: column (columna))
    //los reverse, sera al reves (final es el inicio, etc)
    //alignItems: "flex-start", //define si se alinea al inicio, en medio o al final
    //justifyContent: "center", // alinea los elementos, contrariamente a flexDirection
    //ejemplo, si esta en column ahora sera en row, y vicerversa.
  },
  containerHigh: {
    flex: 4, // ocupar todo el espacio que pueda
    flexDirection: "column", //define como alineara los items (default: column (columna))
    //los reverse, sera al reves (final es el inicio, etc)
    alignItems: "center", //define si se alinea al inicio, en medio o al final, y delimita
    //--si esta al centro, no podra salirse de ahi, y asi sucesivamente.
    justifyContent: "center", // igual a flexDirection, pero en forma contraria
    //--ejemplo, si esta en column ahora sera en row, y vicerversa.
  },
  containerLow: {
    flex: 1, // ocupar todo el espacio que pueda
    flexDirection: "column", //define como alineara los items (default: column (columna))
    //los reverse, sera al reves (final es el inicio, etc)
    alignItems: "center", //define si se alinea al inicio, en medio o al final
    justifyContent: "flex-start", // alinea los elementos, contrariamente a flexDirection
    //ejemplo, si esta en column ahora sera en row, y vicerversa.
    //backgroundColor: "white"
  },
  image: {
    flex: 1,
  },
  logo: {
    width: 200, //si esta en column, aqui modificas el tamaño
    height: 100, //si esta en row, aqui modificas el tamaño
    resizeMode: 'center', //cuanto cubrira del contenedor
  },
  text: {
    backgroundColor: '#000000c0',
  },
});