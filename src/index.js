
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './components/store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './components/actions/courseActions';



const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store} >  
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
    document.getElementById('app')
);