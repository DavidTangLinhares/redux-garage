// src/containers/cars_new.jsx
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions';

class CarsForm extends Component {
  onSubmit = (values) => {
    this.props.addCar(values, this.props.garage).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit, garage } = this.props;

    return (
      <div>
        <h1>Add car to {garage}</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <label>Brand</label>
            <Field name="brand" component="input" type="text" />
          </div>
          <div>
            <label>Model</label>
            <Field name="model" component="input" type="text" />
          </div>
          <div>
            <label>Owner</label>
            <Field name="owner" component="input" type="text" />
          </div>
          <div>
            <label>Plate</label>
            <Field name="plate" component="input" type="text" />
          </div>
          <button type="submit">Add car</button>
        </form>
        <Link to="/">→ Garage</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { garage: state.garage };
}

// redux-form + connect + withRouter
export default withRouter(
  connect(mapStateToProps, { addCar })(
    reduxForm({ form: 'newCarForm' })(CarsForm)
  )
);
