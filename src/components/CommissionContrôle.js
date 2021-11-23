import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CommissionAdministrative from './CommissionAdministrative';
import Candidats from './candidats/CandidatsControle';

const CommissionControle1 = ({ mandat, syndicat, email }) => {
	const [hasVoted, setHasVoted] = useState(false);
	const { register, watch, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;
	const {
		resultControle,
		resultBureau,
		procurationUsers,
		superProcuration,
		step,
		setStep,
		resultAdministrative,
		query,
	} = useGlobalContext();
	const { currentUser } = useAuth();
	const [error, setError] = useState('');
	const date = new Date().toLocaleDateString();

	const watchCheckBox = watch(Candidats);
	const checkedCount = watchCheckBox.filter(Number).length;

	const onSubmit = async () => {
		if (watchCheckBox && checkedCount === 1) {
			await addDoc(collection(db, 'results1'), {
				syndicat: syndicat,
				results_controle: {
					abdelalih: Number(watchCheckBox[0]),
					abdelrazakd: Number(watchCheckBox[1]),
					nadiaz: Number(watchCheckBox[2]),
				},
				email: email,
				firstVote: hasVoted,
				created: date,
			});
		} else {
			setError('Veuillez cocher trois cases');
		}
	};

	useEffect(() => {
		const subscription = watch((value, { name, type }) =>
			console.log(value, name, type)
		);
		return () => subscription.unsubscribe();
	}, [watch]);

	const voted = resultControle.find(
		({ data: { email } }) =>
			email ===
			`${
				(superProcuration && query) ||
				(!superProcuration && currentUser.email)
			}`
	);
	const voted2 = resultAdministrative.find(
		({ data: { email } }) =>
			email ===
			`${
				(superProcuration && query) ||
				(!superProcuration && currentUser.email)
			}`
	);

	const voted3 = resultBureau.find(
		({ data: { email } }) =>
			email ===
			`${
				(superProcuration && query) ||
				(!superProcuration && currentUser.email)
			}`
	);

	useEffect(() => {
		if (
			voted?.data.firstVote === true &&
			voted2?.data.secondVote === undefined
		) {
			setStep(1);
		} else if (
			voted2?.data.secondVote === true &&
			voted3?.data.thirdVote === undefined
		) {
			setStep(2);
		} else if (voted3?.data.thirdVote === true) {
			setStep(3);
		} else {
			setStep(0);
		}
	}, [voted, voted2, voted3]);

	return (
		<div className="mt-3 sm:mt-0">
			<div className="w-11/12 m-auto bg-white rounded-md mb-3 p-5">
				<Stepper activeStep={step} alternativeLabel>
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

			{voted?.data.firstVote ? (
				<div>
					<CommissionAdministrative
						mandat={mandat}
						syndicat={syndicat}
						email={email}
					/>
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="w-11/12 m-auto shadow-lg bg-white rounded-md">
						<div className="flex flex-col py-8 px-5">
							{!procurationUsers && (
								<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
									UNSA FCS 6ÈME CONGRÈS 2021
								</h2>
							)}
							<div className="flex justify-between text-base font-medium text-gray-900 uppercase sm:p-6 py-5 px-2">
								<legend className="text-xs sm:text-sm lg:text-lg font-bold text-gray-900">
									Commission de contrôle
								</legend>
								<p className="text-xs sm:text-sm lg:text-lg">{`Syndicat ${syndicat}`}</p>
							</div>
							<div className="border-t-2 w-11/12 m-auto"></div>
							<div className="p-6 space-y-4">
								<h3 className="text-center text-xs sm:text-sm lg:text-lg mb-1 font-bold text-gray-700">
									Parmi ces candidats, pour qui souhaiteriez
									vous voter ? {`${checkedCount}/3`}
								</h3>
								{Candidats.sort().map((candidat, i) => (
									<div className="flex items-start">
										<div className="flex items-center h-5 cursor-pointer">
											<input
												id={candidat}
												name={candidat}
												{...register(candidat)}
												type="checkbox"
												value={`${
													watchCheckBox[i] &&
													Number(mandat)
												}`}
												className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
											/>{' '}
											<label
												className="cursor-pointer"
												htmlFor={candidat}
											>
												<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
													{candidat}
												</span>
											</label>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="flex justify-around py-5 bg-gray-100 text-right sm:px-6 rounded-md">
							{error && (
								<div className="text-red-600 text-xs sm:text-sm  px-5 pt-2">{`${
									checkedCount < 1
										? 'Vous ne pouvez pas choisir moins de 1 candidats'
										: checkedCount > 1
										? 'Vous ne pouvez pas choisir plus de 1 candidats'
										: ''
								} `}</div>
							)}
							<button
								disabled={isSubmitting}
								onClick={() => setHasVoted(true)}
								type="submit"
								className={`mr-2 py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white transition duration-150 ease-in  ${
									isSubmitting ? 'bg-blue-300' : 'bg-blue-600'
								} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
							>
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
