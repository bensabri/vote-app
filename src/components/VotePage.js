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
					'CARREFOUR MERIGNAC',
					'CARREFOUR SUPPLY ERTECO',
					'CARREFOUR DUPARC',
					'CARREFOUR VAUX EN VELIN',
				]);
				break;
			case 'assalbrigitte92@gmail.com':
				setSyndicatList([
					'DESMAZIERES-CHAUSSEXPO',
					'CYRILLUS',
					'AVIGNON TOURISME',
					'MOVITEX',
				]);
				break;
			case 'migan.unsa@yahoo.fr':
				setSyndicatList(['SMCP', 'BON MARCHE', 'AKTO']);
				break;
			case 'unsa.proprete.nettoyage@gmail.com':
				setSyndicatList(['GALERIES LAFAYETTES']);
				break;
			case 'unsa.nettoyage@unsa.org':
				setSyndicatList([
					'KUONI-TRAVEL LAB',
					'AMPLITEL',
					'JEAN MOULIN/JETLY',
					'HAPPY CHIC',
				]);
				break;
			case 'hfati@hotmail.fr':
				setSyndicatList(['CARREFOUR MARKET']);
				break;
			case 'franck.martinez3@wanadoo.fr':
				setSyndicatList(['J.A. DELMAS', 'KUONI GTS']);
				break;
			case 'freddy.hardet@orange.fr':
				setSyndicatList(['RLS CE SNECMA', 'SERM']);
				break;
			case 'imed.benahmed@yahoo.fr':
				setSyndicatList(['BERSHKA']);
				break;
			case 'sidibekalilou@yahoo.fr':
				setSyndicatList([
					'ABERCROMBIE',
					'SECURITE 7',
					'ASTEN SANTE',
					'CASINO GD',
				]);
				break;
			case 'unsa.hcr@unsa.org':
				setSyndicatList(['CMS VACANCES', 'V R P']);
				break;
			case 'khadijachlait@hotmail.com':
				setSyndicatList(['GFI INFORMATIQUE', 'ITM LAI', 'LMNEXT FR']);
				break;
			case 'lagomuche@orange.fr':
				setSyndicatList([
					'SONEPAR',
					'PRIMAVISTA',
					'D3T DISTRIBUTION',
					'POLTRONESOFA',
				]);
				break;
			case 'mouloud.nadia@neuf.fr':
				setSyndicatList([
					'ALDI CAVAILLON',
					"BOURSE DE L'IMMOBILIER",
					'CELINE',
					'THIRIET DISTRIBUTION',
				]);
				break;
			case 'unsa.adecco@gmail.com':
				setSyndicatList([
					'EFR France/EG Retail France',
					'GEZE France',
					'QUALICONSULT',
					'SUPERMARCHES MATCH',
				]);
				break;
			case 'unsa.manpower@gmail.com':
				setSyndicatList([
					'IKEA ENTREPOTS CHATRES',
					'IKEA ENTREPOTS METZ',
					'MC DONALD S France SERVICE',
					'MINELLI',
				]);
				break;
			case 'fourseb13@gmail.com':
				setSyndicatList([
					'AUCHAN NICE',
					'BIOCOOP',
					'CASINO ANTIBES SIESTA',
					'LECLERC SAINTES',
				]);
				break;
			case 'pelmarthierry1@gmail.com':
				setSyndicatList([
					'DENTSPLY SIRONA',
					'RESMED',
					'REXEL REGION SUD',
					'VILMORIN JARDIN',
				]);
				break;
			case 'compass@unsa.org':
				setSyndicatList(['MSC CROISIERES']);
				break;
			case 'benhammouda.amir@gmail.com':
				setSyndicatList(['']);
				break;
		}
	}, []);

	return (
		<>
			<div className="flex flex-col py-8 h-1/2">
				<div className="bg-white flex flex-col justify-between px-5 w-11/12 m-auto shadow-lg rounded uppercase py-8 mb-8">
					<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
						UNSA FCS 6ÈME CONGRÈS 2021
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
								{users.map(({ id, data: { email } }) => (
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
