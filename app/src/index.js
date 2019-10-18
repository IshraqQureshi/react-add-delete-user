/* Import React Libraries */

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Route_Links from './components/route';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import './assets/css/index.css';
import './assets/css/fonts.css';


ReactDOM.render(<Route_Links />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
