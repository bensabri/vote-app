import React, { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { auth } from '../firebase';

const ConfirmForm = () => {
	const [error, setError] = useState('');
	const emailRef = useRef();
	const { signInwithLink } = useAuth();

	const history = useHistory();
	const location = useLocation();

	const handleSignIn = async (e) => {
		e.preventDefault();

		try {
			await auth.signInWithEmailLink(
				emailRef.current.value,
				window.location.href
			);
			history.push('/');
		} catch (error) {
			setError(`Failled to sign in ${error.message}`);
		}
	};
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
			<div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
				<div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
					Confirm Email
				</div>
				{/* <div className="mt-10">
					{error && <p className="text-sm text-red mb-5">{error}</p>}
					<strong>Email: </strong>
					{currentUser.email}
				</div> */}
				<form onSubmit={handleSignIn}>
					<div className="flex flex-col mb-6">
						<label
							htmlFor="email"
							className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
						>
							E-Mail Address:
						</label>
						<div className="relative">
							<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
								<svg
									className="h-6 w-6"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
								</svg>
							</div>

							<input
								id="email"
								ref={emailRef}
								type="email"
								name="email"
								className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
								placeholder="E-Mail Address"
								required
							/>
						</div>
					</div>
					<button
						type="submit"
						className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
					>
						<span className="mr-2 uppercase">Confirm</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default ConfirmForm;