import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
    </Suspense>,
  document.getElementById('root')
);
