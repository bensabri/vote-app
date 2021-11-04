import React, { useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import CommissionControle from './CommissionContrôle';

const VotePage = () => {
	const { currentUser } = useAuth();
	const {
		users,
		isFetching,
		procurationUsers,
		syndicatList,
		setSyndicatList,
		query,
		setQuery,
	} = useGlobalContext();

	useEffect(() => {
		if (currentUser?.email === 'benasabri@gmail.com') {
			setSyndicatList([
				'AD GRAND OUEST',
				'AUCHAN NICE',
				'CARREFOUR LIVRE CHEZ VOUS',
				'ADECCO',
				'AQUABOULEVARD',
				'GROUPE AUTODISTRIBUTION',
				'AUCHAN LA DEFENSE',
				'KIABI',
			]);
		}
	}, [query]);

	return (
		<div className="flex flex-col py-8">
			{procurationUsers && (
				<div className="bg-white flex flex-col justify-between pl-3 pr-3 w-11/12 m-auto shadow-lg rounded uppercase py-8 mb-8">
					<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
						Page de Vote
					</h2>
					<div className="border-t-2 w-11/12 m-auto"></div>
					<span className="text-sm font-medium self-center mb-3 mt-5">
						Vous avez une procuration pour
					</span>
					<select
						className="text-sm placeholder-gray-500 py-2 px-1 rounded-lg focus:outline-none border-2 w-10/12 md:w-1/3 m-auto"
						name="emaillist"
						onChange={(e) => setQuery(e.target.value)}
					>
						<option></option>
						{syndicatList.map((syndicat, index) => (
							<option key={index} value={syndicat}>
								{syndicat}
							</option>
						))}
					</select>
				</div>
			)}

			{users
				.filter(
					({ id, data: { email, syndicat } }) =>
						email ===
							`${!procurationUsers && currentUser?.email}` || // filtrer les personnes par email pour les personnes qui n'ont pas de procuration
						syndicat === `${procurationUsers && query}` // filtrer les procurations par syndicat pour les personnes qui one une procuration
				)
				.map(({ id, data: { user_name, syndicat, mandat, email } }) => (
					<div key={id}>
						{isFetching && (
							<CommissionControle
								mandat={mandat}
								syndicat={syndicat}
								email={email}
							/>
						)}
					</div>
				))}
		</div>
	);
};

export default VotePage;
