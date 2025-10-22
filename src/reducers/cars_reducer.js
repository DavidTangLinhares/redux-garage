// src/reducers/cars_reducer
import { ADD_CAR, FETCH_CARS } from "../actions";

export default function carsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      // console.log('carsReducer (FETCH_CARS): ', action.payload);
      return action.payload || [];
    case ADD_CAR:
      return [...state, action.payload];
    default:
      return state;
  }
}
