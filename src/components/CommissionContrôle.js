import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CommissionAdministrative2 from './CommissionAdministrative2';

const CommissionControle1 = ({ mandat, syndicat, email }) => {
	const [hasVoted, setHasVoted] = useState(false);
	const { register, watch, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;
	const { resultControle, resultBureau, query, procurationUsers, step, setStep, resultAdministrative } = useGlobalContext();
	const { currentUser } = useAuth();

	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [c, setC] = useState(0);
	const [d, setD] = useState(0);
	const [e, setE] = useState(0);
	const [error, setError] = useState('');

	const date = new Date().toLocaleDateString();

	const watchCheckBox = watch(['a', 'b', 'c', 'd', 'e']);
	const checkedCount = watchCheckBox.filter(Boolean).length;

	const onSubmit = async () => {
		if (watchCheckBox && checkedCount === 3) {
			await addDoc(collection(db, 'results1'), {
				syndicat: syndicat,
				results_controle: {
					a: Number(a),
					b: Number(b),
					c: Number(c),
					d: Number(d),
					e: Number(e),
				},

				email: email,
				firstVote: hasVoted,
				created_date: date,
			})
				.then(() => {
					// alert(
					// 	'Votre vote pour la commission de contrôle a été prise en compte'
					// );
					// setStep(step + 1);
				})
				.catch((error) => {
					alert(`Votre vote n'a pas pu être pris en compte ${error}`);
				});
		} else {
			setError('Veuillez cocher trois cases');
		}
	};

	const HandleA = () => {
		setA(watchCheckBox[0] ? 0 : Number(mandat));
	};

	const HandleB = () => {
		setB(watchCheckBox[1] ? 0 : Number(mandat));
	};
	const HandleC = () => {
		setC(watchCheckBox[2] ? 0 : Number(mandat));
	};
	const HandleD = () => {
		setD(watchCheckBox[3] ? 0 : Number(mandat));
	};
	const HandleE = () => {
		setE(watchCheckBox[4] ? 0 : Number(mandat));
	};

	const voted = resultControle.find(({ data: { email } }) => email === currentUser.email);
	const voted2 = resultAdministrative.find(({ data: { email } }) => email === currentUser.email);

	const voted3 = resultBureau.find(({ data: { email } }) => email === currentUser.email);

	useEffect(() => {
		if (voted?.data.firstVote === true && voted2?.data.secondVote === undefined) {
			setStep(1);
		} else if (voted2?.data.secondVote === true && voted3?.data.thirdVote === undefined) {
			setStep(2);
		} else if (voted3?.data.thirdVote === true) {
			setStep(3);
		} else {
			setStep(0);
		}
	}, [voted, voted2, voted3]);

	return (
		<div className='mt-3 sm:mt-0'>
			{/* {!voted3?.data.thirdVote && ( */}
			<div className='w-11/12 m-auto bg-white rounded-md mb-3 p-5'>
				<Stepper activeStep={step}>
					<Step>
						<StepLabel>Commission de contrôle</StepLabel>
					</Step>
					<Step>
						<StepLabel>Commission Administrative</StepLabel>
					</Step>
					<Step>
						<StepLabel>Candidature au Bureau</StepLabel>
					</Step>
				</Stepper>
			</div>
			{/* )} */}

			{voted?.data.firstVote ? (
				<div>
					<CommissionAdministrative2 mandat={mandat} syndicat={syndicat} email={email} />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='w-11/12 m-auto shadow-lg bg-white rounded-md'>
						<div className='flex flex-col py-8 px-5'>
							{!procurationUsers && <h2 className='pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500'>UNSA FCS 6ÈME CONGRÈS 2021</h2>}
							<div className='flex justify-between text-base font-medium text-gray-900 uppercase sm:p-6 py-5 px-2'>
								<legend className='text-xs sm:text-sm lg:text-lg font-bold text-gray-900'>Commission de contrôle</legend>
								<p className='text-xs sm:text-sm lg:text-lg'>{`Syndicat ${syndicat}`}</p>
							</div>
							<div className="border-t-2 w-11/12 m-auto"></div>
							<div className="mt-5 ml-7 space-y-4">
								<h3 className="text-xs sm:text-sm lg:text-lg mb-1 font-bold text-gray-700">
									Parmi ces candidats, pour qui souhaiteriez
									vous voter ? {`${checkedCount}/3`}
								</h3>
								<div className="flex items-start">
									<div className="flex items-center h-5 cursor-pointer">
										<input
											id="a"
											name="a"
											{...register('a')}
											type="checkbox"
											value={a}
											onClick={HandleA}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="a"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												OPTION 1
											</span>
										</label>
									</div>
								</div>
								<div className='flex items-start'>
									<div className='flex items-center h-5 '>
										<input id='b' name='b' {...register('b')} type='checkbox' onClick={HandleB} value={b} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded' />{' '}
										<label className='cursor-pointer' htmlFor='b'>
											<span className='ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700'>OPTION 2</span>
										</label>
									</div>
								</div>
								<div className='flex items-start'>
									<div onClick={HandleC} className='flex items-center h-5 cursor-pointer'>
										<input id='c' name='c' {...register('c')} type='checkbox' onClick={HandleC} value={c} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded' />{' '}
										<label className='cursor-pointer' htmlFor='c'>
											<span className='ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700'>OPTION 3</span>
										</label>
									</div>
								</div>
								<div className='flex items-start'>
									<div className='flex items-center h-5 cursor-pointer'>
										<input id='d' name='d' {...register('d')} type='checkbox' onClick={HandleD} value={d} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded' />{' '}
										<label className='cursor-pointer' htmlFor='d'>
											<span className='ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700'>OPTION 4</span>
										</label>
									</div>
								</div>
								<div className='flex items-start'>
									<div className='flex items-center h-5 cursor-pointer'>
										<input id='e' name='e' {...register('e')} type='checkbox' onClick={HandleE} value={e} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded' />{' '}
										<label className='cursor-pointer' htmlFor='e'>
											<span className='ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700'>OPTION 5</span>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className='flex justify-around py-5 bg-gray-100 text-right sm:px-6 rounded-md'>
							{error && <div className='text-red-600 text-xs sm:text-sm  px-5 pt-2'>{`${checkedCount < 3 ? 'Vous ne pouvez pas choisir moins de 3 candidats' : checkedCount > 3 ? 'Vous ne pouvez pas choisir plus de 3 candidats' : ''} `}</div>}
							<button disabled={isSubmitting} onClick={() => setHasVoted(true)} type='submit' className={`mr-2 py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white transition duration-150 ease-in  ${isSubmitting ? 'bg-blue-300' : 'bg-blue-600'} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
								A Voté
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default CommissionControle1;
