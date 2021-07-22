/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

function Main() {
  return (<App />);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
