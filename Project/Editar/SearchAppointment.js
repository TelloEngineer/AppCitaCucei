import React, { Component, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';

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
    xhttp.open("GET", "http://192.168.100.6:8080/CitaCucei", true);
    xhttp.send();
    
  }
  
  render() {
    const getCita = (item) =>{
       const id = {
          cita: item.id.cita,
          vehiculo: item.id.vehiculo
       }
    }
    return (
      <View>
        <FlatList
            data={this.state.citas} // set item
            keyExtractor={(item, index) => String(index)}  //para llaves compuestas
            renderItem={({ item }) => ( //render item
              <View>
                <Text style={styles.campo}>{item.nombre}</Text>
                <Text style={styles.campo}>{item.cita.fecha}</Text>
                <Text style={styles.campo}>{item.vehiculo.placas}</Text>
                <Text style={styles.campo}>{item.vehiculo.marca}</Text>
                <Text style={styles.campo}>{item.vehiculo.color}</Text>
                <Text style={styles.campo}>{item.vehiculo.tipo}</Text>
                <Text style={styles.campo}>{item.entrada}</Text>
              </View>
            )}  
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    campo: {
       color: "black",
    }
})