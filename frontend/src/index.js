import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './store/reducers'
import rootSaga from './store/sagas'
import Application from './view'
import 'babel-polyfill'


const sagaMiddleware  = createSagaMiddleware();
const store =  createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk, sagaMiddleware)
))

sagaMiddleware.run(rootSaga);


const bootstrapApplication = ( Component ) => ReactDOM.render(
	<Provider store = { store } >
		<BrowserRouter  >
			<Component />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

bootstrapApplication(Application)



