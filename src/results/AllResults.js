import React from 'react';
import ShowResultAdministrative from './ShowResultAdministrative';
import ShowResultBureau from './ShowResultBureau';
import ShowResultControle from './ShowResultControle';
import Header from '../components/Header';

const AllResults = () => {
	return (
		<>
			<Header />
			<video className='absolute w-screen h-screen object-cover z-0' autoPlay loop muted>
				<source src='https://firebasestorage.googleapis.com/v0/b/voteapp-d3b5e.appspot.com/o/background_1.mp4?alt=media&token=18027da3-7a79-4a58-ae9f-703635c7b0c7' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<ShowResultControle />
			<ShowResultAdministrative />
			<ShowResultBureau />
		</>
	);
};

export default AllResults;
