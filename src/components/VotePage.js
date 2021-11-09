import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import CommissionControle from './CommissionContrôle';

const VotePage = () => {
	const [voting, setVoting] = useState(false);
	const [adminResult, setAdminResult] = useState(false);
	const { currentUser } = useAuth();
	const {
		users,
		procurationUsers,
		syndicatList,
		setSyndicatList,
		query,
		setQuery,
		resultBureau,
		step,
		setStep,
	} = useGlobalContext();

	useEffect(() => {
		switch (currentUser?.email) {
			case 'benasabri@gmail.com':
				setSyndicatList([
					'AD GRAND OUEST',
					'AUCHAN NICE',
					'CARREFOUR LIVRE CHEZ VOUS',
					'ADECCO',
					'AQUABOULEVARD',
					'GROUPE AUTODISTRIBUTION',
					'AUCHAN LA DEFENSE',
				]);
				break;
			case 'lakram@hotmail.fr':
				setSyndicatList(['JEANJEAN/JD SPORTS']);
				break;
			case 'alexandre.bonilla@yahoo.fr':
				setSyndicatList([
					'CARREFOUR RAMBOUILLET',
					'CARREFOUR MERIGNAC',
					'CARREFOUR SUPPLY ERTECO',
					'CARREFOUR DUPARC',
					'CARREFOUR VAUX EN VELIN',
				]);
				break;
		}
		// switch(currentUser?.email) {
		// 	case 'lakram@hotmail.fr':
		// 	setSyndicatList([
		// 		'JEANJEAN/JD SPORTS'
		// 	])
		// 	break
		// }
		// if (currentUser?.email === 'benasabri@gmail.com') {
		// 	// utlilisateur avec une procuration
		// 	setSyndicatList([
		// 		'AD GRAND OUEST',
		// 		'AUCHAN NICE',
		// 		'CARREFOUR LIVRE CHEZ VOUS',
		// 		'ADECCO',
		// 		'AQUABOULEVARD',
		// 		'GROUPE AUTODISTRIBUTION',
		// 		'AUCHAN LA DEFENSE',
		// 		'KIABI',
		// 		'TEST4',
		// 		'TEST5',
		// 		'TEST6',
		// 		'TEST7',
		// 		'TEST8',
		// 		'TEST9',
		// 		'TEST10',
		// 		'DEVSAB',
		// 	]);
		// }
	}, []);

	useEffect(() => {
		if (currentUser.email === 'ssabril.ben@gmail.com') {
			setAdminResult(true);
		}
	}, []);

	return (
		<div className="flex flex-col py-8 h-1/2">
			{procurationUsers && (
				<div className="bg-white flex flex-col justify-between pl-3 pr-3 w-11/12 m-auto shadow-lg rounded uppercase py-8 mb-8">
					<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
						Page de Vote
					</h2>
					<div className="border-t-2 w-11/12 m-auto"></div>
					<span className="text-sm font-medium self-center mb-3 mt-5">
						Vous avez une procuration pour
					</span>
					{syndicatList.map((syndicat, index) => (
						<h2 key={index}>{syndicat}</h2>
					))}
					{/* <select
						className="text-sm placeholder-gray-500 py-2 px-1 rounded-lg focus:outline-none border-2 w-10/12 md:w-1/3 m-auto"
						name="emaillist"
						onChange={(e) => {
							setQuery(e.target.value);
							setVoting(true);
							setStep(0);
						}}
					>
						<option></option>
						{syndicatList.map((syndicat, index) => (
							<option key={index} value={syndicat}>
								{syndicat}
							</option>
						))}
					</select> */}
				</div>
			)}
			{users
				.filter(
					({ data: { email } }) => email === currentUser?.email // filtrer les personnes par email pour les personnes qui n'ont pas de procuration
				)
				.map(({ id, data: { syndicat, mandat, email } }) => (
					<div className={`${!voting && 'hidden'}`} key={id}>
						<CommissionControle
							mandat={mandat}
							syndicat={syndicat}
							email={email}
						/>
					</div>
				))}
			<div
				className={`${
					adminResult
						? 'hidden'
						: 'w-11/12 m-auto shadow-lg bg-white rounded-md'
				}`}
			>
				<div>
					<div
						className={`${
							voting ? 'hidden' : 'flex flex-col py-8 px-5'
						}`}
					>
						<h2 className="pb-10 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
							Bienvenue sur la page de vote de L'unsa
						</h2>
						<button
							onClick={() => setVoting(!voting)}
							className="w-1/5 m-auto  py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white transition duration-150 ease-in bg-blue-600 hover:bg-blue-700 focus:outline-none"
						>
							Commencé
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VotePage;
