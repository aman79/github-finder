import { CLEAR_ALERT, SET_ALERT } from '../types';

export default (state, { type, payload }) => {
	switch (type) {
		case SET_ALERT:
			return payload;
		case CLEAR_ALERT:
			return null;
		default:
			return state;
	}
};
