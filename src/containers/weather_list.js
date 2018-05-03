import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps =cityData.list.map(weather => weather.main.temp);
    const humidities =cityData.list.map(weather => weather.main.humidity);
    const pressures =cityData.list.map(weather => weather.main.pressure);

    return(
      <tr key={name}>
        <td>{name}</td>
        <td><Chart color="red" data={temps}/></td>
        <td><Chart color="blue" data={pressures}/></td>
        <td><Chart color="green" data={humidities}/></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Teamperatre</th>
            <th>Pressure</th>
            <th>Humidity</th>
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