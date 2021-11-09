import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from './Header';

const Login = () => {
	const { login } = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [error, setError] = useState('');
	const history = useHistory();
	const { handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;

	const onSubmit = async () => {
		try {
			setError('');
			await login(emailRef.current.value, passwordRef.current.value);
		} catch {
			return setError('Impossible de se connecter');
		}
		history.push('/home');
	};

	return (
		<>
			<Header />
			<img className='absolute w-screen h-screen object-cover filter blur-md brightness-50' src='https://res.cloudinary.com/amircloud/image/upload/v1636490192/Service/background_rerc6d.jpg' alt='' />
			<div className='flex flex-col items-center bg-white z-10 p-6'>
				<div className='flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md z-10 mt-vh'>
					<div className='font-medium self-center text-xl sm:text-2xl uppercase text-gray-800'>UNSA FCS 6ÈME CONGRÈS 2021</div>

					<div className='mt-10'>
						{error && <p className='text-sm text-red mb-5'>{error}</p>}
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='flex flex-col mb-6'>
								<label htmlFor='email' className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'>
									E-Mail :
								</label>
								<div className='relative'>
									<div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
										<svg className='h-6 w-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
											<path d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
										</svg>
									</div>

									<input id='email' ref={emailRef} type='email' name='email' className='text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400' placeholder='E-Mail Address' />
								</div>
							</div>
							<div className='flex flex-col mb-6'>
								<label htmlFor='password' className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'>
									Mot de passe :
								</label>
								<div className='relative'>
									<div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
										<span>
											<svg className='h-6 w-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
												<path d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
											</svg>
										</span>
									</div>

									<input id='password' ref={passwordRef} type='password' name='password' className='text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400' placeholder='Password' />
								</div>
							</div>

							<div className='flex w-full'>
								<button disabled={isSubmitting} type='submit' className='flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in'>
									<span className='mr-2 uppercase'>Login</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
