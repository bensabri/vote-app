import React from 'react';
import { useGlobalContext } from '../contexts/context';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, CartesianGrid } from 'recharts';

const ShowResultAdministrative = () => {
	const { resultAdministrative } = useGlobalContext();

	// resultat Commission Administrative

	const AdministrativeA = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.a, 0);
	const AdministrativeB = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.b, 0);
	const AdministrativeC = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.c, 0);
	const AdministrativeD = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.d, 0);
	const AdministrativeE = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.e, 0);
	const AdministrativeF = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.f, 0);
	const AdministrativeG = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.g, 0);
	const AdministrativeH = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.h, 0);
	const AdministrativeI = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.i, 0);
	const AdministrativeJ = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.j, 0);
	const AdministrativeK = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.k, 0);
	const AdministrativeL = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.l, 0);
	const AdministrativeM = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.m, 0);
	const AdministrativeN = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.n, 0);
	const AdministrativeO = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.o, 0);
	const AdministrativeP = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.p, 0);
	const AdministrativeQ = resultAdministrative.reduce((a, b) => a + b.data.results_administrative.q, 0);

	const totalValue = AdministrativeA + AdministrativeB + AdministrativeC + AdministrativeD + AdministrativeE + AdministrativeF + AdministrativeG + AdministrativeH + AdministrativeI + AdministrativeJ + AdministrativeK + AdministrativeL + AdministrativeM + AdministrativeN + AdministrativeO + AdministrativeP + AdministrativeQ;

	const valueA = (AdministrativeA / totalValue) * 100;
	const valueB = (AdministrativeB / totalValue) * 100;
	const valueC = (AdministrativeC / totalValue) * 100;
	const valueD = (AdministrativeD / totalValue) * 100;
	const valueE = (AdministrativeE / totalValue) * 100;
	const valueF = (AdministrativeF / totalValue) * 100;
	const valueG = (AdministrativeG / totalValue) * 100;
	const valueH = (AdministrativeH / totalValue) * 100;
	const valueI = (AdministrativeI / totalValue) * 100;
	const valueJ = (AdministrativeJ / totalValue) * 100;
	const valueK = (AdministrativeK / totalValue) * 100;
	const valueL = (AdministrativeL / totalValue) * 100;
	const valueM = (AdministrativeM / totalValue) * 100;
	const valueN = (AdministrativeN / totalValue) * 100;
	const valueO = (AdministrativeO / totalValue) * 100;
	const valueP = (AdministrativeP / totalValue) * 100;
	const valueQ = (AdministrativeQ / totalValue) * 100;

	const dataAdministrative = [
		{
			name: 'Kempf JP.',
			value: valueA.toFixed(2),
			score: AdministrativeA,
		},
		{
			name: 'Braquet M.',
			value: valueB.toFixed(2),
			score: AdministrativeB,
		},
		{
			name: 'Hiraki F.',
			value: valueC.toFixed(2),
			score: AdministrativeC,
		},
		{
			name: 'Toure M.',
			value: valueD.toFixed(2),
			score: AdministrativeD,
		},
		{
			name: 'Tabbou A.',
			value: valueE.toFixed(2),
			score: AdministrativeE,
		},
		{
			name: 'Fournier S.',
			value: valueF.toFixed(2),
			score: AdministrativeF,
		},
		{
			name: 'Fuchs M.',
			value: valueG.toFixed(2),
			score: AdministrativeG,
		},
		{
			name: 'Djeffel A.',
			value: valueH.toFixed(2),
			score: AdministrativeH,
		},
		{
			name: 'Bulot S.',
			value: valueI.toFixed(2),
			score: AdministrativeI,
		},
		{
			name: 'Chlait K.',
			value: valueJ.toFixed(2),
			score: AdministrativeJ,
		},
		{
			name: 'Assal B.',
			value: valueK.toFixed(2),
			score: AdministrativeK,
		},
		{
			name: 'Mekhloufi B.',
			value: valueL.toFixed(2),
			score: AdministrativeL,
		},
		{
			name: 'Pelmar T.',
			value: valueM.toFixed(2),
			score: AdministrativeM,
		},
		{
			name: 'Bonilla A.',
			value: valueN.toFixed(2),
			score: AdministrativeN,
		},
		{
			name: 'Bambara',
			value: valueO.toFixed(2),
			score: AdministrativeO,
		},
		{
			name: 'Kalilou S.',
			value: valueP.toFixed(2),
			score: AdministrativeP,
		},
		{
			name: 'Zenaf N.',
			value: valueQ.toFixed(2),
			score: AdministrativeQ,
		},
	];
	const labelFormatter = (value) => {
		return value + '%';
	};

	return (
		<div className='bg-white rounded-md shadow-md mt-vh px-4 mx-4'>
			<div className='flex flex-col py-8'>
				<h2 className='text-center pb-5 font-medium self-center text-lg sm:text-xl uppercase text-gray-500'>Commission Administrative</h2>
				<div className='border-t-2 w-11/12 m-auto'></div>
				<div className='mb-6 mt-6 flex justify-between text-gray-500 font-semibold'>
					<h3 className='ml-6 uppercase'>pourcent</h3>
					<h3 className='mr-5 uppercase'>Nombre de vote {resultAdministrative.length}</h3>
				</div>
				<div className='overflow-hidden overflow-x-scroll mr-5'>
					<ResponsiveContainer width={2000} height={300}>
						<BarChart data={dataAdministrative}>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='name' />
							<YAxis domain={[0, 25]} />
							<Tooltip />
							<Bar
								layout='vertical'
								barSize={70}
								dataKey='value'
								fill='#81CFDF'
								label={{
									position: 'top',
									formatter: labelFormatter,
									fill: '#81CFDF',
								}}>
								<LabelList
									label={{
										position: 'top',
										formatter: labelFormatter,
										fill: '#81CFDF',
									}}
									dataKey='score'
									style={{ position: 'top', fill: '#ffffff' }}
								/>
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default ShowResultAdministrative;
