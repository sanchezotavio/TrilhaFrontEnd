import React from 'react';

import ReactDOM from 'react-dom';

import editText from '../util/util';

import App from './components/app.js';

import scss  from '../styles/main.scss';

ReactDOM.render(<App />, document.getElementById("main"));

console.log(editText.upperCase('hello world'))
