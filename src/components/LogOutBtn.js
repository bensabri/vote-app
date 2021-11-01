import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useGlobalContext } from '../contexts/context';

const LogOutBtn = () => {
	const { currentUser, logout, sendSignInLink } = useAuth();
	const { setQuery } = useGlobalContext();
	const [error, setError] = useState('');
	const history = useHistory();
	const handleLogout = async () => {
		setError('');
		try {
			setQuery('');
			await logout();
		} catch (error) {
			setError(error);
		}
		history.push('/login');
	};

	return (
		<>
			<button
				onClick={handleLogout}
				type="submit"
				className="mt-5 flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
			>
				<span className="mr-2 uppercase">Log Out</span>
			</button>
		</>
	);
};

export default LogOutBtn;
