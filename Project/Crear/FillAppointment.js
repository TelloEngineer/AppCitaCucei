import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, ImageBackground, Button } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import DatePicker from 'react-native-date-picker'
import {format} from "date-fns";
import moment from 'moment';
{/*
  placas: this.props.route.params.placas,
    marca: this.props.route.params.marca,
      color: this.props.route.params.color,
        tipo: this.props.route.params.tipo,
*/}
function Fecha({ date, setDate, open, setOpen}) {

  return (
    <View style={{marginTop: 20, marginLeft:20, marginRight:50}}>
      <Button  title="Fecha" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        
      />
    </View>
  );
}

function Select({ nombre, saveState, data, etiqueta, defaultV }) {

  return (
    <View>
      <Text style={{
        marginLeft: 22,
        marginTop: 10,
        fontWeight: "bold",
        color: "black",
        fontSize: 18,
      }}>{nombre}: </Text>
      <SelectList
        boxStyles={{
          backgroundColor: "white",
          marginTop: 5,
          width: 280,
          marginLeft: 20,
          borderRadius: 20,
        }}
        inputStyles={{
          color: "black"
        }}
        dropdownTextStyles={{
          color: "black"
        }}
        dropdownStyles={{
          backgroundColor: "white",
          position: "absolute",
          top: 40,
          width: "100%",
          zIndex: 999,
        }}
        placeholder={etiqueta}
        setSelected={saveState}
        data={data}
        search={false}
        defaultOption={defaultV}
        save="value"
      />
    </View>
  )
}

export default class FillAppointment extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      entrada: 0,
      date: new Date(),

      code: 0,

      error: "",
      stateError: false,
      stateAcept: false,

      open: false,
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

  ifIsEdit = () =>{
    if(this.props.route.params.edit){
      const url = "https://buoyant-dynamo-406200.uc.r.appspot.com/CitaCucei" + this.props.route.params.toDelete
      const options = {
        method: 'DELETE'
      }

      fetch(url, options)
        .then(response => {
          console.log(response.statusText);
        })
    }
    
  }

  sendCita = () => {

    const cita = {
      entrada: this.state.entrada,
      color: this.props.route.params.color,
      cita: {
        fecha: format(this.state.date, "dd/MM/yyyy HH:mm")
      },
      citado: {
        identificador: this.props.route.params.identificador,
        tipo: this.props.route.params.tipo,
      },
    };

    const citaExample = {
      entrada: 2,
      color: "verde",
      cita: {
        fecha: "22/11/2023 12:13"
      },
      citado: {
        identificador: "J134241",
        tipo: "Motocicleta"
      }
    }

    const url = "https://buoyant-dynamo-406200.uc.r.appspot.com/CitaCucei"
    const options = {
      method: 'POST',
      body: JSON.stringify(cita),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    this.ifIsEdit()
    //this.ifIsEdit();
    fetch(url, options)
      .then(response => { 
        if (!response.ok) { // si no hay conexion
          // se salta al catch, manda un dato
          throw new Error(response.statusText); //el status
        }
        return response.json(); //retorna el json (objeto)
      })
      .then(response => { //recibe el json (objeto)
        //usas sus campos
        this.setState({ code: response.code }) 
        this.setState({ error: response.message })
        this.returnHome();
      })
      .catch(err => { // recibe el error marcado al throw
          this.setState({ stateError: true })
          this.setState({ error: err.message }) 
        }
      )
    
  }

  isEmpty = () => {
    if (this.state.date === new Date()) {
      return "fecha esta vacio";
    }
    if (this.state.entrada === 0) {
      return "entrada esta vacio";
    }
    return "";
  }

  send = () => {
    check = this.isEmpty();
    if (check != "") {
      this.setState({ stateError: true })
      this.setState({ error: check })
    } else {
      this.setState({ stateError: false })
      this.sendCita();
    }
  }

  formulario = () => {
    onChangeText = name => text => {
      this.setState({ [name]: text });
    };

    const data = [
      { key: '1', value: '1' },
      { key: '2', value: '2' },
      { key: '3', value: '3' },
    ]
    
    defaultValue = value => e => e.value === value
    return (
      <View style={stylesFormulario.fondo}>
        <Fecha date={this.state.date} setDate={onChangeText("date")} open={this.state.open} setOpen={onChangeText("open")}/>
        <Select nombre={"Entrada"} defaultV={data.find(defaultValue(this.state.entrada.toString()))} saveState={onChangeText("entrada")} data={data} etiqueta={"Numero de la entrada"}/>
      </View>

    );
  }

  Accept = () => {
    return (
      <TouchableOpacity style={stylesAccept.fondo} onPress={this.send}>
        <Text style={{ "fontSize": 40 }}>Siguiente</Text>
      </TouchableOpacity>
    );
  }

  componentDidMount() { // 
    
    // initializing my state.
    
   
    if (this.props.route.params.entrada) { // if exist
      this.setState({ ["entrada"]: this.props.route.params.entrada });

      const dato = moment(this.props.route.params.fecha, 'DD/MM/YYYY HH:mm').format("YYYY-MM-DD HH:mm"); //lo convierte a ese formato
      const date = new Date(Date.parse(dato)); //ya con formato valido, a tipo date
      this.setState({ ["date"]: date});// solo lo paso
    }
  }

  render() {
    const image = require("../../Imagenes/Entrada.jpg");
    return (
      <View style={stylesMain.container}>
        <ImageBackground source={image} resizeMode="cover" style={stylesMain.image}>
          <View style={stylesMain.containerHigh}>
            <this.errorMessage />
            <this.AcceptMessage />
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
    height: 200,
    width: 350,
    borderRadius: 30,
    //justifyContent: 'space-around', //define la posicion, entre los elementos adentro (hijos)
    resizeMode: 'center',
    backgroundColor: "#E47B1F",

    flexDirection: "column",
    alignContent: 'center'
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