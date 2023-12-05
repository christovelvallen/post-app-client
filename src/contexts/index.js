'use client';

import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const intialState = {
	data: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_DATA':
			return {
				...state,
				data: action.payload,
			};

		case 'LOGOUT':
			return {
				...state,
				data: null,
			};

		default:
			return state;
	}
};

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, intialState);

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserState = () => useContext(UserContext);
