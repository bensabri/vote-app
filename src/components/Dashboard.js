import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useGlobalContext } from '../contexts/context';
import GetUsers from '../hooks/GetUsers';
import CreateUser from './CreateUser';
import ResultControle from '../results/ResultControle';
import SendEmail from './SendEmail';
import VotePage from './VotePage';
import ResultAdministrative from '../results/ResultAdministrative';
import ResultBureau from '../results/ResultBureau';
import Header from './Header';

const Dashboard = () => {
	const [admin, setAdmin] = useState(false);
	const { setProcurationUsers, setSuperProcuration } = useGlobalContext();
	const { currentUser } = useAuth();

	useEffect(() => {
		// accées administrateur
		if (currentUser.email === 'admin@dev.team') {
			setAdmin(true);
		} else {
			setAdmin(false);
		}
	}, []);

	useEffect(() => {
		switch (currentUser.email) {
			case 'benasabri2@gmail.com':
				setProcurationUsers(true);
				/* setResultsAccess(false); */
				break;
			case 'lakram@hotmail.fr':
				setProcurationUsers(true);
				break;
			case 'alexandre.bonilla@yahoo.fr':
				setProcurationUsers(true);
				break;
			case 'assalbrigitte92@gmail.com':
				setProcurationUsers(true);
				break;
			case 'migan.unsa@yahoo.fr':
				setProcurationUsers(true);
				break;
			case 'unsa.proprete.nettoyage@gmail.com':
				setProcurationUsers(true);
				break;
			case 'unsa.nettoyage@unsa.org':
				setProcurationUsers(true);
				break;
			case 'hfati@hotmail.fr':
				setProcurationUsers(true);
				break;
			case 'franck.martinez3@wanadoo.fr':
				setProcurationUsers(true);
				break;
			case 'freddy.hardet@orange.fr':
				setProcurationUsers(true);
				break;
			case 'imed.benahmed@yahoo.fr':
				setProcurationUsers(true);
				break;
			case 'freddy.hardet@orange.fr':
				setProcurationUsers(true);
				break;
			case 'sidibekalilou@yahoo.fr':
				setProcurationUsers(true);
				break;
			case 'unsa.hcr@unsa.org':
				setProcurationUsers(true);
				break;
			case 'khadijachlait@hotmail.com':
				setProcurationUsers(true);
				break;
			case 'lagomuche@orange.fr':
				setProcurationUsers(true);
				break;
			case 'mouloud.nadia@neuf.fr':
				setProcurationUsers(true);
				break;
			case 'unsa.adecco@gmail.com':
				setProcurationUsers(true);
				break;
			case 'unsa.manpower@gmail.com':
				setProcurationUsers(true);
				break;
			case 'fourseb13@gmail.com':
				setProcurationUsers(true);
				break;
			case 'pelmarthierry1@gmail.com':
				setProcurationUsers(true);
				break;
			case 'compass@unsa.org':
				setProcurationUsers(true);
				break;
			case 'benhammouda.amir@gmail.com':
				setSuperProcuration(true);
				break;
			case 'ssabril@ymail.com':
				setSuperProcuration(true);
				break;
			default:
				setProcurationUsers(false);
				setSuperProcuration(false);
		}
	}, [currentUser.email]);

	return (
		<>
			<Header />
			<img
				className="absolute w-screen h-screen object-cover filter blur-md brightness-50"
				src="https://res.cloudinary.com/amircloud/image/upload/v1636490192/Service/background_rerc6d.jpg"
				alt=""
			/>
			<div className="flex flex-col items-center bg-gray-300 z-10">
				<div className="mb-10 flex flex-col sm:px-6 md:px-8 lg:px-10 py-8 rounded-md h-4/5 w-full lg:max-w-6xl md:max-w-full z-10">
					<GetUsers />
					<ResultControle />
					<ResultAdministrative />
					<ResultBureau />
					{admin ? (
						<div>
							<SendEmail />
							<CreateUser />
						</div>
					) : (
						<VotePage />
					)}
					{/* <LogOutBtn /> */}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
