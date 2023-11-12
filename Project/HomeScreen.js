import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  formulario = () => {
    return (
      <View style={stylesFormulario.fondo}>
      </View>
      
    );
  };

  render() {
    {/*<ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Image style={styles.logo} source={logo}/>    
            <Text style={styles.text}>Inside</Text>
        </ImageBackground>*/}

    const image =  require("../Imagenes/Background.jpg");
    const logo = require("../Imagenes/cucei-logo.png");
    return (
      <View style={stylesMain.container}>
        <ImageBackground source={image} resizeMode="cover" style={stylesMain.image}>
          <View style={stylesMain.containerHigh}>
            <Image style={stylesMain.logo} source={logo} />
          </View>
          <View style={stylesMain.containerMiddle}>
              <this.formulario/>
          </View>
          <View style={stylesMain.container}>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const stylesFormulario = StyleSheet.create({
  fondo: {
    flex: 1,
    width: 350,
    borderRadius: 30,
    resizeMode: 'center',
    borderColor: "#e27743",
    backgroundColor: "#e27743",
  },
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
      flex: 2, // ocupar todo el espacio que pueda
      flexDirection: "colummn", //define como alineara los items (default: column (columna))
      //los reverse, sera al reves (final es el inicio, etc)
      alignItems: "center", //define si se alinea al inicio, en medio o al final
      //justifyContent: "flex-start", // alinea los elementos, contrariamente a flexDirection
      //ejemplo, si esta en column ahora sera en row, y vicerversa.
      //backgroundColor: "white"
    },
    image: {
        flex: 1, 
    },
    logo:{
        flex: 2,
        width: 20, //si esta en column, aqui modificas el tamaño
        height: 70, //si esta en row, aqui modificas el tamaño
        resizeMode: 'center', //cuanto cubrira del contenedor
    },
    text: { 
        flex: 2,
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center', //alinear horizontalmente
        backgroundColor: '#000000c0',
        textAlignVertical: "center" // verticalmente (arriba abajo)
    },
});