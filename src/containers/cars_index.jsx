// src/containers/cars_index.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions/index';
import Aside from '../components/aside';
import logoSquare from '../../assets/images/logo_square.svg';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    const { cars } = this.props;

    // Fallback when no cars yet - and for first rendering
    if (!cars || cars.length === 0) {
      return <div className='no-car'><p>No Cars in Garage.</p></div>
    }

    return cars.map((car) => (
      <div className="car-smallad" key={car.id}>
        <Link to={`/cars/${car.id}`}></Link>
          <img className='car-logo' src={logoSquare} alt={`${car.brand} ${car.model}`} />
          <div className='car-details'>
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li>
                <strong>Owner: </strong> {car.owner}
              </li>
            </ul>
          </div>
      </div>
    ));
  }

  render() {
    const { cars, garage } = this.props;

    return [
        <Aside key="aside" garage={this.props.garage}>
          <Link to="/cars/new">Add a car</Link>
        </Aside>,
        <div className="list-container">
          {this.renderCars()}
        </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
