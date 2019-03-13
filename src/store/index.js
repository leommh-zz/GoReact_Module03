import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(
    process.env.NODE_ENV === 'development' && console.tron.createEnhancer(), // Reactotron,
    applyMiddleware(...middlewares),
  ),
);

sagaMiddleware.run(sagas);

export default store;
