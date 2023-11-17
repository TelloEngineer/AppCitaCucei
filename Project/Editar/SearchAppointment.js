import React, { Component, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

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
    };
    //http://192.168.100.6:8080/CitaCucei
    //Se debe de poner el ip de la maquina, si corre en localhost
    //En ves de localhost 192.168.100.6, port: 8080
    xhttp.open("GET", "http://192.168.100.6:8080/CitaCucei", true);
    console.log("hola 2: " + this.state.citas);
    xhttp.send();
    
  }
  
  render() {
    const getCita = (item) =>{
       const cita = {
          id: item.id
       }
    }
    return (
      <View>
        <FlatList
            data={this.state.citas}
            renderItem={({ item }) => (
              <View>
                <Text style={{color: "black"}}>{item.nombre}</Text>
              </View>
            )}  
        />
      </View>
    );
  }
}
