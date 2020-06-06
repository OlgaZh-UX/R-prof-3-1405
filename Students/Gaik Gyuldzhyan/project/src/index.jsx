import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

// redux
import { Provider } from 'react-redux';
import { initStore, history } from './store/store.js';

import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react' ;

import Router from './router.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

let container = document.getElementById('app')

let user = 'Loontik';

const { store, persistor } = initStore();

ReactDom.render (
    <Provider store={ store }>
        <PersistGate loading = { null } persistor = { persistor } >
            <ConnectedRouter history = { history }>
                <MuiThemeProvider>
                    <Router user={user}/>
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    container
)

