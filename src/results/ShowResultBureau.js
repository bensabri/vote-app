import React, { useState } from 'react';
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

const ShowResultBureau = () => {
	// const [totalValue, setTotalValue] = useState(0);
	const { resultBureau } = useGlobalContext();

	// resultat Commission de Contrôle
	const BureauA = resultBureau.reduce(
		(a, b) => a + b.data.results_bureau.a,
		0
	);
	const BureauB = resultBureau.reduce(
		(a, b) => a + b.data.results_bureau.b,
		0
	);
	const BureauC = resultBureau.reduce(
		(a, b) => a + b.data.results_bureau.c,
		0
	);
	const totalValue = BureauA + BureauB + BureauC;

	const dataBureau = [
		{
			name: 'a',
			value: Math.round((BureauA / totalValue) * 100),
			score: BureauA,
		},
		{
			name: 'b',
			value: Math.round((BureauB / totalValue) * 100),
			score: BureauB,
		},
		{
			name: 'c',
			value: Math.round((BureauC / totalValue) * 100),
			score: BureauC,
		},
	];

	const labelFormatter = (value) => {
		return value + '%';
	};

	return (
		<div className="bg-white rounded-md shadow-md mt-10">
			<div className="flex flex-col py-8">
				<h2 className="pb-5 font-medium self-center text-lg sm:text-xl uppercase text-gray-500">
					résultat 3éme VOTE Candidature au Bureau
				</h2>
				<div className="border-t-2 w-11/12 m-auto"></div>
				<div className="mb-6 mt-6 flex justify-between text-gray-500 font-semibold">
					<h3 className="ml-6 uppercase">Scores</h3>
					<h3 className="mr-5 uppercase">
						Nombre de vote {resultBureau.length}
					</h3>
				</div>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={dataBureau}>
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
	);
};

export default ShowResultBureau;
