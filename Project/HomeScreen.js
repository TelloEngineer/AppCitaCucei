import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  instruction = () =>{
    return (
      <View style={stylesInstruction.fondo}>
        <Text>Nota:</Text>
        <Text>Tienes 15 minutos de tolerancia</Text>
        <Text>Se borra la cita despues de este tiempo</Text>
      </View>
    );
  }

  formulario = () => {
    // "#063970"
    const Click1 = () => {
      console.log("diste click al boton prueba");
    }

    const Boton = ({text, descripcion, onpress: Function}) => {

      return (
        <TouchableOpacity style={{
          width: 300,
          height: 50,
          borderRadius: 30,
        }} onPress={Function}>
          <View style={{
            width: 300,
            height: 50,
            borderWidth: 2,
            borderColor: "#063970",
            backgroundColor: "#063970",
            borderRadius: 30,
          }}>
            <Text style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              textAlignVertical: "center"
            }}>{text}</Text>
            <Text style={{
              color: "white",
              fontSize: 16,
              textAlign: "center",
              textAlignVertical: "center"
            }}>{descripcion}</Text>
          </View>
        </TouchableOpacity>
      );
    };  

    return (
      <View style={stylesFormulario.fondo}>
        <View style={stylesFormulario.container}>
          <Boton text="Crear Cita" descripcion="Crea cita para entrar con tu vehiculo" onpress={Click1} />
        </View>
        <View style={[stylesFormulario.container]}>
          <Boton text="Editar Cita" descripcion="Modifica alguna cita existente" onpress={Click1}/>
        </View>
      </View>

    );
  };

  render() {
    {/*<ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Image style={styles.logo} source={logo}/>    
            <Text style={styles.text}>Inside</Text>
        </ImageBackground>*/}

    const image = require("../Imagenes/Background.jpg");
    const logo = require("../Imagenes/cucei-logo.png");
    return (
      <View style={stylesMain.container}>
        <ImageBackground source={image} resizeMode="cover" style={stylesMain.image}>
          <View style={stylesMain.containerHigh}>
            <Image style={stylesMain.logo} source={logo} />
          </View>
          <View style={stylesMain.containerMiddle}>
            <this.formulario />
          </View>
          <View style={stylesMain.containerLow}>
            <this.instruction/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const stylesInstruction = StyleSheet.create({
  fondo: {
    height: 100,
    width: 350,
    borderRadius: 30,
    //justifyContent: 'space-around', //define la posicion, entre los elementos adentro (hijos)
    resizeMode: 'center',
    backgroundColor: "#072E81",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const stylesFormulario = StyleSheet.create({
  fondo: {
    flex: 1,
    height: 200,
    width: 350,
    borderRadius: 30,
    //justifyContent: 'space-around', //define la posicion, entre los elementos adentro (hijos)
    resizeMode: 'center',
    backgroundColor: "#1960A2",

    flexDirection: "column",
  },
  container:{
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
    flex: 2, // ocupar todo el espacio que pueda
    flexDirection: "column", //define como alineara los items (default: column (columna))
    //los reverse, sera al reves (final es el inicio, etc)
    alignItems: "center", //define si se alinea al inicio, en medio o al final, y delimita
    //--si esta al centro, no podra salirse de ahi, y asi sucesivamente.
    justifyContent: "center", // igual a flexDirection, pero en forma contraria
    //--ejemplo, si esta en column ahora sera en row, y vicerversa.
  },
  containerMiddle: {
    flex: 1, // ocupar todo el espacio que pueda
    flexDirection: "colummn", //define como alineara los items (default: column (columna))
    //los reverse, sera al reves (final es el inicio, etc)
    alignItems: "center", //define si se alinea al inicio, en medio o al final
    //justifyContent: "flex-start", // alinea los elementos, contrariamente a flexDirection
    //ejemplo, si esta en column ahora sera en row, y vicerversa.
    //backgroundColor: "white"
  },
  containerLow: {
    flex: 2, // ocupar todo el espacio que pueda
    flexDirection: "column", //define como alineara los items (default: column (columna))
    //los reverse, sera al reves (final es el inicio, etc)
    alignItems: "center", //define si se alinea al inicio, en medio o al final
    justifyContent: "center", // alinea los elementos, contrariamente a flexDirection
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
    borderColor: '#000000c0',
  },
});

{/*
          color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center', //alinear horizontalmente
        backgroundColor: '#000000c0',
        textAlignVertical: "center" // verticalmente (arriba abajo)
       */}