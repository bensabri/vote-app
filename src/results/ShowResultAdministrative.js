import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
import toPercent from '../components/candidats/PercentAdministrative';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	LabelList,
	CartesianGrid,
} from 'recharts';

const ShowResultAdministrative = () => {
	const [resultsWidth, setResultsWidth] = useState(1999);
	const { resultAdministrative } = useGlobalContext();

	useEffect(() => {
		setTimeout(() => {
			setResultsWidth(2000);
		}, 4000);
		setResultsWidth(1999);
	}, [resultAdministrative]);

	// resultat Commission Administrative

	const AdministrativeA = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.kempf_JP,
		0
	);
	const AdministrativeB = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.braquet_M,
		0
	);
	const AdministrativeC = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.hiraki_F,
		0
	);

	const totalValue =
		AdministrativeA +
		AdministrativeB +
		AdministrativeC ;

	const valueA = (AdministrativeA / totalValue) * 100;
	const valueB = (AdministrativeB / totalValue) * 100;
	const valueC = (AdministrativeC / totalValue) * 100;

	const dataAdministrative = [
		{
			name: 'Amir A.',
			value: valueA.toFixed(2),
			score: AdministrativeA,
		},
		{
			name: 'Anir B.',
			value: valueB.toFixed(2),
			score: AdministrativeB,
		},
		{
			name: 'Amir C.',
			value: valueC.toFixed(2),
			score: AdministrativeC,
		},
	];

	const labelFormatter = (pourcentage) => {
		return pourcentage + '%';
	};

	return (
		<div className="bg-white rounded-md shadow-md mt-vh px-4 mx-4">
			<div className="flex flex-col py-8">
				<h2 className="text-center pb-5 font-medium self-center text-lg sm:text-xl uppercase text-gray-500">
					Commission Administrative
				</h2>
				<div className="border-t-2 w-11/12 m-auto"></div>
				<div className="mb-6 mt-6 flex justify-between text-gray-500 font-semibold">
					<h3 className="ml-6 uppercase">pourcent</h3>
					<h3 className="mr-5 uppercase">
						Nombre de vote {resultAdministrative.length}
					</h3>
				</div>
				<div className="overflow-hidden overflow-x-scroll mr-5">
					<ResponsiveContainer width={resultsWidth} height={300}>
						<BarChart data={dataAdministrative}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis domain={[0, 25]} />
							<Tooltip />
							<Bar
								layout="vertical"
								barSize={70}
								dataKey="value"
								fill="#81CFDF"
								label={{
									position: 'top',
									formatter: labelFormatter,
									fill: '#81CFDF',
								}}
							>
								<LabelList
									label={{
										position: 'top',
										formatter: labelFormatter,
										fill: '#81CFDF',
									}}
									dataKey="score"
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
