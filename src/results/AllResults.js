import React from 'react';
import ShowResultAdministrative from './ShowResultAdministrative';
import ShowResultBureau from './ShowResultBureau';
import ShowResultControle from './ShowResultControle';
import GetUsers from '../hooks/GetUsers';
import ResultControle from '../results/ResultControle';
import ResultAdministrative from '../results/ResultAdministrative';
import ResultBureau from '../results/ResultBureau';
import Header from '../components/Header';

const AllResults = () => {
	return (
		<div className='bg-primary pb-vh'>
			<Header />
			<ResultControle />
			<ResultAdministrative />
			<ResultBureau />
			<ShowResultControle />
			<ShowResultAdministrative />
			<ShowResultBureau />
		</div>
	);
};

export default AllResults;
