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
			case 'assalbrigitte92@gmail.com':
				setSyndicatList([
					'CLUB MED',
					'DESMAZIERES-CHAUSSEXPO',
					'CYRILLUS',
					'AVIGNON TOURISME',
					'MOVITEX',
				]);
				break;
			case 'migan.unsa@yahoo.fr':
				setSyndicatList(['SECURITE 3', 'SMCP', 'BON MARCHE', 'AKTO']);
				break;
			case 'unsa.proprete.nettoyage@gmail.com':
				setSyndicatList(['NETTOYAGE 2', 'GALERIES LAFAYETTES']);
				break;
			case 'unsa.nettoyage@unsa.org':
				setSyndicatList([
					'NETTOYAGE 3',
					'KUONI-TRAVEL LAB',
					'AMPLITEL',
					'JEAN MOULIN/JETLY',
					'HAPPY CHIC',
				]);
				break;
			case 'hfati@hotmail.fr':
				setSyndicatList(['SNSCS', 'CARREFOUR MARKET']);
				break;
			case 'franck.martinez3@wanadoo.fr':
				setSyndicatList(['DECATHLON', 'J.A. DELMAS', 'KUONI GTS']);
				break;
			case 'freddy.hardet@orange.fr':
				setSyndicatList([
					'CARREFOUR SUPPLY CREPY',
					'RLS CE SNECMA',
					'SERM',
				]);
				break;
			case 'imed.benahmed@yahoo.fr':
				setSyndicatList(['ZARAT', 'BERSHKA']);
				break;
			case 'sidibekalilou@yahoo.fr':
				setSyndicatList([
					'SECURITE 2',
					'ABERCROMBIE',
					'SECURITE 7',
					'ASTEN SANTE',
					'CASINO GD',
				]);
				break;
			case 'unsa.hcr@unsa.org':
				setSyndicatList(['HCR', 'CMS VACANCES', 'V R P']);
				break;
			case 'khadijachlait@hotmail.com':
				setSyndicatList([
					'NETTOYAGE 1',
					'GFI INFORMATIQUE',
					'ITM LAI',
					'LMNEXT FR',
				]);
				break;
			case 'lagomuche@orange.fr':
				setSyndicatList([
					'KIABI',
					'SONEPAR',
					'PRIMAVISTA',
					'D3T DISTRIBUTION',
					'POLTRONESOFA',
				]);
				break;
			case 'mouloud.nadia@neuf.fr':
				setSyndicatList([
					'ETAM',
					'ALDI CAVAILLON',
					"BOURSE DE L'IMMOBILIER",
					'CELINE',
					'THIRIET DISTRIBUTION',
				]);
				break;
			case 'unsa.adecco@gmail.com':
				setSyndicatList([
					'ADECCO',
					'EFR France/EG Retail France',
					'GEZE France',
					'QUALICONSULT',
					'SUPERMARCHES MATCH',
				]);
				break;
			case 'unsa.manpower@gmail.com':
				setSyndicatList([
					'MANPOWER',
					'IKEA ENTREPOTS CHATRES',
					'IKEA ENTREPOTS METZ',
					'MC DONALD S France SERVICE',
					'MINELLI',
				]);
				break;
			case 'fourseb13@gmail.com':
				setSyndicatList([
					'OFFICE DEPOT',
					'AUCHAN NICE',
					'BIOCOOP',
					'CASINO ANTIBES SIESTA',
					'LECLERC SAINTES',
				]);
				break;
			case 'pelmarthierry1@gmail.com':
				setSyndicatList([
					'SECURITE 1',
					'DENTSPLY SIRONA',
					'RESMED',
					'REXEL REGION SUD',
					'VILMORIN JARDIN',
				]);
				break;
			case 'compass@unsa.org':
				setSyndicatList(['COMPASS', 'MSC CROISIERES']);
				break;
		}
	}, []);

	useEffect(() => {
		if (currentUser.email === 'ssabril.ben@gmail.com') {
			setAdminResult(true);
		}
	}, []);

	return (
		<>
			<div className="flex flex-col py-8 h-1/2">
				{procurationUsers && (
					<div className="bg-white flex flex-col justify-between pl-3 pr-3 w-11/12 m-auto shadow-lg rounded uppercase py-8 mb-8">
						<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
							UNSA FCS 6ÈME CONGRÈS 2021
						</h2>
						<div className="border-t-2 w-11/12 m-auto"></div>
						<span className="text-sm font-medium self-center mb-3 mt-5">
							Vous avez une procuration pour
						</span>
						{syndicatList.map((syndicat, index) => (
							<h2 key={index}>{syndicat}</h2>
						))}
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
								Bienvenue sur la plateforme de vote de L'UNSA
								FCS
							</h2>
							<button
								onClick={() => setVoting(!voting)}
								className="w-1/5 m-auto  py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white transition duration-150 ease-in bg-blue-600 hover:bg-blue-700 focus:outline-none"
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
