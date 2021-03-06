import React, { Component } from 'react';
import WeatherPage from './Components/WeatherPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      lat: 46.762716,
      lng: 23.5585658,
    }
  }

  takeCoordonatesFromMapClick = data => {
    this.setState({
      lat: parseFloat(data[0].trim()),
      lng: parseFloat(data[1].trim())

    });
    //console.log('parinte', this.state)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async position => {
      
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      //console.log('curr location', this.state.lat, this.state.lng)
    })
  }

  render() {
    return (
      <WeatherPage
        lat={this.state.lat}
        lng={this.state.lng}
        coords={this.state}
        functionMap={this.takeCoordonatesFromMapClick}
      />
    )
  }
}

export default App;


