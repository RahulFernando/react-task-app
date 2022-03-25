import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../redux/root-reducer';
import rootSage from '../redux/root-saga';
import createSagaMiddleware from 'redux-saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSage);

export default store;
