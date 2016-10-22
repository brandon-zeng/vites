export const CHANGE_TAB = 'CHANGE_TAB'

export function changeTab(pageIndex) {
	return {type: CHANGE_TAB, pageIndex}
}
