import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useGlobalContext } from '../contexts/context';
import GetUsers from '../hooks/GetUsers';
import CreateUser from './CreateUser';
import ResultControle from '../results/ResultControle';
import LogOutBtn from './LogOutBtn';
import SendEmail from './SendEmail';
import VotePage from './VotePage';
import ResultAdministrative from '../results/ResultAdministrative';
import ResultBureau from '../results/ResultBureau';
import AllResults from '../results/AllResults';
import ShowResultControle from '../results/ShowResultControle';
import ShowResultAdministrative from '../results/ShowResultAdministrative';
import ShowResultBureau from '../results/ShowResultBureau';
import Header from './Header';

const Dashboard = () => {
	const [admin, setAdmin] = useState(false);
	const { setProcurationUsers /* setResultsAccess, resultsAccess */ } = useGlobalContext();
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
			case 'benasabri@gmail.com':
				setProcurationUsers(true);
				/* setResultsAccess(false); */
				break;
			case 'alexandre.bonilla@yahoo.fr':
				setProcurationUsers(true);
			default:
				setProcurationUsers(false);
		}

		// if (currentUser.email === 'benasabri@gmail.com') {
		// 	setProcurationUsers(true);
		// 	setResultsAccess(false);
		// } else if (currentUser.email === 'ssabril.ben@gmail.com') {
		// 	// email qui a accees au resultat
		// 	setResultsAccess(true);
		// } else {
		// 	setProcurationUsers(false);
		// 	setResultsAccess(false);
		// }
	}, []);

	return (
		<>
			<Header />
			<video className='absolute w-screen h-screen object-cover z-0' autoPlay loop muted>
				<source src='https://firebasestorage.googleapis.com/v0/b/voteapp-d3b5e.appspot.com/o/background_1.mp4?alt=media&token=18027da3-7a79-4a58-ae9f-703635c7b0c7' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<div className='flex flex-col items-center bg-gray-300 z-10'>
				<div className='mb-10 flex flex-col sm:px-6 md:px-8 lg:px-10 py-8 rounded-md h-4/5 w-full lg:max-w-6xl md:max-w-full z-10'>
					<GetUsers />
					<ResultControle />
					<ResultAdministrative />
					<ResultBureau />
					<AllResults />
					{admin ? (
						<div>
							<SendEmail />
							<CreateUser />
							<ShowResultControle />
							<ShowResultAdministrative />
							<ShowResultBureau />
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
