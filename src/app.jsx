import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import MainComponent from './views/main.jsx'
import store from './store.js';
import ReactRouter from './react_route.jsx'

render(
	<Provider store={store}>
		<ReactRouter />
	</Provider>, 
	document.getElementById('content')
);

