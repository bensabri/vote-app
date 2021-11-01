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
		<div>
			<div className="mr-5 mt-5">
				<h2 className="mb-3">
					Commission de Contrôle Nombre de vote{' '}
					{resultControle.length}
				</h2>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={dataControle}>
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
	);
};

export default ShowResultControle;
