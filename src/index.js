import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './router';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'

import "../node_modules/bootstrap/dist/css/bootstrap.css"

const store = new createStore(combineReducers(reducers),{tags:[1,2,3,4,5]});


ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));
registerServiceWorker();
