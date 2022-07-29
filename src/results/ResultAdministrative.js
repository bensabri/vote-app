import React, { useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import { db } from '../firebase';

const ResultAdministrative = () => {
	const { setResultAdministrative } = useGlobalContext();

	const getResult = () => {
		// GET RESULTS FROM DATABASE

		db.collection('results2test').onSnapshot((Snapshot) => {
			setResultAdministrative(
				Snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	};

	useEffect(() => {
		getResult();
	}, []);

	return <div></div>;
};

export default ResultAdministrative;
