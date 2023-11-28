import React, { Component, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default class SearchAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: [],
      see: ""
    };
  }

  componentDidMount(){

    const url = "https://buoyant-dynamo-406200.uc.r.appspot.com/CitaCucei/" + this.props.route.params.id
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }

    fetch(url, options)
      .then(response => {
        if (response.ok) { // si hay conexion
          response.json().then(json => {  // si no encontro, vacio manda
            this.setState({ citas: json }) // si encontro, manda el json
          });
        }
      })
  }
  

  ir_a_perfil = (item) => {
    const navigation = this.props.navigation
    const perfilData = {
      entrada: item.entrada,
      color: item.color,
      fecha: item.cita.fecha,
      identificador: item.citado.identificador,
      tipo: item.citado.tipo,

    }
    navigation.navigate("Crear", {perfilData});
  }
  
  render() {
    
    const empty = () => {
      return (
        <View style={{alignContent: 'center'}}>
          <Text style={styles.campo}>No se encontro ninguna cita</Text>
        </View>
      )
    }

    return (
      <FlatList
          ListEmptyComponent={empty}
          //contentContainerStyle={styles.lista}
          data={this.state.citas} // set item
          keyExtractor={(item, index) => String(index)}  //para llaves compuestas
          renderItem={({ item }) => ( //render item
            <View style={styles.lista}>
              <TouchableOpacity onPress={() => this.ir_a_perfil(item)}>
                <Text style={styles.campo}>{item.citado.identificador}</Text>
                <Text style={styles.campo}>{item.cita.fecha}</Text>
                <Text style={styles.campo}>{item.color}</Text>
                <Text style={styles.campo}>{item.citado.tipo}</Text>
                <Text style={styles.campo}>{item.entrada}</Text>
              </TouchableOpacity>
            </View>
          )}  
      />
    );
  }
}

const styles = StyleSheet.create({
    campo: {
      color: "black",
      alignSelf: "center",
      fontSize:  17,
    },
    lista: {
      borderWidth: 2,
      borderRadius: 20,
      width: 300,
      height: 120,
      backgroundColor: "#E56363",
      alignSelf: "center",
      marginBottom: 8
  }
})