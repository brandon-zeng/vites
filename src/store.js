import { createStore } from 'redux';
import viteApp from './reducers/changeTabReducers';


let store = createStore(viteApp);

export default store;