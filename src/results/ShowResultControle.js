import React from 'react';
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

	// resultat Commission de Contrôle
	const ControleA = resultControle.reduce(
		(a, b) => a + b.data.results_controle.a,
		0
	);
	const ControleB = resultControle.reduce(
		(a, b) => a + b.data.results_controle.b,
		0
	);
	const ControleC = resultControle.reduce(
		(a, b) => a + b.data.results_controle.c,
		0
	);
	const ControleD = resultControle.reduce(
		(a, b) => a + b.data.results_controle.d,
		0
	);
	const ControleE = resultControle.reduce(
		(a, b) => a + b.data.results_controle.e,
		0
	);
	const totalValue =
		ControleA + ControleB + ControleC + ControleD + ControleE;

	const dataControle = [
		{
			name: 'a',
			value: Math.round((ControleA / totalValue) * 100),
			score: ControleA,
		},
		{
			name: 'b',
			value: Math.round((ControleB / totalValue) * 100),
			score: ControleB,
		},
		{
			name: 'c',
			value: Math.round((ControleC / totalValue) * 100),
			score: ControleC,
		},
		{
			name: 'd',
			value: Math.round((ControleD / totalValue) * 100),
			score: ControleD,
		},
		{
			name: 'e',
			value: Math.round((ControleE / totalValue) * 100),
			score: ControleE,
		},
	];
	const labelFormatter = (value) => {
		return value + '%';
	};

	return (
		<div className="bg-white rounded-md shadow-md">
			<div className="flex flex-col py-8">
				<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
					résultat 1er VOTE Commission de Contrôle
				</h2>
				<div className="border-t-2 w-11/12 m-auto"></div>
				<div className="mb-6 mt-6 flex justify-between text-gray-500 font-semibold">
					<h3 className="ml-6 uppercase">Scores</h3>
					<h3 className="mr-5 uppercase">
						Nombre de vote {resultControle.length}
					</h3>
				</div>

				<div>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={dataControle}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis domain={[0, 'dataMax + 100']} />
							<Bar
								dataKey="value"
								fill="#ee17bf"
								label={{
									position: 'top',
									formatter: labelFormatter,
									fill: '#ee17bf',
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
