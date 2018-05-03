import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps =cityData.list.map(weather => weather.main.temp);

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart color="orange" data={temps}/>
        </td>
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