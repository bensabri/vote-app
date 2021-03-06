import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { auth } from '../firebase';
import Header from '../components/Header';

const ConfirmForm = () => {
	const [error, setError] = useState('');
	const emailRef = useRef();
	const { formState } = useForm();
	const { isSubmitting } = formState;
	const history = useHistory();

	const handleSignIn = async (e) => {
		e.preventDefault();

		try {
			await auth.signInWithEmailLink(emailRef.current.value, window.location.href);
			history.push('/home');
		} catch (error) {
			setError(`Adresse email incorrecte ou déjà utilisée`);
		}
		emailRef.current.value = '';
	};
	return (
		<>
			<Header />
			{/* 			<video className='absolute w-screen h-screen object-cover z-0' autoPlay loop muted>
				<source src='https://firebasestorage.googleapis.com/v0/b/voteapp-d3b5e.appspot.com/o/background_1.mp4?alt=media&token=18027da3-7a79-4a58-ae9f-703635c7b0c7' type='video/mp4' />
				Your browser does not support the video tag.
			</video> */}
			<img className='absolute w-screen h-screen object-cover filter blur-md brightness-50' src='https://res.cloudinary.com/amircloud/image/upload/v1636490192/Service/background_rerc6d.jpg' alt='' />
			<div className='flex flex-col items-center bg-gray-300'>
				<div className='flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md mt-vh z-10'>
					<h2 className='pb-5 font-medium self-center sm:text-lg uppercase text-gray-500'>Confirmez votre adresse e-mail</h2>
					<div className='border-t-2 w-11/12 m-auto'></div>

					<div className='py-2 text-red-600 text-xs sm:text-sm'>{error && <p>{error}</p>}</div>

					<form onSubmit={handleSignIn}>
						<div className='flex flex-col mb-6'>
							<label htmlFor='email' className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'>
								Adresse e-mail :
							</label>
							<div className='relative'>
								<div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
									<svg className='h-6 w-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
										<path d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
									</svg>
								</div>

								<input id='email' ref={emailRef} type='email' name='email' className='text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400' placeholder='E-Mail' required />
							</div>
						</div>
						<button disable={isSubmitting} type='submit' className='flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in'>
							<span className='mr-2 uppercase'>Confirmez</span>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ConfirmForm;
