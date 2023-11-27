import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, Modal } from 'react-native';

function Campo({ nombre, saveState, etiqueta, dato }) {
    return (
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
                width: 280,
                backgroundColor: "white",
                fontSize: 15,
                marginLeft: 20,
                color: "black",
            }}
                value={dato}
                onChangeText={saveState}
                placeholder={etiqueta}
                placeholderTextColor="grey"
            ></TextInput>
        </View>
    );
}

export default class SetIdSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        error: "",
        stateError: false,
    };
  }

    next = () => {
        const navigation = this.props.navigation;
        navigation.navigate("Busqueda", {
            id: this.state.id 
        });
    }
    isEmpty = () => {
        if (this.state.id.trim() === "") {
            return "El campo identificador esta vacio";
        }
        return "";
    }
    send = () => {
        check = this.isEmpty();
        if (check != "") {
            this.setState({ stateError: true })
            this.setState({ error: check })
            console.log(this.state.stateError)
        } else {
            this.setState({ stateError: false })
            this.next();
        }
    }
    Accept = () => {
        return (
            <TouchableOpacity style={stylesAccept.fondo} onPress={this.send}>
                <Text style={{ "fontSize": 40 }}>Siguiente</Text>
            </TouchableOpacity>
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

    formulario = () => {
        onChangeText = name => text => {
            this.setState({ [name]: text });
        };

        return (
            <View style={stylesFormulario.fondo}>
                <Campo nombre={"Nombre o Placa a buscar"} dato={this.state.id} saveState={onChangeText("id")} etiqueta={"ponga placas o nombre"} />
            </View>

        );
    }

  render() {
      const image = require("../../Imagenes/search.jpg");

      return (
          <View style={stylesMain.container}>
              <ImageBackground source={image} resizeMode="cover" style={stylesMain.image}>
                  <View style={stylesMain.containerHigh}>
                      <this.errorMessage />
                      <this.formulario />
                  </View>
                  <View style={stylesMain.containerLow}>
                      <this.Accept />
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
        height: 350,
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