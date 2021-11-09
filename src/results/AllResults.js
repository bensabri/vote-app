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
			<video className='absolute w-screen h-screen object-cover z-0' autoPlay loop muted>
				<source src='https://firebasestorage.googleapis.com/v0/b/voteapp-d3b5e.appspot.com/o/background_1.mp4?alt=media&token=18027da3-7a79-4a58-ae9f-703635c7b0c7' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
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
