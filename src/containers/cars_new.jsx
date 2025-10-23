// src/containers/cars_new.jsx
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions';

// === VALIDATIONS ===
const required = value => (value ? undefined : 'Required');

const plateFormat = value =>
  value && !/^[A-Z0-9]+$/.test(value)
    ? 'Use only uppercase letters and digits (no spaces or special characters)'
    : undefined;

const nameFormat = value =>
  value && !/^[A-Za-z\s]+$/.test(value)
    ? 'Only letters and spaces are allowed'
    : undefined;

// === RENDER FIELD ===
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <div className="error-message">{error}</div>}
  </div>
);

// === MAIN FORM COMPONENT ===
class CarsForm extends Component {
  onSubmit = (values) => {
    this.props.addCar(values, this.props.garage).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit, garage, pristine, submitting, invalid } = this.props;

    return (
      <div className="form-container">
        <div className="overlay"></div>
        <form onSubmit={handleSubmit(this.onSubmit)}>

          <Field
            name="brand"
            label="Brand"
            component={renderField}
            type="text"
            validate={[required]}
          />

          <Field
            name="model"
            label="Model"
            component={renderField}
            type="text"
            validate={[required]}
          />

          <Field
            name="owner"
            label="Owner"
            component={renderField}
            type="text"
            validate={[required, nameFormat]}
          />

          <Field
            name="plate"
            label="Plate"
            component={renderField}
            type="text"
            validate={[required, plateFormat]}
          />

          <button type="submit" disabled={pristine || submitting || invalid}>
            Add car
          </button>

          <p><Link to="/">→ Garage</Link></p>
        </form>
      </div>
    );
  }
}

// === REDUX CONNECTION ===
function mapStateToProps(state) {
  return { garage: state.garage };
}

export default withRouter(
  connect(mapStateToProps, { addCar })(
    reduxForm({ form: 'newCarForm' })(CarsForm)
  )
);
