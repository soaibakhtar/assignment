// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import redux-thunk middleware
import appReducer from './reducers';

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
