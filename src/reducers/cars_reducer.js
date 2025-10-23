// src/reducers/cars_reducer.js
import { ADD_CAR, FETCH_CARS, DELETE_CAR } from "../actions";

export default function carsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload || [];

    case ADD_CAR:
      return [...state, action.payload];

    case DELETE_CAR:
      return state.filter(car => car.id !== action.meta.carId);

    default:
      return state;
  }
}
