import { combineReducers } from 'redux'
import {CHANGE_TAB, changeTab} from '../actions/changeTab.js'

function tabChanger(state = {pageIndex: "0"}, action) {
	switch (action.type) {
		case CHANGE_TAB:
			return {
				pageIndex: action.pageIndex
			}
		default:
			return state
	}
}

function userHelper(state = {user: "admin"}, action) {
	switch (action.type) {
		default:
			return state
	}
}

const viteApp = combineReducers({
  tabChanger,
  userHelper
})


export default viteApp