import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { collection, addDoc } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';

const CreateUser = () => {
	const { users } = useGlobalContext();
	const [number, setNumber] = useState();
	const [syndicat, setSyndicat] = useState('');
	const [mandat, setMandat] = useState();
	const [responsable, setResponsable] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const { handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;

	const date = new Date().toLocaleDateString();
	// const currentUser = users.find((user) => user.data.user_name === userName);

	const onSubmit = async () => {
		// create database
		await addDoc(collection(db, 'users'), {
			number: number,
			syndicat: syndicat,
			mandat: mandat,
			user_name: responsable,
			email: email,
			created_date: date,
		})
			.then(() => {
				alert('Crée avec succès');
				setNumber('');
				setSyndicat('');
				setMandat('');
				setResponsable('');
				setEmail('');
			})
			.catch((error) => {
				alert(`impossible de créé un utilisateur${error}`);
			});
	};
	const selectedUsers = users.map((data) => data.data);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col bg-white shadow-md px-10 sm:px-10 md:px-10 lg:px-16 py-10 rounded-md w-full max-w-xl mt-10">
				<h2 className="font-medium self-center text-lg sm:text-xl uppercase text-gray-500">
					Créé un nouvel utilisateur
				</h2>
				<div className="mt-10">
					{error && <p className="text-sm text-red mb-5">{error}</p>}
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col mb-6">
						<label
							htmlFor="mandat"
							className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
						>
							Numéro:
						</label>
						<div className="relative">
							<input
								id="numero"
								onChange={(e) => setNumber(e.target.value)}
								type="number"
								name="numero"
								className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
								placeholder="Numéro du syndicat"
								value={number}
								required
							/>
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<label
							htmlFor="syndicat"
							className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
						>
							Nom du Syndicat:
						</label>
						<div className="relative">
							<input
								id="syndicat"
								onChange={(e) => setSyndicat(e.target.value)}
								type="text"
								name="syndicat"
								className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
								placeholder="Syndicat"
								value={syndicat}
								required
							/>
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<label
							htmlFor="mandat"
							className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
						>
							Mandats:
						</label>
						<div className="relative">
							<input
								id="mandat"
								onChange={(e) => setMandat(e.target.value)}
								type="number"
								name="mandat"
								className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
								placeholder="poids du vote"
								value={mandat}
								required
							/>
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<label
							htmlFor="email"
							className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
						>
							Responsable:
						</label>
						<div className="relative">
							<input
								id="responsable"
								onChange={(e) => setResponsable(e.target.value)}
								type="text"
								name="responsable"
								className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
								placeholder="nom du responsable"
								value={responsable}
							/>
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<label
							htmlFor="email"
							className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
						>
							E-Mail Address:
						</label>
						<div className="relative">
							<input
								id="email"
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								name="email"
								className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
								placeholder="E-Mail Address"
								value={email}
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={isSubmitting}
						className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
					>
						<span className="mr-2 uppercase">Créé utilisateur</span>
					</button>
				</form>
			</div>
			<div className="w-2/5">
				<div>{selectedUsers.length}</div>
				<Autocomplete
					fullWidth="true"
					disablePortal
					id="combo-box-demo"
					options={selectedUsers}
					renderInput={(params) => (
						<TextField
							{...params}
							label="Utilisateur inscrit"
							variant="standard"
							color="warning"
						/>
					)}
					getOptionLabel={(option) => `${option?.user_name} `}
				/>
			</div>
		</div>
	);
};

export default CreateUser;
