import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

// Email link for test

// https://voteapp-d3b5e.firebaseapp.com/__/auth/action?apiKey=AIzaSyBlKkfZaVJfFz3SfeTk13MXCibuD2SkPvs&mode=signIn&oobCode=lpWfY6UelhwWfb5gBIyHP2a1qXUfyCoFpvTwh8m-luQAAAF8863fnQ&continueUrl=https://unsa-fcs.fr/confirm&lang=fr
// dapay75197@ecofreon.com

// https://voteapp-d3b5e.firebaseapp.com/__/auth/action?apiKey=AIzaSyBlKkfZaVJfFz3SfeTk13MXCibuD2SkPvs&mode=signIn&oobCode=eTeYWQ_VTBdvrOOAuZ4xxfgJXm2b9rRWpJSK-6w5vEYAAAF889mz9A&continueUrl=https://unsa-fcs.fr/confirm&lang=fr
// kovap39096@epeva.com

// https://voteapp-d3b5e.firebaseapp.com/__/auth/action?apiKey=AIzaSyBlKkfZaVJfFz3SfeTk13MXCibuD2SkPvs&mode=signIn&oobCode=iB6DQ5NcweeXdvO4gRvTjLR4lQ3Oj6Um2VXwxBlZpu8AAAF89DLzMA&continueUrl=https://unsa-fcs.fr/confirm&lang=fr
// rofil90065@niekie.com

// https://voteapp-d3b5e.firebaseapp.com/__/auth/action?apiKey=AIzaSyBlKkfZaVJfFz3SfeTk13MXCibuD2SkPvs&mode=signIn&oobCode=EB-ztI0ZY0VrGo6DoOaV3rMYu0IfMxNUXcvZazlQjF0AAAF89DVM4w&continueUrl=https://unsa-fcs.fr/confirm&lang=fr
// resajap636@epeva.com

// https://voteapp-d3b5e.firebaseapp.com/__/auth/action?apiKey=AIzaSyBlKkfZaVJfFz3SfeTk13MXCibuD2SkPvs&mode=signIn&oobCode=AfF6T0DK1wZQLKJpR2NPK-W9jD5hVVvVOLJ4sgU0gp4AAAF89DcEdg&continueUrl=https://unsa-fcs.fr/confirm&lang=fr
// gigov79152@ingfix.com
