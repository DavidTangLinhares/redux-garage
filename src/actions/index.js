// src/actions/index.js
export const FETCH_CARS = 'FETCH_CARS';
export const ADD_CAR = 'ADD_CAR';

export function fetchCars(garage) {
  const URL = `https://garage.api.lewagon.com/${garage}/cars`;
  const promise = fetch(URL).then((response) => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function addCar(car, garage) {
  const URL = `https://garage.api.lewagon.com/${garage}/cars`;
  const request = fetch(URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(car)
  }).then((response) => response.json());
  return {
    type: ADD_CAR,
    payload: request
  };
}
