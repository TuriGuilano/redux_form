import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import DeclarationModule from './components/DeclarationModule';
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render((
  <DeclarationModule />
), document.getElementById('app'));