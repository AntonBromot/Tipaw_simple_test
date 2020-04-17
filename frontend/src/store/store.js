import { applyMiddleware, createStore, compose } from "redux" ;
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk" ;
import Reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
      sagaMiddleware = createSagaMiddleware(),
      composer = composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
      store = createStore(Reducers, composer);

export default store ;
