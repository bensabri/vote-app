import React, { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';

const SendEmail = () => {
	const [error, setError] = useState('');
	const emailRef = useRef();
	const { currentUser, sendSignInLink } = useAuth();

	const handleSendEmail = async (e) => {
		e.preventDefault();

		try {
			console.log(emailRef.current.value);
			await sendSignInLink(emailRef.current.value);
			alert('Email sent successfully');
		} catch (error) {
			setError(`Failed to send email ${error.message}`);
		}
	};

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col bg-white shadow-md px-10 sm:px-10 md:px-10 lg:px-16 py-10 rounded-md w-full max-w-xl">
					<h2 className="font-medium self-center text-xl sm:text-xl uppercase text-gray-500">
						Envoie email de connection
					</h2>

					<div className="mt-5 mb-3">
						{error && (
							<p className="text-sm text-red-600">{error}</p>
						)}
					</div>
					<form onSubmit={handleSendEmail}>
						<div className="flex flex-col mb-6">
							<label
								htmlFor="email"
								className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
							>
								E-Mail Address:
							</label>
							<div className="relative">
								<input
									id="email"
									ref={emailRef}
									type="email"
									name="email"
									className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
									placeholder="E-Mail Address"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
						>
							<span className="mr-2 uppercase">Envoie Email</span>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SendEmail;