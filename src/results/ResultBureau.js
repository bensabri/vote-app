import React, { useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import { db } from '../firebase';

const ResultBureau = () => {
	const { setResultBureau } = useGlobalContext();

	const getResult = () => {
		// GET RESULTS FROM DATABASE
		db.collection('results3test').onSnapshot((Snapshot) => {
			setResultBureau(
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

export default ResultBureau;
