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
			<div className="">
				<h2 className="font-medium self-center text-lg sm:text-xl uppercase text-gray-500">
					Envoie email de connection
				</h2>
				<div className="mt-10">
					{error && <p className="text-sm text-red mb-5">{error}</p>}
					<strong>Email: </strong>
					{currentUser?.email}
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
		</>
	);
};

export default SendEmail;
