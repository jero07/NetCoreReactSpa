import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';
import './base.scss';

 const rootElement = document.getElementById('app');
 
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,rootElement);

registerServiceWorker();
