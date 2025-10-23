// src/actions/index.js
export const FETCH_CARS = 'FETCH_CARS';
export const ADD_CAR = 'ADD_CAR';
export const DELETE_CAR = 'DELETE_CAR';

// Fetch all cars for a garage
export function fetchCars(garage) {
  const URL = `https://garage.api.lewagon.com/${garage}/cars`;
  const promise = fetch(URL).then((response) => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

// Add a new car
export function addCar(car, garage) {
  const URL = `https://garage.api.lewagon.com/${garage}/cars`;
  const request = fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then((response) => response.json());
  return {
    type: ADD_CAR,
    payload: request
  };
}

// Delete a car by ID
export function deleteCar(carId, garage) {
  const URL = `https://garage.api.lewagon.com/cars/${carId}`;
  const request = fetch(URL, {
    method: 'DELETE'
  }).then((response) => response.json());
  return {
    type: DELETE_CAR,
    payload: request,
    meta: { carId } // optional: helps reducer remove the car immediately
  };
}
