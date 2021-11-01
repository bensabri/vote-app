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

const ShowResultAdministrative = () => {
	const { resultAdministrative } = useGlobalContext();

	// resultat Commission Administrative

	const AdministrativeA = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.a,
		0
	);
	const AdministrativeB = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.b,
		0
	);
	const AdministrativeC = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.c,
		0
	);
	const AdministrativeD = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.d,
		0
	);
	const AdministrativeE = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.e,
		0
	);
	const AdministrativeF = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.f,
		0
	);
	const AdministrativeG = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.g,
		0
	);
	const AdministrativeH = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.h,
		0
	);
	const AdministrativeI = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.i,
		0
	);
	const AdministrativeJ = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.j,
		0
	);
	const AdministrativeK = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.k,
		0
	);
	const AdministrativeL = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.l,
		0
	);
	const AdministrativeM = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.m,
		0
	);
	const AdministrativeN = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.n,
		0
	);
	const AdministrativeO = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.o,
		0
	);
	const AdministrativeP = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.p,
		0
	);
	const AdministrativeQ = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.q,
		0
	);
	const AdministrativeR = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.r,
		0
	);
	const AdministrativeS = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.s,
		0
	);
	const AdministrativeT = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.t,
		0
	);
	const AdministrativeU = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.u,
		0
	);
	const AdministrativeV = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.v,
		0
	);
	const AdministrativeW = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.w,
		0
	);
	const AdministrativeX = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.x,
		0
	);
	const AdministrativeY = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.y,
		0
	);

	const totalValue =
		AdministrativeA +
		AdministrativeB +
		AdministrativeC +
		AdministrativeD +
		AdministrativeE +
		AdministrativeF +
		AdministrativeG +
		AdministrativeH +
		AdministrativeI +
		AdministrativeJ +
		AdministrativeK +
		AdministrativeL +
		AdministrativeM +
		AdministrativeN +
		AdministrativeO +
		AdministrativeP +
		AdministrativeQ +
		AdministrativeR +
		AdministrativeS +
		AdministrativeT +
		AdministrativeU +
		AdministrativeV +
		AdministrativeW +
		AdministrativeX +
		AdministrativeY;

	const dataAdministrative = [
		{
			name: 'a',
			value: Math.round((AdministrativeA / totalValue) * 100),
			score: AdministrativeA,
		},
		{
			name: 'b',
			value: Math.round((AdministrativeA / totalValue) * 100),
			score: AdministrativeB,
		},
		{
			name: 'c',
			value: Math.round((AdministrativeC / totalValue) * 100),
			score: AdministrativeC,
		},
		{
			name: 'd',
			value: Math.round((AdministrativeD / totalValue) * 100),
			score: AdministrativeD,
		},
		{
			name: 'e',
			value: Math.round((AdministrativeE / totalValue) * 100),
			score: AdministrativeE,
		},
		{
			name: 'f',
			value: Math.round((AdministrativeF / totalValue) * 100),
			score: AdministrativeF,
		},
		{
			name: 'g',
			value: Math.round((AdministrativeG / totalValue) * 100),
			score: AdministrativeG,
		},
		{
			name: 'h',
			value: Math.round((AdministrativeH / totalValue) * 100),
			score: AdministrativeH,
		},
		{
			name: 'i',
			value: Math.round((AdministrativeI / totalValue) * 100),
			score: AdministrativeI,
		},
		{
			name: 'j',
			value: Math.round((AdministrativeJ / totalValue) * 100),
			score: AdministrativeJ,
		},
		{
			name: 'k',
			value: Math.round((AdministrativeK / totalValue) * 100),
			score: AdministrativeK,
		},
		{
			name: 'l',
			value: Math.round((AdministrativeL / totalValue) * 100),
			score: AdministrativeL,
		},
		{
			name: 'm',
			value: Math.round((AdministrativeM / totalValue) * 100),
			score: AdministrativeM,
		},
		{
			name: 'n',
			value: Math.round((AdministrativeN / totalValue) * 100),
			score: AdministrativeN,
		},
		{
			name: 'o',
			value: Math.round((AdministrativeO / totalValue) * 100),
			score: AdministrativeO,
		},
		{
			name: 'p',
			value: Math.round((AdministrativeP / totalValue) * 100),
			score: AdministrativeP,
		},
		{
			name: 'q',
			value: Math.round((AdministrativeQ / totalValue) * 100),
			score: AdministrativeQ,
		},
		{
			name: 'r',
			value: Math.round((AdministrativeR / totalValue) * 100),
			score: AdministrativeR,
		},
		{
			name: 's',
			value: Math.round((AdministrativeS / totalValue) * 100),
			score: AdministrativeS,
		},
		{
			name: 't',
			value: Math.round((AdministrativeT / totalValue) * 100),
			score: AdministrativeT,
		},
		{
			name: 'u',
			value: Math.round((AdministrativeU / totalValue) * 100),
			score: AdministrativeU,
		},
		{
			name: 'v',
			value: Math.round((AdministrativeV / totalValue) * 100),
			score: AdministrativeV,
		},
		{
			name: 'w',
			value: Math.round((AdministrativeW / totalValue) * 100),
			score: AdministrativeW,
		},
		{
			name: 'x',
			value: Math.round((AdministrativeX / totalValue) * 100),
			score: AdministrativeX,
		},
		{
			name: 'y',
			value: Math.round((AdministrativeY / totalValue) * 100),
			score: AdministrativeY,
		},
	];
	const labelFormatter = (value) => {
		return value + '%';
	};

	return (
		<div>
			<div className="mr-5 mt-5">
				<h2 className="mb-3">
					Commission Administrative Nombre de vote{' '}
					{resultAdministrative.length}
				</h2>
				<ResponsiveContainer width="100%" height={450}>
					<BarChart data={dataAdministrative}>
						<XAxis dataKey="name" />
						<YAxis domain={[0, 'dataMax + 100']} />
						<Tooltip />
						<Bar dataKey="value" fill="#ee17bf">
							<LabelList
								label={{
									position: 'top',
									formatter: labelFormatter,
									fill: '#ee17bf',
								}}
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

export default ShowResultAdministrative;
