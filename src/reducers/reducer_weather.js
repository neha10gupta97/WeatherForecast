import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); //push mutate the currrent arr, while concat create a new array[state has to returned new]
      return [action.payload.data, ...state]; //es6 sytax take both's content and add them in new array
  }

  return state;
}