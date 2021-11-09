import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, CartesianGrid } from 'recharts';

const ShowResultBureau = () => {
	// const [totalValue, setTotalValue] = useState(0);
	const { resultBureau } = useGlobalContext();

	// resultat Commission de Contrôle
	const BureauA = resultBureau.reduce((a, b) => a + b.data.results_bureau.a, 0);
	const BureauB = resultBureau.reduce((a, b) => a + b.data.results_bureau.b, 0);
	const BureauC = resultBureau.reduce((a, b) => a + b.data.results_bureau.c, 0);
	const totalValue = BureauA + BureauB + BureauC;

	const valueA = (BureauA / totalValue).toFixed(4) * 100;
	const valueB = (BureauB / totalValue).toFixed(4) * 100;
	const valueC = (BureauC / totalValue).toFixed(4) * 100;

	const dataBureau = [
		{
			name: 'Vote BLANC',
			value: valueA.toFixed(2),
			score: BureauA,
		},
		{
			name: 'Vote POUR',
			value: valueB.toFixed(2),
			score: BureauB,
		},
		{
			name: 'Vote CONTRE',
			value: valueC.toFixed(2),
			score: BureauC,
		},
	];

	const labelFormatter = (value) => {
		return value + '%';
	};

	return (
		<div className='bg-white rounded-md shadow-md mt-vh px-4 mx-4'>
			<div className='flex flex-col py-8'>
				<h2 className='text-center pb-5 font-medium self-center text-lg sm:text-xl uppercase text-gray-500'>Candidature au Bureau - Liste F. Hiraki</h2>
				<div className='border-t-2 w-11/12 m-auto'></div>
				<div className='mb-6 mt-6 flex justify-between text-gray-500 font-semibold'>
					<h3 className='ml-6 uppercase'>Pourcent</h3>
					<h3 className='mr-5 uppercase'>Nombre de vote {resultBureau.length}</h3>
				</div>
				<ResponsiveContainer width='100%' height={300}>
					<BarChart data={dataBureau}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis domain={[0, 120]} />
						<Bar
							dataKey='value'
							fill='#81CFDF'
							label={{
								position: 'top',
								formatter: labelFormatter,
								fill: '#81CFDF',
							}}>
							<LabelList dataKey='score' style={{ position: 'top', fill: '#ffffff' }} />
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default ShowResultBureau;
