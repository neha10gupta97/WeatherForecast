import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    // const temps = cityData.list.map(weather => weather.main.temp);
    //convert temp in C
    const temps =_.map(cityData.list.map(weather => weather.main.temp),temp=>temp-273);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={name}>
        <td>{name}<GoogleMap long={lon} lat={lat}/></td>
        <td><Chart color="red" data={temps} units="C"/></td>
        <td><Chart color="blue" data={pressures} units="hPa"/></td>
        <td><Chart color="green" data={humidities} units="%"/></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Teamperatre(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather};
}

// function mapStateToProps(state){
//   return {weather: state.weather };
// }
//we can write this same fn as :
//function mapStateToProps({weather}[is eq to state.weather]){
//   return {weather: weather} => further shrink to => return {weather}
// }

export default connect(mapStateToProps)(WeatherList);