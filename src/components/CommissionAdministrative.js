import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import CandidatureBureau from './CandidatureBureau';
import { teamAdministrative } from './data/candidat-data';

const CommissionAdministrative = ({ mandat, syndicat, email }) => {
	const { register, watch, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;
	const { resultAdministrative, query, procurationUsers, superProcuration } =
		useGlobalContext();

	const { currentUser } = useAuth();
	const [hasVoted, setHasVoted] = useState(false);
	const [error, setError] = useState('');
	const date = new Date().toLocaleDateString();

	const watchCheckBox = watch(teamAdministrative);
	const checkedCount = watchCheckBox.filter(Boolean).length;

	const results_administrative = {};

	teamAdministrative.forEach((item, i) => {
		results_administrative[item] =
			watchCheckBox[i] === false ? 0 : Number(watchCheckBox[i]);
	});

	const onSubmit = async () => {
		if (watchCheckBox && checkedCount === 10) {
			await addDoc(collection(db, 'results2test'), {
				syndicat: syndicat,
				results_administrative,
				email: email,
				secondVote: hasVoted,
				created: date,
			});
		} else {
			setError('Vous devez sélectionner 15 candidats');
		}
	};
	useEffect(() => {
		const subscription = watch((value, { name, type }) =>
			console.log(value, name, type)
		);
		return () => subscription.unsubscribe();
	}, [watch]);

	const voted = resultAdministrative.find(
		({ data: { email } }) =>
			email ===
			`${
				(superProcuration && query) ||
				(!superProcuration && currentUser.email)
			}`
	);

	return (
		<div>
			{voted?.data.secondVote ? (
				<div>
					<CandidatureBureau
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
									Commission Administrative
								</legend>
								<p className="text-xs sm:text-sm lg:text-lg">{`Syndicat ${syndicat}`}</p>
							</div>
							<div className="border-t-2 w-11/12 m-auto"></div>
							<h3 className="text-center text-sm lg:text-lg mb-1 mt-2 sm:ml-6 ml-2 font-bold text-gray-700">
								Parmi ces candidats, pour qui souhaiteriez vous
								voter ? {`${checkedCount}/10`}
							</h3>
							<div className="mt-4 sm:ml-7 grid gap-4 sm:gap-x-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
								{teamAdministrative
									.sort()
									.map((candidat, i) => (
										<div
											className="w-full flex items-start m-auto sm:m-0"
											key={i}
										>
											<div className="flex items-start h-5">
												<input
													name={candidat}
													id={candidat}
													{...register(candidat)}
													type="checkbox"
													value={Number(mandat)}
													className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
												/>{' '}
												<label
													className="cursor-pointer"
													htmlFor={candidat}
												>
													<span className="capitalize ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
														{candidat.replaceAll(
															'_',
															' '
														)}
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
									checkedCount < 10
										? 'Vous ne pouvez pas choisir moins de 10 candidats'
										: checkedCount > 10
										? 'Vous ne pouvez pas choisir plus de 10 candidats'
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

export default CommissionAdministrative;
