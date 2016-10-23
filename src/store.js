import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import viteApp from './reducers/changeTabReducers';


let store = createStore(viteApp, applyMiddleware(ReduxPromise, thunk));

export default store;