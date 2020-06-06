import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './layout/style/main.css';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { initStore, history } from './store/store.js';

import { ConnectedRouter } from 'connected-react-router';

import Router from './router.jsx';

const { store, persistor } = initStore();

let container = document.getElementById('app');


ReactDom.render(
    <MuiThemeProvider>
         <PersistGate loading={ null } persistor={ persistor }>
            <Provider store = { store }>
                <ConnectedRouter history = { history }>
                    <Router />
                </ConnectedRouter>
            </Provider>
        </PersistGate>
    </MuiThemeProvider>
    ,
    container
);