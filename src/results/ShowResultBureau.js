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
		<div>
			<div className="mr-5 mt-5">
				<h2 className="mb-3">
					Candidature au Bureau Nombre de vote {resultBureau.length}
				</h2>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={dataBureau}>
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
