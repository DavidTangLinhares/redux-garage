// src/containers/cars_index.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  render() {
    const { cars, garage } = this.props;

    return (
      <div>
        <h1>Cars in {garage}</h1>
        <ul>
          {cars.map(car => (
            <li key={car.id}>
              {car.brand} {car.model} — Owner: {car.owner} — Plate: {car.plate}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  garage: state.garage,
  cars: state.cars
});

export default connect(mapStateToProps)(CarsIndex);
