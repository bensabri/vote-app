import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import fatiha from '../img/fatiha.jpg';
import madembo from '../img/madembo.png';
import michel from '../img/michel.png';
import kempf from '../img/kempf.png';
import nadia from '../img/nadia.png';
import sandrine from '../img/sandrine.png';
import { Label } from 'recharts';

const CandidatureBureau = ({ mandat, syndicat, email }) => {
	const { register, watch, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;
	const { resultBureau, query, procurationUsers, step, setStep } = useGlobalContext();
	const { currentUser } = useAuth();
	const [hasVoted, setHasVoted] = useState(false);

	const [blanc, setBlanc] = useState(0);
	const [pour, setPour] = useState(0);
	const [contre, setContre] = useState(0);
	const [error, setError] = useState('');
	const date = new Date().toLocaleDateString();

	const watchCheckBox = watch(['blanc', 'pour', 'contre']);
	const checkedCount = watchCheckBox.filter(Boolean).length;

	const team = [
		{
			img: fatiha,
			name: 'FATIHA HIRAKI',
			role: 'SECRÉTAIRE GÉNÉRALE',
		},
		{
			img: madembo,
			name: 'TOURE MA DEMBO',
			role: 'SECRÉTAIRE GÉNÉRAL ADJOINT',
		},
		{
			img: michel,
			name: 'MICHEL BRAQUET',
			role: 'SECRÉTAIRE GÉNÉRAL ADJOINT',
		},
		{
			img: kempf,
			name: 'JEAN PIERRE KEMPF',
			role: 'SECRÉTAIRE FÉDÉRAL TRÉSORERIE',
		},
		{
			img: sandrine,
			name: 'SANDRINE VERDIER',
			role: 'TRÉSORIER ADJOINT',
		},
		{
			img: nadia,
			name: 'NADIA ZENAF',
			role: 'SECRÉTAIRE GÉNÉRALE ADJOINTE',
		},
	];

	const onSubmit = async () => {
		if (watchCheckBox && checkedCount === 1) {
			await addDoc(collection(db, 'results3'), {
				syndicat: syndicat,
				results_bureau: {
					blanc: Number(blanc),
					pour: Number(pour),
					contre: Number(contre),
				},

				email: email,
				thirdVote: hasVoted,
				created_date: date,
			})
				.then(() => {
					// setStep(step + 1);
					// alert('Merci, votre vote a bien été pris en compte');
				})
				.catch((error) => {
					alert(`Désolé, votre vote n'a pas pu être pris en compte ${error}`);
				});
		} else {
			setError("Vous ne pouvez faire qu'un seul choix");
		}
	};
	const HandleA = () => {
		setBlanc(watchCheckBox[0] ? 0 : Number(mandat));
	};
	const HandleB = () => {
		setPour(watchCheckBox[1] ? 0 : Number(mandat));
	};
	const HandleC = () => {
		setContre(watchCheckBox[2] ? 0 : Number(mandat));
	};
	const voted = resultBureau.find(({ data: { email } }) => email === currentUser.email);

	return (
		<div>
			{voted?.data.thirdVote ? (
				<div className='w-11/12 m-auto bg-white flex flex-col justify-between pl-3 pr-3 shadow-lg rounded uppercase py-8 mb-8'>
					<h2 className='text-center pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500'>Merci, votre vote a bien été pris en compte</h2>
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='w-11/12 m-auto shadow-lg bg-white rounded-md'>
						<div className='flex flex-col py-8 px-5'>
							{!procurationUsers && <h2 className='pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500'>UNSA FCS 6ème Congrès 2021</h2>}
							<div className='flex justify-between text-base font-medium text-gray-900 uppercase sm:p-6 py-5 px-2'>
								<legend className='text-base font-medium text-gray-900'>Candidature au Bureau</legend>
								<p className='text-xs sm:text-sm lg:text-lg'>{`Syndicat ${syndicat}`}</p>
							</div>
							<div className='border-t-2 w-11/12 m-auto'></div>
							<div className='p-6 space-y-4'>
								<h3 className='text-center text-xs sm:text-sm lg:text-lg mb-1 font-bold text-gray-700'>Une seule liste candidate</h3>
								<div className='flex flex-wrap gap-4 justify-center items-center rounded-md shadow-md p-6'>
									{team.map((member) => (
										<div key={member.name} className='flex flex-col justify-center items-center'>
											<img className='rounded-circle w-24' src={member.img} alt='' />
											<p className='text-center text-xs font-medium'>{member.name}</p>
											<p className='text-center text-xs font-light'>{member.role}</p>
										</div>
									))}
								</div>
								<div className='flex items-start'>
									<div className='flex items-center h-5'>
										<input name='blanc' id='blanc' {...register('blanc')} type='checkbox' onClick={HandleA} value={blanc} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded' />{' '}
										<label htmlFor='blanc'>
											<span className='ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700 cursor-pointer'>Je vote Blanc</span>
										</label>
									</div>
								</div>
								<div className='flex items-start'>
									<div className='flex items-center h-5'>
										<input name='pour' id='pour' {...register('pour')} type='checkbox' onClick={HandleB} value={pour} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded' />{' '}
										<label htmlFor='pour'>
											<span className='ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700 cursor-pointer'>Je vote Pour</span>
										</label>
									</div>
								</div>
								<div className='flex items-start'>
									<div className='flex items-center h-5'>
										<input name='contre' id='contre' {...register('contre')} type='checkbox' onClick={HandleC} value={contre} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded' />
										<label htmlFor='contre'>
											<span className='ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700 cursor-pointer'>Je vote Contre</span>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className='flex justify-around py-5 bg-gray-100 text-right sm:px-6 rounded-md'>
							{error && <div className='text-red-600 text-xs sm:text-sm  px-5 pt-2'>{`${checkedCount < 1 ? "Vous ne pouvez faire qu'un seul choix" : checkedCount > 1 ? "Vous ne pouvez faire qu'un seul choix" : ''} `}</div>}
							<button disabled={isSubmitting} onClick={() => setHasVoted(true)} type='submit' className={`mr-2 py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white transition duration-150 ease-in  ${isSubmitting ? 'bg-blue-300' : 'bg-blue-600'} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
								A Voté
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default CandidatureBureau;
