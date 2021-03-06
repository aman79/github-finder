import React, { useReducer } from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
	SEARCH_USERS,
	CLEAR_ALERT,
	GET_USER,
	GET_REPOS,
	SET_LOADING,
	SET_ALERT,
	CLEAR_USERS,
} from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Search Users
	const searchUsers = async (text) => {
		setLoading();

		const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
		${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		// setUsers(res.data.items);
		// setLoading(false);

		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items,
		});
	};

	//Get USers

	//Get Repos

	//Clear Users

	//Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
