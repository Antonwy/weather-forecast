import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

//REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { fetchWeather } from './reducers';
//REDUX

const logger = createLogger();

const rootReducer = combineReducers({
    weather: fetchWeather
})

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root'));
        registerServiceWorker();
