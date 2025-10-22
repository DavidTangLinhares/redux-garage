// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars(garage) {
  const URL = `https://garage.api.lewagon.com/${garage}/cars`;
  const promise = fetch(URL).then((response) => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}
