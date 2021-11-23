import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import CandidatureAdministrative from './candidats/CandidatsAdministrative';
import CandidatureBureau from './CandidatureBureau';

const CommissionAdministrative = ({ mandat, syndicat, email }) => {
	const { register, watch, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;
	const { resultAdministrative, query, procurationUsers, superProcuration } =
		useGlobalContext();

	const { currentUser } = useAuth();
	const [hasVoted, setHasVoted] = useState(false);
	const [KempfJp, setKempfJp] = useState(0);
	const [BraquetM, setBraquetM] = useState(0);
	const [HirakiF, setHirakiF] = useState(0);
	const [ToureM, setToureM] = useState(0);
	const [TabbouA, setTabbouA] = useState(0);
	const [FournierS, setFournierS] = useState(0);
	const [FuchsM, setFuchsM] = useState(0);
	const [DjeffelA, setDjeffelA] = useState(0);
	const [BulotS, setBulotS] = useState(0);
	const [ChlaitK, setChlaitK] = useState(0);
	const [AssalB, setAssalB] = useState(0);
	const [MekhloufiB, setMekhloufiB] = useState(0);
	const [PelmarT, setPelmarT] = useState(0);
	const [BonillaA, setBonillaA] = useState(0);
	const [JossoB, setJossoB] = useState(0);
	const [KalilouS, setKalilouS] = useState(0);
	const [ZenafN, setZenafN] = useState(0);
	const [SandrineV, setSandrineV] = useState(0);
	const [HammoutiA, setHammoutiA] = useState(0);
	const [HuetF, setHuetF] = useState(0);
	const [PoulainS, setPoulainS] = useState(0);
	const [error, setError] = useState('');
	const date = new Date().toLocaleDateString();

	const watchCheckBox = watch(CandidatureAdministrative);
	const checkedCount = watchCheckBox.filter(Boolean).length;

	const onSubmit = async () => {
		if (watchCheckBox && checkedCount === 21) {
			await addDoc(collection(db, 'results2'), {
				syndicat: syndicat,
				results_administrative: {
					KempfJp: Number(KempfJp),
					BraquetM: Number(BraquetM),
					HirakiF: Number(HirakiF),
					ToureM: Number(ToureM),
					TabbouA: Number(TabbouA),
					FournierS: Number(FournierS),
					FuchsM: Number(FuchsM),
					DjeffelA: Number(DjeffelA),
					BulotS: Number(BulotS),
					ChlaitK: Number(ChlaitK),
					AssalB: Number(AssalB),
					MekhloufiB: Number(MekhloufiB),
					PelmarT: Number(PelmarT),
					BonillaA: Number(BonillaA),
					JossoB: Number(JossoB),
					KalilouS: Number(KalilouS),
					ZenafN: Number(ZenafN),
					SandrineV: Number(SandrineV),
					HammoutiA: Number(HammoutiA),
					HuetF: Number(HuetF),
					PoulainS: Number(PoulainS),
				},
				email: email,
				secondVote: hasVoted,
				created: date,
			})
				.then(() => {
					// setStep(step + 1);
					// alert('Votre vote a ete prise en compte');
				})
				.catch((error) => {
					alert(`Votre vote n'a pas pu être prit en compte ${error}`);
				});
		} else {
			setError('Vous devez sélectionner 21 candidats');
		}
	};

	const HandleA = () => {
		setKempfJp(watchCheckBox[0] ? 0 : Number(mandat));
	};
	const HandleB = () => {
		setBraquetM(watchCheckBox[1] ? 0 : Number(mandat));
	};
	const HandleC = () => {
		setHirakiF(watchCheckBox[2] ? 0 : Number(mandat));
	};
	const HandleD = () => {
		setToureM(watchCheckBox[3] ? 0 : Number(mandat));
	};
	const HandleE = () => {
		setTabbouA(watchCheckBox[4] ? 0 : Number(mandat));
	};
	const HandleF = () => {
		setFournierS(watchCheckBox[5] ? 0 : Number(mandat));
	};
	const HandleG = () => {
		setFuchsM(watchCheckBox[6] ? 0 : Number(mandat));
	};
	const HandleH = () => {
		setDjeffelA(watchCheckBox[7] ? 0 : Number(mandat));
	};
	const HandleI = () => {
		setBulotS(watchCheckBox[8] ? 0 : Number(mandat));
	};
	const HandleJ = () => {
		setChlaitK(watchCheckBox[9] ? 0 : Number(mandat));
	};
	const HandleK = () => {
		setAssalB(watchCheckBox[10] ? 0 : Number(mandat));
	};
	const HandleL = () => {
		setMekhloufiB(watchCheckBox[11] ? 0 : Number(mandat));
	};
	const HandleM = () => {
		setPelmarT(watchCheckBox[12] ? 0 : Number(mandat));
	};
	const HandleN = () => {
		setBonillaA(watchCheckBox[13] ? 0 : Number(mandat));
	};
	const HandleO = () => {
		setJossoB(watchCheckBox[14] ? 0 : Number(mandat));
	};
	const HandleP = () => {
		setKalilouS(watchCheckBox[15] ? 0 : Number(mandat));
	};
	const HandleQ = () => {
		setZenafN(watchCheckBox[16] ? 0 : Number(mandat));
	};
	const HandleR = () => {
		setSandrineV(watchCheckBox[17] ? 0 : Number(mandat));
	};
	const HandleS = () => {
		setHammoutiA(watchCheckBox[18] ? 0 : Number(mandat));
	};
	const HandleT = () => {
		setHuetF(watchCheckBox[19] ? 0 : Number(mandat));
	};
	const HandleU = () => {
		setPoulainS(watchCheckBox[20] ? 0 : Number(mandat));
	};

	const voted = resultAdministrative.find(
		({ data: { email } }) =>
			email ===
			`${
				(superProcuration && query) ||
				(!superProcuration && currentUser.email)
			}`
	);

	return (
		<div>
			{voted?.data.secondVote ? (
				<div>
					<CandidatureBureau
						mandat={mandat}
						syndicat={syndicat}
						email={email}
					/>
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="w-11/12 m-auto shadow-lg bg-white rounded-md">
						<div className="flex flex-col py-8 px-5">
							{!procurationUsers && (
								<h2 className="pb-5 font-medium self-center text-xl sm:text-2xl uppercase text-gray-500">
									UNSA FCS 6ÈME CONGRÈS 2021
								</h2>
							)}
							<div className="flex justify-between text-base font-medium text-gray-900 uppercase sm:p-6 py-5 px-2">
								<legend className="text-xs sm:text-sm lg:text-lg font-bold text-gray-900">
									Commission Administrative
								</legend>
								<p className="text-xs sm:text-sm lg:text-lg">{`Syndicat ${syndicat}`}</p>
							</div>
							<div className="border-t-2 w-11/12 m-auto"></div>
							<h3 className="text-center text-sm lg:text-lg mb-1 mt-2 sm:ml-6 ml-2 font-bold text-gray-700">
								Parmi ces candidats, pour qui souhaiteriez vous
								voter ? {`${checkedCount}/21`}
							</h3>
							<div className="mt-4 sm:ml-7 grid gap-4 sm:gap-x-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Kempf JP"
											id="Kempf JP"
											{...register('Kempf JP')}
											type="checkbox"
											onClick={HandleA}
											value={KempfJp}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Kempf JP"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Kempf JP.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Braquet M"
											id="Braquet M"
											{...register('Braquet M')}
											type="checkbox"
											onClick={HandleB}
											value={BraquetM}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Braquet M"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Braquet M.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Hiraki F"
											id="Hiraki F"
											{...register('Hiraki F')}
											type="checkbox"
											onClick={HandleC}
											value={HirakiF}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Hiraki F"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Hiraki F.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Toure M"
											id="Toure M"
											{...register('Toure M')}
											type="checkbox"
											onClick={HandleD}
											value={ToureM}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Toure M"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Toure M.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Tabbou A"
											id="Tabbou A"
											{...register('Tabbou A')}
											type="checkbox"
											onClick={HandleE}
											value={TabbouA}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Tabbou A"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Tabbou A.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Fournier S"
											id="Fournier S"
											{...register('Fournier S')}
											type="checkbox"
											onClick={HandleF}
											value={FournierS}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Fournier S"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Fournier S.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Fuchs M"
											id="Fuchs M"
											{...register('Fuchs M')}
											type="checkbox"
											onClick={HandleG}
											value={FuchsM}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Fuchs M"
										>
											<label
												className="cursor-pointer"
												htmlFor="Fuchs M"
											>
												<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
													Fuchs M.
												</span>
											</label>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Djeffel A"
											id="Djeffel A"
											{...register('Djeffel A')}
											type="checkbox"
											onClick={HandleH}
											value={DjeffelA}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Djeffel A"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Djeffel A.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Bulot S"
											id="Bulot S"
											{...register('Bulot S')}
											type="checkbox"
											onClick={HandleI}
											value={BulotS}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Bulot S"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Bulot S.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Chlait K"
											id="Chlait K"
											{...register('Chlait K')}
											type="checkbox"
											onClick={HandleJ}
											value={ChlaitK}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Chlait K"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Chlait K.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Assal B"
											id="Assal B"
											{...register('Assal B')}
											type="checkbox"
											onClick={HandleK}
											value={AssalB}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Assal B"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Assal B.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Mekhloufi B"
											id="Mekhloufi B"
											{...register('Mekhloufi B')}
											type="checkbox"
											onClick={HandleL}
											value={MekhloufiB}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Mekhloufi B"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Mekhloufi B.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Pelmar T"
											id="Pelmar T"
											{...register('Pelmar T')}
											type="checkbox"
											onClick={HandleM}
											value={PelmarT}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Pelmar T"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Pelmar T.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Bonilla A"
											id="Bonilla A"
											{...register('Bonilla A')}
											type="checkbox"
											onClick={HandleN}
											value={BonillaA}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Bonilla A"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Bonilla A.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="JossoB"
											id="JossoB"
											{...register('JossoB')}
											type="checkbox"
											onClick={HandleO}
											value={JossoB}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="JossoB"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Josso B.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Kalilou S"
											id="Kalilou S"
											{...register('Kalilou S')}
											type="checkbox"
											onClick={HandleP}
											value={KalilouS}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Kalilou S"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Kalilou S.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="Zenaf N"
											id="Zenaf N"
											{...register('Zenaf N')}
											type="checkbox"
											onClick={HandleQ}
											value={ZenafN}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="Zenaf N"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Zenaf N.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="SandrineV"
											id="SandrineV"
											{...register('SandrineV')}
											type="checkbox"
											onClick={HandleR}
											value={SandrineV}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="SandrineV"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Verdier S.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="HammoutiA"
											id="HammoutiA"
											{...register('HammoutiA')}
											type="checkbox"
											onClick={HandleS}
											value={HammoutiA}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="HammoutiA"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Hammouti A.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="HuetF"
											id="HuetF"
											{...register('HuetF')}
											type="checkbox"
											onClick={HandleT}
											value={HuetF}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="HuetF"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Huet F.
											</span>
										</label>
									</div>
								</div>
								<div className="w-full flex items-start m-auto sm:m-0">
									<div className="flex items-start h-5">
										<input
											name="PoulainS"
											id="PoulainS"
											{...register('PoulainS')}
											type="checkbox"
											onClick={HandleU}
											value={PoulainS}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<label
											className="cursor-pointer"
											htmlFor="PoulainS"
										>
											<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
												Poulain S.
											</span>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-around py-5 bg-gray-100 text-right sm:px-6 rounded-md">
							{error && (
								<div className="text-red-600 text-xs sm:text-sm  px-5 pt-2">{`${
									checkedCount < 21
										? 'Vous ne pouvez pas choisir moins de 21 candidats'
										: checkedCount > 21
										? 'Vous ne pouvez pas choisir plus de 21 candidats'
										: ''
								} `}</div>
							)}
							<button
								disabled={isSubmitting}
								onClick={() => setHasVoted(true)}
								type="submit"
								className={`mr-2 py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white transition duration-150 ease-in  ${
									isSubmitting ? 'bg-blue-300' : 'bg-blue-600'
								} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
							>
								A Voté
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default CommissionAdministrative;
