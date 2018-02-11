import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './sb-admin-2.css';

ReactDOM.render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
