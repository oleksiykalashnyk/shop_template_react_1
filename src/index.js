import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from "./App";

const REACT_APP_BASE_NAME = process.env.REACT_APP_BASE_NAME || '/shop';

ReactDOM.render(
  <BrowserRouter basename={REACT_APP_BASE_NAME}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);