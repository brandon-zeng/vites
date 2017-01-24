import * as dbApi from '../api/root_api.js';

export const beginFetchDb = () => {
	return {
		type: 'begin_fetch_db'
	}
}

export const updateFetchDb = (data) => {
	return {
		type: 'update_fetch_db',
		data
	}
}

export const readDb = () => {
	return (dispatch, getState) => {

		dispatch(beginFetchDb());

		

	}
}