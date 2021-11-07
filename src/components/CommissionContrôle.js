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
					alert(
						'Votre vote pour la commission de contrôle a été prise en compte'
					);
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

	const voted = resultControle.find(
		({ data: { email, syndicat } }) =>
			email === `${!procurationUsers && currentUser.email}` ||
			syndicat === `${procurationUsers && query}`
	);

	return (
		<div className="mt-3 sm:mt-0">
			{voted?.data.firstVote ? (
				<div>
					<CommissionAdministrative2
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
									Page de Vote
								</h2>
							)}
							<div className="flex justify-between text-base font-medium text-gray-900 uppercase sm:p-6 py-5 px-2">
								<legend className="text-xs sm:text-sm lg:text-lg font-bold text-gray-900">
									La commission de contrôle
								</legend>
								<p className="text-xs sm:text-sm lg:text-lg">{`Syndicat ${syndicat}`}</p>
							</div>
							<div className="border-t-2 w-11/12 m-auto"></div>
							<div className="mt-5 ml-7 space-y-4">
								<h3 className="text-xs sm:text-sm lg:text-lg mb-1 font-bold text-gray-700">
									Parmi ces candidats, pour qui souhaiteriez
									vous voter ?
								</h3>
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											name="a"
											{...register('a')}
											type="checkbox"
											onClick={HandleA}
											value={a}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 1
										</span>
									</div>
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
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 2
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
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 3
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
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 4
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
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 5
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-around py-5 bg-gray-100 text-right sm:px-6 rounded-md">
							{error && (
								<div className="text-red-600 text-xs sm:text-sm  px-5 pt-2">{`${
									checkedCount < 3
										? 'Vous ne pouvez pas choisir moins de 3 candidats'
										: checkedCount > 3
										? 'Vous ne pouvez pas choisir plus de 3 candidats'
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
								Vote
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default CommissionControle1;
