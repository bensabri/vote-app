import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import { teamBureau, voteBureau } from './data/candidat-data';

const CandidatureBureau = ({ mandat, syndicat, email }) => {
	const { register, watch, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;
	const { resultBureau, query, procurationUsers, superProcuration } =
		useGlobalContext();
	const { currentUser } = useAuth();
	const [hasVoted, setHasVoted] = useState(false);

	const [error, setError] = useState('');
	const date = new Date().toLocaleDateString();

	const watchCheckBox = watch(voteBureau);
	const checkedCount = watchCheckBox.filter(Boolean).length;

	const results_bureau = {};

	voteBureau.forEach((item, i) => {
		results_bureau[item] =
			watchCheckBox[i] === false ? 0 : Number(watchCheckBox[i]);
	});

	const onSubmit = async () => {
		if (watchCheckBox && checkedCount === 1) {
			await addDoc(collection(db, 'results3test'), {
				syndicat,
				results_bureau,
				email,
				thirdVote: hasVoted,
				created: date,
			})
				.then(() => {
					// setStep(step + 1);
					// alert('Merci, votre vote a bien été pris en compte');
				})
				.catch((error) => {
					alert(
						`Désolé, votre vote n'a pas pu être pris en compte ${error}`
					);
				});
		} else {
			setError("Vous ne pouvez faire qu'un seul choix");
		}
	};

	const voted = resultBureau.find(
		({ data: { email } }) =>
			email ===
			`${
				(superProcuration && query) ||
				(!superProcuration && currentUser.email)
			}`
	);

	return (
		<div>
			{voted?.data.thirdVote ? (
				<div className="w-11/12 m-auto bg-white flex flex-col justify-between pl-3 pr-3 shadow-lg rounded uppercase py-8 mb-8">
					<h2 className="text-center pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
						Merci, votre vote a bien été pris en compte
					</h2>
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="w-11/12 m-auto shadow-lg bg-white rounded-md">
						<div className="flex flex-col py-8 px-5">
							{!procurationUsers && (
								<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
									UNSA FCS 7ème Congrès 2025
								</h2>
							)}
							<div className="flex justify-between text-base font-medium text-gray-900 uppercase sm:p-6 py-5 px-2">
								<legend className="text-base font-medium text-gray-900">
									Candidature au Bureau
								</legend>
								<p className="text-xs sm:text-sm lg:text-lg">{`Syndicat ${syndicat}`}</p>
							</div>
							<div className="border-t-2 w-11/12 m-auto"></div>
							<div className="p-6 space-y-4">
								<h3 className="text-center text-xs sm:text-sm lg:text-lg mb-1 font-bold text-gray-700">
									Une seule liste candidate
								</h3>
								<div className="flex flex-wrap gap-4 justify-center items-center rounded-md shadow-md p-6">
									{teamBureau.map((member) => (
										<div
											key={member.name}
											className="flex flex-col justify-center items-center"
										>
											<img
												className="rounded-circle w-24"
												src={member.img}
												alt=""
											/>
											<p className="text-center text-xs font-medium">
												{member.name}
											</p>
											<p className="text-center text-xs font-light">
												{member.role}
											</p>
										</div>
									))}
								</div>
								{voteBureau.map((vote, i) => (
									<div className="flex items-start" key={i}>
										<div className="flex items-center h-5">
											<input
												name={vote}
												id={vote}
												{...register(vote)}
												type="checkbox"
												value={Number(mandat)}
												className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
											/>{' '}
											<label htmlFor={vote}>
												<span className="capitalize ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700 cursor-pointer">
													{vote.replaceAll('_', ' ')}
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
										? "Vous ne pouvez faire qu'un seul choix"
										: checkedCount > 1
										? "Vous ne pouvez faire qu'un seul choix"
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

export default CandidatureBureau;
