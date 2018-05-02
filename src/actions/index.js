import axios from 'axios';

const API_KEY = "992ad088de029a224cff088df46f0258";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},ind`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}