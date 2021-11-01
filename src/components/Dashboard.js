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

const Dashboard = () => {
	const [admin, setAdmin] = useState(false);
	const { setProcurationUsers, setResultsAccess, resultsAccess } =
		useGlobalContext();
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
		if (
			// accées au personne avec procuration
			currentUser.email === 'ssabril@ymail.com' ||
			currentUser.email === 'benasabri@gmail.com'
		) {
			setProcurationUsers(true);
		} else if (currentUser.email === 'ssabril.ben@gmail.com') {
			// email qui a accees au resultat
			setResultsAccess(true);
		} else {
			setProcurationUsers(false);
			setResultsAccess(false);
		}
	}, []);

	return (
		<div>
			<div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
				<div className="mb-10 flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md h-4/5 w-11/12 max-w-6xl">
					<GetUsers />
					<ResultControle />
					<ResultAdministrative />
					<ResultBureau />
					{resultsAccess && <AllResults />}
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
					<LogOutBtn />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
