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
		<div className='bg-primary'>
			<Header />
			<img className='absolute w-screen h-screen object-cover filter blur-md brightness-50' src='https://res.cloudinary.com/amircloud/image/upload/v1636490192/Service/background_rerc6d.jpg' alt='' />
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
