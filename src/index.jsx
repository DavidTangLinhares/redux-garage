// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer';
import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';

import { reducer as formReducer } from 'redux-form';

const garageName = prompt("What's your garage?");

const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = garageName, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// Render app with React Router v5
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="view-container">
        <Switch>
          <Route exact path="/" component={CarsIndex} />
          <Route path="/cars/new" component={CarsNew} />
          <Route path="/cars/:id" component={CarsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
