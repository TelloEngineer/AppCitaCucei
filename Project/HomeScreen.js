import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const image =  require("../Imagenes/Background.jpg");
    const logo = require("../Imagenes/cucei-logo.png");
    return (
      <View style={styles.container}>
        {/*<ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Image style={styles.logo} source={logo}/>    
            <Text style={styles.text}>Inside</Text>
        </ImageBackground>*/}
            <Image style={styles.logo} source={logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupar todo el espacio que pueda
        flexDirection: "row", //define como alineara los items (default: column (columna))
        //los reverse, sera al reves (final es el inicio, etc)
        alignItems: "flex-start", //define si se alinea al inicio, en medio o al final
        //justifyContent: "center", // alinea los elementos, contrariamente a flexDirection
        //ejemplo, si esta en column ahora sera en row, y vicerversa.
    },
    image: {
        flex: 1, 
    },
    logo:{
        flex: 1,
        width: 100,
        height: 200,
        resizeMode: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});