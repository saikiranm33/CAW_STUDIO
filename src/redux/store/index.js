import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootSaga from '../saga/index';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
let middleware;

/* global __DEV__ */
if (__DEV__) {
  middleware = composeWithDevTools(
    applyMiddleware(sagaMiddleware, createLogger()),
  );
} else {
  middleware = applyMiddleware(sagaMiddleware);
}

export default function configureStore() {
  const store = createStore(rootReducer, middleware);
  sagaMiddleware.run(rootSaga);
  return store;
}
