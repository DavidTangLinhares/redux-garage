// src/containers/cars_show.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { deleteCar } from '../actions';
import Aside from '../components/aside';
import logoSquare from '../../assets/images/logo_square.svg';

class CarsShow extends Component {
  handleDelete = () => {
    const { car, garage, history, deleteCar } = this.props;
    deleteCar(car.id, garage);
    history.push('/');
  };

  render() {
    const { car, garage } = this.props;

    if (!car) {
      return [
        <Aside garage={garage}>
          <Link to="/" className="btn-back">Back to list</Link>
        </Aside>,
        <div className="car-container">
          <div className='car-card'> No car... </div>
        </div>
      ];
    }

    return [
        <Aside garage={garage}>
          <Link to="/" className="btn-back">Back to list</Link>
        </Aside>,
        <div className="car-container">
          <div className="car-card">
            <img src={logoSquare} alt="Car" className="car-picture" />
            <div className="car-details">
              <p>
                <strong>
                  {car.brand.toUpperCase()} {car.model.toUpperCase()}
                </strong>
              </p>
              <p><strong>Owner:</strong> {car.owner}</p>
              <p className="plate">{car.plate}</p>
              <button className="delete" onClick={this.handleDelete}>
                🗑 Delete
              </button>
            </div>
          </div>
        </div>
    ];
  }
}

const mapStateToProps = (state, ownProps) => {
  const carId = ownProps.match.params.id;
  return {
    garage: state.garage,
    car: state.cars.find((car) => String(car.id) === carId)
  };
};

export default withRouter(connect(mapStateToProps, { deleteCar })(CarsShow));
