import React from 'react';
import ShowResultAdministrative from './ShowResultAdministrative';
import ShowResultBureau from './ShowResultBureau';
import ShowResultControle from './ShowResultControle';

const AllResults = () => {
	return (
		<div>
			<ShowResultControle />
			<ShowResultAdministrative />
			<ShowResultBureau />
		</div>
	);
};

export default AllResults;
