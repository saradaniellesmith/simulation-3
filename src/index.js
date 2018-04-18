import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';

ReactDOM.render(
 <MuiThemeProvider>
<Provider store={store}>
<HashRouter>
        <App /> 
</HashRouter>
</Provider>
</MuiThemeProvider>,
    document.getElementById('root'));

