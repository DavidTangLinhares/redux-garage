// src/reducers/cars_reducer
import { FETCH_CARS } from "../actions";

export default function carsReducer(state = null, action) {
  switch (action.type) {
    case FETCH_CARS:
      console.log('carsReducer (FETCH_CARS): ', action.payload);
      return action.payload || [];
    default:
      return state;
  }
}
