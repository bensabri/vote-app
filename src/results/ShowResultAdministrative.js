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
	const AdministrativeD = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.toure_M,
		0
	);
	const AdministrativeE = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.tabbou_A,
		0
	);
	const AdministrativeF = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.fournier_S,
		0
	);
	const AdministrativeG = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.fuchs_M,
		0
	);
	const AdministrativeH = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.djeffel_A,
		0
	);
	const AdministrativeI = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.bulot_S,
		0
	);
	const AdministrativeJ = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.chlait_K,
		0
	);
	const AdministrativeK = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.assal_B,
		0
	);
	const AdministrativeL = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.mekhloufi_B,
		0
	);
	const AdministrativeM = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.pelmar_T,
		0
	);
	const AdministrativeN = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.bonilla_A,
		0
	);
	const AdministrativeO = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.jossoB,
		0
	);
	const AdministrativeP = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.kalilou_S,
		0
	);
	const AdministrativeQ = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.zenaf_N,
		0
	);
	const AdministrativeR = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.sandrineV,
		0
	);
	const AdministrativeS = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.hammoutiA,
		0
	);
	const AdministrativeT = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.huetF,
		0
	);
	const AdministrativeU = resultAdministrative.reduce(
		(a, b) => a + b.data.results_administrative.poulainS,
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
		AdministrativeU;

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
	const valueR = (AdministrativeR / totalValue) * 100;
	const valueS = (AdministrativeS / totalValue) * 100;
	const valueT = (AdministrativeT / totalValue) * 100;
	const valueU = (AdministrativeU / totalValue) * 100;

	const dataAdministrative = [
		{
			name: 'Assal B.',
			value: valueK.toFixed(2),
			score: AdministrativeK,
		},
		{
			name: 'Bonilla A.',
			value: valueN.toFixed(2),
			score: AdministrativeN,
		},
		{
			name: 'Braq M.',
			value: valueB.toFixed(2),
			score: AdministrativeB,
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
			name: 'Djeffel A.',
			value: valueH.toFixed(2),
			score: AdministrativeH,
		},
		{
			name: 'Fourn S.',
			value: valueF.toFixed(2),
			score: AdministrativeF,
		},
		{
			name: 'Fuchs M.',
			value: valueG.toFixed(2),
			score: AdministrativeG,
		},
		{
			name: 'HammouA',
			value: valueS.toFixed(2),
			score: AdministrativeS,
		},
		{
			name: 'Hiraki F.',
			value: valueC.toFixed(2),
			score: AdministrativeC,
		},
		{
			name: 'HuetF',
			value: valueT.toFixed(2),
			score: AdministrativeT,
		},
		{
			name: 'JossoB',
			value: valueO.toFixed(2),
			score: AdministrativeO,
		},
		{
			name: 'Kalilou S.',
			value: valueP.toFixed(2),
			score: AdministrativeP,
		},
		{
			name: 'Kempf JP.',
			value: valueA.toFixed(2),
			score: AdministrativeA,
		},
		{
			name: 'Mekhlo.',
			value: valueL.toFixed(2),
			score: AdministrativeL,
		},
		{
			name: 'Pelmar T.',
			value: valueM.toFixed(2),
			score: AdministrativeM,
		},
		{
			name: 'PoulainS',
			value: valueU.toFixed(2),
			score: AdministrativeU,
		},
		{
			name: 'SandriV.',
			value: valueR.toFixed(2),
			score: AdministrativeR,
		},
		{
			name: 'Tabbou A.',
			value: valueE.toFixed(2),
			score: AdministrativeE,
		},
		{
			name: 'Toure M.',
			value: valueD.toFixed(2),
			score: AdministrativeD,
		},
		{
			name: 'ZenafN.',
			value: valueQ.toFixed(2),
			score: AdministrativeQ,
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
