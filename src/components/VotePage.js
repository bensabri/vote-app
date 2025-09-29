import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import CommissionControle from './CommissionContrôle';

const VotePage = () => {
	const [voting, setVoting] = useState(false);
	const { currentUser } = useAuth();
	const {
		users,
		procurationUsers,
		syndicatList,
		setSyndicatList,
		query,
		setQuery,
		superProcuration,
	} = useGlobalContext();

	useEffect(() => {
		switch (currentUser.email) {
			case 'amyre28@gmail.com':
				setSyndicatList([
					'CARREFOUR MERIGNAC',
					'CARREFOUR SUPPLY ERTECO',
					'CARREFOUR DUPARC',
					'CARREFOUR VAUX EN VELIN',
				]);
				break;
			case 'benhamouda.amir@gmail.com':
				setSyndicatList([
					'DESMAZIERES-CHAUSSEXPO',
					'CYRILLUS',
					'AVIGNON TOURISME',
					'MOVITEX',
				]);
				break;
		}
	}, []);

	return (
		<>
			<div className="flex flex-col py-8 h-1/2">
				<div className="bg-white flex flex-col justify-between px-5 w-11/12 m-auto shadow-lg rounded uppercase py-8 mb-8">
					<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
						UNSA FCS 7ÈME CONGRÈS 2025
					</h2>
					<div className="border-t-2 w-11/12 m-auto"></div>

					{procurationUsers && (
						<div>
							<span className="text-sm font-medium m-auto mb-3 mt-5">
								Vous avez une procuration pour
							</span>
							{syndicatList.map((syndicat, index) => (
								<h2 key={index}>{syndicat}</h2>
							))}
						</div>
					)}
					{superProcuration && (
						<div className="m-auto mt-5">
							<select
								onChange={(e) => setQuery(e.target.value)}
								className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full  py-2 focus:outline-none focus:border-blue-400"
								name="emails"
								id="emails"
							>
								{users
									.sort((a, b) => {
										let ua = a.data.email.toLowerCase(),
											ub = b.data.email.toLowerCase();

										if (ua < ub) {
											return -1;
										}
										if (ua > ub) {
											return 1;
										}
										return 0;
									})
									.map(({ id, data: { email } }) => (
										<option key={id} value={email}>
											{email}
										</option>
									))}
							</select>
						</div>
					)}
				</div>

				{users
					.filter(
						({ data: { email } }) =>
							email ===
							`${
								(!superProcuration && currentUser.email) ||
								(superProcuration && query)
							}` // filtrer les personnes par email pour les personnes qui n'ont pas de procuration
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

				<div className="w-11/12 m-auto shadow-lg bg-white rounded-md">
					<div>
						<div
							className={`${
								voting ? 'hidden' : 'flex flex-col py-8 px-5'
							}`}
						>
							<h2 className="text-center pb-10 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
								Bienvenue sur la plateforme de vote de L'UNSA
								FCS
							</h2>
							<button
								onClick={() => setVoting(!voting)}
								className="m-auto w-auto py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white transition duration-150 ease-in bg-blue-600 hover:bg-blue-700 focus:outline-none"
							>
								Commencer
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default VotePage;
