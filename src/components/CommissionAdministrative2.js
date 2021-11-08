import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import itemCheckBox from '../hooks/ItemsCheckBox';
import CandidatureBureau from './CandidatureBureau';

const CommissionAdministrative2 = ({ mandat, syndicat, email }) => {
	const { register, watch, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;
	const { resultAdministrative, query, procurationUsers, step, setStep } =
		useGlobalContext();

	const { currentUser } = useAuth();
	const [hasVoted, setHasVoted] = useState(false);
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [c, setC] = useState(0);
	const [d, setD] = useState(0);
	const [e, setE] = useState(0);
	const [f, setF] = useState(0);
	const [g, setG] = useState(0);
	const [h, setH] = useState(0);
	const [i, setI] = useState(0);
	const [j, setJ] = useState(0);
	const [k, setK] = useState(0);
	const [l, setL] = useState(0);
	const [m, setM] = useState(0);
	const [n, setN] = useState(0);
	const [o, setO] = useState(0);
	const [p, setP] = useState(0);
	const [q, setQ] = useState(0);
	const [r, setR] = useState(0);
	const [s, setS] = useState(0);
	const [t, setT] = useState(0);
	const [u, setU] = useState(0);
	const [v, setV] = useState(0);
	const [w, setW] = useState(0);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [error, setError] = useState('');
	const date = new Date().toLocaleDateString();

	const watchCheckBox = watch(itemCheckBox);
	const checkedCount = watchCheckBox.filter(Boolean).length;

	const onSubmit = async () => {
		if (watchCheckBox && checkedCount === 15) {
			await addDoc(collection(db, 'results2'), {
				syndicat: syndicat,
				results_administrative: {
					a: Number(a),
					b: Number(b),
					c: Number(c),
					d: Number(d),
					e: Number(e),
					f: Number(f),
					g: Number(g),
					h: Number(h),
					i: Number(i),
					j: Number(j),
					k: Number(k),
					l: Number(l),
					m: Number(m),
					n: Number(n),
					o: Number(o),
					p: Number(p),
					q: Number(q),
					r: Number(r),
					s: Number(s),
					t: Number(t),
					u: Number(u),
					v: Number(v),
					w: Number(w),
					x: Number(x),
					y: Number(y),
				},
				email: email,
				secondVote: hasVoted,
				created_date: date,
			})
				.then(() => {
					setStep(step + 1);
					// alert('Votre vote a ete prise en compte');
				})
				.catch((error) => {
					alert(`Votre vote n'a pas pu être prit en compte ${error}`);
				});
		} else {
			setError('Veuillez cocher trois cases');
		}
	};

	const HandleA = () => {
		setA(watchCheckBox[0] ? 0 : Number(mandat));
	};
	const HandleB = () => {
		setB(watchCheckBox[1] ? 0 : Number(mandat));
	};
	const HandleC = () => {
		setC(watchCheckBox[2] ? 0 : Number(mandat));
	};
	const HandleD = () => {
		setD(watchCheckBox[3] ? 0 : Number(mandat));
	};
	const HandleE = () => {
		setE(watchCheckBox[4] ? 0 : Number(mandat));
	};
	const HandleF = () => {
		setF(watchCheckBox[5] ? 0 : Number(mandat));
	};
	const HandleG = () => {
		setG(watchCheckBox[6] ? 0 : Number(mandat));
	};
	const HandleH = () => {
		setH(watchCheckBox[7] ? 0 : Number(mandat));
	};
	const HandleI = () => {
		setI(watchCheckBox[8] ? 0 : Number(mandat));
	};
	const HandleJ = () => {
		setJ(watchCheckBox[9] ? 0 : Number(mandat));
	};
	const HandleK = () => {
		setK(watchCheckBox[10] ? 0 : Number(mandat));
	};
	const HandleL = () => {
		setL(watchCheckBox[11] ? 0 : Number(mandat));
	};
	const HandleM = () => {
		setM(watchCheckBox[12] ? 0 : Number(mandat));
	};
	const HandleN = () => {
		setN(watchCheckBox[13] ? 0 : Number(mandat));
	};
	const HandleO = () => {
		setO(watchCheckBox[14] ? 0 : Number(mandat));
	};
	const HandleP = () => {
		setP(watchCheckBox[15] ? 0 : Number(mandat));
	};
	const HandleQ = () => {
		setQ(watchCheckBox[16] ? 0 : Number(mandat));
	};
	const HandleR = () => {
		setR(watchCheckBox[17] ? 0 : Number(mandat));
	};
	const HandleS = () => {
		setS(watchCheckBox[18] ? 0 : Number(mandat));
	};
	const HandleT = () => {
		setT(watchCheckBox[19] ? 0 : Number(mandat));
	};
	const HandleU = () => {
		setU(watchCheckBox[20] ? 0 : Number(mandat));
	};
	const HandleV = () => {
		setV(watchCheckBox[21] ? 0 : Number(mandat));
	};
	const HandleW = () => {
		setW(watchCheckBox[22] ? 0 : Number(mandat));
	};
	const HandleX = () => {
		setX(watchCheckBox[23] ? 0 : Number(mandat));
	};
	const HandleY = () => {
		setY(watchCheckBox[24] ? 0 : Number(mandat));
	};

	const voted = resultAdministrative.find(
		({ data: { email, syndicat } }) =>
			email === `${!procurationUsers && currentUser.email}` ||
			syndicat === `${procurationUsers && query}`
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
									Page de Vote
								</h2>
							)}
							<div className="flex justify-between text-base font-medium text-gray-900 uppercase sm:p-6 py-5 px-2">
								<legend className="text-xs sm:text-sm lg:text-lg font-bold text-gray-900">
									Commission Administrative
								</legend>
								<p className="text-xs sm:text-sm lg:text-lg">{`Syndicat ${syndicat}`}</p>
							</div>
							<div className="border-t-2 w-11/12 m-auto"></div>
							<h3 className="text-sm lg:text-lg mb-1 mt-2 sm:ml-6 ml-2 font-bold text-gray-700">
								Parmi ces candidats, pour qui souhaiteriez vous
								voter ? {`${checkedCount}/15`}
							</h3>
							<div className="mt-4 sm:ml-7 grid gap-4 sm:gap-x-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="a"
											{...register('a')}
											type="checkbox"
											onClick={HandleA}
											value={a}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 1
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="b"
											{...register('b')}
											type="checkbox"
											onClick={HandleB}
											value={b}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 2
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="c"
											{...register('c')}
											type="checkbox"
											onClick={HandleC}
											value={c}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 3
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="d"
											{...register('d')}
											type="checkbox"
											onClick={HandleD}
											value={d}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 4
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="e"
											{...register('e')}
											type="checkbox"
											onClick={HandleE}
											value={e}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 5
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="f"
											{...register('f')}
											type="checkbox"
											onClick={HandleF}
											value={f}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 6
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="g"
											{...register('g')}
											type="checkbox"
											onClick={HandleG}
											value={g}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 7
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="h"
											{...register('h')}
											type="checkbox"
											onClick={HandleH}
											value={h}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 8
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="i"
											{...register('i')}
											type="checkbox"
											onClick={HandleI}
											value={i}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 9
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="j"
											{...register('j')}
											type="checkbox"
											onClick={HandleJ}
											value={j}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 10
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="k"
											{...register('k')}
											type="checkbox"
											onClick={HandleK}
											value={k}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 11
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="l"
											{...register('l')}
											type="checkbox"
											onClick={HandleL}
											value={l}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 12
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="m"
											{...register('m')}
											type="checkbox"
											onClick={HandleM}
											value={m}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 13
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="n"
											{...register('n')}
											type="checkbox"
											onClick={HandleN}
											value={n}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 14
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="o"
											{...register('o')}
											type="checkbox"
											onClick={HandleO}
											value={o}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 15
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="p"
											{...register('p')}
											type="checkbox"
											onClick={HandleP}
											value={p}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 16
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="q"
											{...register('q')}
											type="checkbox"
											onClick={HandleQ}
											value={q}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 17
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="r"
											{...register('r')}
											type="checkbox"
											onClick={HandleR}
											value={r}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 18
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="s"
											{...register('s')}
											type="checkbox"
											onClick={HandleS}
											value={s}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 19
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="t"
											{...register('t')}
											type="checkbox"
											onClick={HandleT}
											value={t}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 20
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="u"
											{...register('u')}
											type="checkbox"
											onClick={HandleU}
											value={u}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 21
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="v"
											{...register('v')}
											type="checkbox"
											onClick={HandleV}
											value={v}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 22
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="w"
											{...register('w')}
											type="checkbox"
											onClick={HandleW}
											value={w}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 23
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="x"
											{...register('x')}
											type="checkbox"
											onClick={HandleX}
											value={x}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 24
										</span>
									</div>
								</div>
								<div className="flex items-start m-auto sm:m-0">
									<div className="flex items-center h-5">
										<input
											name="y"
											{...register('y')}
											type="checkbox"
											onClick={HandleY}
											value={y}
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>{' '}
										<span className="ml-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
											OPTION 25
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-around py-5 bg-gray-100 text-right sm:px-6 rounded-md">
							{error && (
								<div className="text-red-600 text-xs sm:text-sm  px-5 pt-2">
									{`${
										checkedCount < 15
											? 'Vous ne pouvez pas choisir moins de 15 candidats'
											: checkedCount > 15
											? 'Vous ne pouvez pas choisir plus de 15 candidats'
											: ''
									} `}
								</div>
							)}
							<button
								disabled={isSubmitting}
								onClick={() => setHasVoted(true)}
								type="submit"
								className={`mr-2 py-2 px-4 border border-transparent shadow-sm text-xs sm:text-sm  uppercase rounded-md text-white transition duration-150 ease-in  ${
									isSubmitting ? 'bg-blue-300' : 'bg-blue-600'
								} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
							>
								Vote
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default CommissionAdministrative2;
