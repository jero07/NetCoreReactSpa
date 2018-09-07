import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
     <CssBaseline/>
      <App />
    </React.Fragment>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();
