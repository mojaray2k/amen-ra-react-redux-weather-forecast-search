import { FETCH_WEATHER } from './../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      //return state.concat([ action.payload.data ]);
      // The above line is the ES5 way of creating a new array and adding a new value to it
      // We never want to mutate state like return state.push(action.payload.data)
      return [ action.payload.data, ...state];
      // The above line is the ES6 way of creating a new array and adding a new value to it
      // This way we add the new object at the beginning of the array
  }
  return state;
}