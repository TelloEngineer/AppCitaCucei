import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

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
    return (
      <View style={stylesFormulario.fondo}>
        <View style={stylesFormulario.container}>

        </View>
        <View style={stylesFormulario.container}>
            
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
    flex: 1, // ocupar todo el espacio que pueda
    flexDirection: "row", //define como alineara los items (default: column (columna))
    //los reverse, sera al reves (final es el inicio, etc)
    alignItems: "center", //define si se alinea al inicio, en medio o al final, y delimita
    //--si esta al centro, no podra salirse de ahi, y asi sucesivamente.
    //justifyContent: "flex-start", // igual a flexDirection, pero en forma contraria
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
    flex: 1, // ocupar todo el espacio que pueda
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
    flex: 2,
    width: 20, //si esta en column, aqui modificas el tamaño
    height: 70, //si esta en row, aqui modificas el tamaño
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