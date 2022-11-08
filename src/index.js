import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Applications from './Applications';
import 'macro-css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Applications />
  </React.StrictMode>
);