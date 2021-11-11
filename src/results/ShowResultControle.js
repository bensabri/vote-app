import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../contexts/context';
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

const ShowResultControle = () => {
	const { resultControle } = useGlobalContext();
	const [resultsWidth, setResultsWidth] = useState(99);

	useEffect(() => {
		setTimeout(() => {
			setResultsWidth(100);
		}, 4000);
		setResultsWidth(99);
	}, [resultControle]);

	// resultat Commission de Contrôle
	const ControleA = resultControle.reduce(
		(a, b) => a + b.data.results_controle.abdelalih,
		0
	);
	const ControleB = resultControle.reduce(
		(a, b) => a + b.data.results_controle.nadiaz,
		0
	);
	const ControleC = resultControle.reduce(
		(a, b) => a + b.data.results_controle.abdelrazakd,
		0
	);

	const totalValue = ControleA + ControleB + ControleC;

	const valueA = (ControleA / totalValue).toFixed(4) * 100;
	const valueB = (ControleB / totalValue).toFixed(4) * 100;
	const valueC = (ControleC / totalValue).toFixed(4) * 100;

	const dataControle = [
		{
			name: 'Abdelali H.',
			value: valueA.toFixed(2),
			score: ControleA,
		},
		{
			name: 'Nadia Z.',
			value: valueB.toFixed(2),
			score: ControleB,
		},
		{
			name: 'Abdelrazak D.',
			value: valueC.toFixed(2),
			score: ControleC,
		},
	];
	const labelFormatter = (value) => {
		return value + '%';
	};

	return (
		<div className="bg-white rounded-md shadow-md mt-vh px-4 mx-4">
			<div className="flex flex-col py-8">
				<h2 className="text-center pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
					Commission de Contrôle
				</h2>
				<div className="border-t-2 w-11/12 m-auto"></div>
				<div className="mb-6 mt-6 flex justify-between text-gray-500 font-semibold">
					<h3 className="ml-6 uppercase">pourcent</h3>
					<h3 className="mr-5 uppercase">
						Nombre de vote {resultControle.length}
					</h3>
				</div>

				<div>
					<ResponsiveContainer
						width={`${resultsWidth}%`}
						height={300}
					>
						<BarChart data={dataControle}>
							<CartesianGrid strokeDasharray="3 3" />
							{/* <Tooltip /> */}
							<XAxis dataKey="name" />
							<YAxis domain={[0, 100]} />
							<Bar
								dataKey="value"
								fill="#81CFDF"
								label={{
									position: 'top',
									formatter: labelFormatter,
									fill: '#81CFDF',
								}}
							>
								<LabelList
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

export default ShowResultControle;
