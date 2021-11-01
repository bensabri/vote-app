import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import CommissionAdministrative2 from './CommissionAdministrative2';

const CommissionControle1 = ({ mandat, syndicat, email }) => {
	const [hasVoted, setHasVoted] = useState(false);
	const { register, watch, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;
	const { resultControle, query, procurationUsers } = useGlobalContext();
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
					alert('Votre vote a ete prise en compte');
				})
				.catch((error) => {
					alert(`Votre vote n'a pas pu être prit en compte ${error}`);
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

	const voted = resultControle.find(
		({ data: { email, syndicat } }) =>
			email === `${!procurationUsers && currentUser.email}` ||
			syndicat === `${procurationUsers && query}`
	);

	return (
		<div className="mt-10 sm:mt-0">
			{voted?.data.firstVote ? (
				<div className="m-10">
					<CommissionAdministrative2
						mandat={mandat}
						syndicat={syndicat}
						email={email}
					/>
				</div>
			) : (
				<div className="md:grid md:grid-cols-1 md:gap-6">
					<div className="pl-10 mt-5 md:mt-0 md:col-span-2">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="overflow-hidden sm:rounded-md">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<fieldset>
										<legend className="text-base font-medium text-gray-900">
											La commission de contrôle
										</legend>
										<div className="mt-4 space-y-4">
											<div className="flex items-start">
												<input
													name="a"
													{...register('a')}
													type="checkbox"
													onClick={HandleA}
													value={a}
													className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
												/>{' '}
												<span className="ml-3 text-sm font-medium text-gray-700">
													Option 1
												</span>
											</div>
											<div className="flex items-start">
												<div className="flex items-center h-5">
													<input
														name="b"
														{...register('b')}
														type="checkbox"
														onClick={HandleB}
														value={b}
														className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>{' '}
													<span className="ml-3 text-sm font-medium text-gray-700">
														Option 2
													</span>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex items-center h-5">
													<input
														name="c"
														{...register('c')}
														type="checkbox"
														onClick={HandleC}
														value={c}
														className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>{' '}
													<span className="ml-3 text-sm font-medium text-gray-700">
														Option 3
													</span>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex items-center h-5">
													<input
														name="d"
														{...register('d')}
														type="checkbox"
														onClick={HandleD}
														value={d}
														className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>{' '}
													<span className="ml-3 text-sm font-medium text-gray-700">
														Option 4
													</span>
												</div>
											</div>
											<div className="flex items-start">
												<div className="flex items-center h-5">
													<input
														name="e"
														{...register('e')}
														type="checkbox"
														onClick={HandleE}
														value={e}
														className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
													/>{' '}
													<span className="ml-3 text-sm font-medium text-gray-700">
														Option 5
													</span>
												</div>
											</div>
										</div>
									</fieldset>
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
									{error && (
										<div className="text-red-600 text-xs">
											{`${
												checkedCount < 3
													? 'Vous ne pouvez pas choisir moins de 3 candidats'
													: checkedCount > 3
													? 'Vous ne pouvez pas choisir plus de 3 candidats'
													: ''
											} `}
										</div>
									)}
									<button
										disabled={isSubmitting}
										onClick={() => setHasVoted(true)}
										type="submit"
										className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  ${
											isSubmitting
												? 'bg-indigo-300'
												: 'bg-indigo-600'
										} hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
									>
										Vote
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default CommissionControle1;
