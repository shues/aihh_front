import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import VisibleApp from './redux/conteiners/visibleApp';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<VisibleApp store={store} />);
