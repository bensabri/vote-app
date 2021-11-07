import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useGlobalContext } from '../contexts/context';

const LogOutBtn = () => {
	const { logout } = useAuth();
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
		history.push('/');
	};

	return (
		<>
			{error && <div>{error}</div>}
			<button
				onClick={handleLogout}
				type="submit"
				className="w-1/3 m-auto py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in"
			>
				DECONNECTION
			</button>
		</>
	);
};

export default LogOutBtn;
