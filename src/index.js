import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Context from './components/Context';


ReactDOM.render(
  <React.StrictMode>
    <Context>
    <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
