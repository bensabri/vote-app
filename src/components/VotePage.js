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
		if (currentUser.email === 'ssabril@ymail.com') {
			setSyndicatList([
				'ADECCO',
				'AQUABOULEVARD',
				'GROUPE AUTODISTRIBUTION',
				'AUCHAN LA DEFENSE',
			]);
		} else if (currentUser.email === 'benasabri@gmail.com') {
			setSyndicatList([
				'AD GRAND OUEST',
				'AUCHAN NICE',
				'CARREFOUR LIVRE CHEZ VOUS',
			]);
		}
	}, [query]);

	return (
		<div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 w-4/5">
			<div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full">
				<h1 className="mb-8 font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
					Page de Vote
				</h1>
				{procurationUsers && (
					<div className="flex justify-around">
						<span className="text-xl">Vous voter pour</span>
						<select
							className="text-xl"
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
								`${!procurationUsers && currentUser.email}` || // filtrer les personnes par email pour les personnes qui n'ont pas de procuration
							syndicat === `${procurationUsers && query}` // filtrer les procurations par syndicat pour les personnes qui one une procuration
					)
					.map(
						({
							id,
							data: { user_name, syndicat, mandat, email },
						}) => (
							<div key={id}>
								<p>{`Syndicat ${syndicat}`}</p>

								{isFetching && (
									<CommissionControle
										mandat={mandat}
										syndicat={syndicat}
										email={email}
									/>
								)}
							</div>
						)
					)}
			</div>
		</div>
	);
};

export default VotePage;
