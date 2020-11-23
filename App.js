import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      weather: ""
    }
  }
  
  getWeather = async() => {
    var url = "https://fcc-weather-api.glitch.me/api/current?lat=12.9569&lon=77.70";
    return fetch(url).then(response=>response.json())
    .then(responseJSON=>{
      this.setState({
        weather: responseJSON, 
      })
      console.log(this.state.weather);
    })
  }

  componentDidMount(){
    this.getWeather();
  }

  render(){

    if(!this.state.weather == ""){
      return(
        <View style = {styles.container}>
          <Text style = {styles.textStyle}>WEATHER APP</Text>
          <Text style = {styles.textStyle}>MIN TEMP: {this.state.weather.main.temp_min}</Text>
          <Text style = {styles.textStyle}>DESC: {this.state.weather.weather[0].description}</Text>
          <Text style = {styles.textStyle}>TEMP: {this.state.weather.main.temp}</Text>
          <Text style = {styles.textStyle}>MAX TEMP: {this.state.weather.main.temp_max}</Text>
          <Text style = {styles.textStyle}>HUMIDITY: {this.state.weather.main.humidity}%</Text>
        </View>
      )
    }
    else{
      return(
        <View>
          <Text>WEATHER APP</Text>
          <Text>LOADING </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
