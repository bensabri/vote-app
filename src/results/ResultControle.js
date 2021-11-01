import React, { useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import { db } from '../firebase';

const GetResult = () => {
	const { setResultControle } = useGlobalContext();

	const getResult = () => {
		// GET RESULTS FROM DATABASE

		db.collection('results1').onSnapshot((Snapshot) => {
			setResultControle(
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

export default GetResult;
