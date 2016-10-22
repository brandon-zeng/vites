import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import MainComponent from './views/main.jsx'
import store from './store.js';

render(
	<Provider store={store}>
		<MainComponent />
	</Provider>, 
	document.getElementById('content')
);

