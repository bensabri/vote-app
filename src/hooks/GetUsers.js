import React, { useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import { db } from '../firebase';

const GetUsers = () => {
	const { setUsers, setLoading, setIsFetching } = useGlobalContext();

	const getUsers = () => {
		// GET USERS FROM DATABASE
		setLoading(true);
		db.collection('users').onSnapshot((Snapshot) => {
			setUsers(
				Snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
			setIsFetching(true);
			setLoading(false);
		});
	};

	useEffect(() => {
		getUsers();
	}, []);

	return <div></div>;
};

export default GetUsers;
