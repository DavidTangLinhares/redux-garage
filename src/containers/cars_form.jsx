import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarsForm extends Component {
  render() {
    return (
      <div>
        <h1>CarsForm</h1>
        <Link to="/">→ Garage</Link>
      </div>
    );
  }
}

export default CarsForm;
