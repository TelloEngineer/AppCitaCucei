import React, { Component, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default class SearchAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: [],
    };
  }

  componentDidMount(){
    var xhttp = new XMLHttpRequest();
    _this = this;

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp.responseText);
        var Temp = JSON.parse(xhttp.responseText)
        _this.setState({ citas: Temp })
      }
      console.log(this.status);
    };
    //http://192.168.100.6:8080/CitaCucei
    //Se debe de poner el ip de la maquina, si corre en localhost
    //En ves de localhost 192.168.100.6, port: 8080
    xhttp.open("GET", "http://buoyant-dynamo-406200.uc.r.appspot.com/CitaCucei/" + this.props.route.params.id, true);
    xhttp.send();
    
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