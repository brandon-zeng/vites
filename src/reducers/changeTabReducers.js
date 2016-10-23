import { combineReducers } from 'redux'
import {CHANGE_TAB, changeTab} from '../actions/changeTab.js'

let tabChanger = (state = {pageIndex: "0"}, action) => {
	switch (action.type) {
		case CHANGE_TAB:
			return {
				pageIndex: action.pageIndex
			}
		default:
			return state
	}
}

let dbFetcher = (state = {data: [], isFetching: false}, action) => {
	switch (action.type) {
		case 'begin_fetch_db':
			return {
				data: [],
				isFetching: true
			}
		case 'update_fetch_db':
			return {
				data: action.data,
				isFetching: false
			}
		default:
			return state
	}
}

const viteApp = combineReducers({
  tabChanger,
  dbFetcher
})


export default viteApp