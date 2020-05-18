import {
	SEARCH_USERS,
	CLEAR_ALERT,
	GET_USER,
	GET_REPOS,
	SET_LOADING,
	SET_ALERT,
	CLEAR_USERS,
} from '../types';

export default (state, { type, payload }) => {
	switch (type) {
		case SEARCH_USERS:
			return {
				...state,
				users: payload,
				loading: false,
			};
		case SET_LOADING:
			return { ...state, loading: true };

		default:
			return state;
	}
};
