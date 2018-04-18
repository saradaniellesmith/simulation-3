import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import mainReducer from './ducks/mainReducer';
import userReducer from './ducks/userReducer';

const store = createStore(
    combineReducers({ mainReducer, userReducer }),
    applyMiddleware(promiseMiddleware())
);

export default store;

