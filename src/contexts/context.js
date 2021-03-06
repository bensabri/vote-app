import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [resultControle, setResultControle] = useState([]);
	const [resultAdministrative, setResultAdministrative] = useState([]);
	const [resultBureau, setResultBureau] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const [procurationUsers, setProcurationUsers] = useState(false); // defini si la personne connecté a une procuration
	const [syndicatList, setSyndicatList] = useState([]); // Liste d'email mandaté pour la procuration
	const [query, setQuery] = useState('');
	const [superProcuration, setSuperProcuration] = useState(false);
	const [step, setStep] = useState(0);
	const [voting, setVoting] = useState(false);

	return (
		<AppContext.Provider
			value={{
				users,
				setUsers,
				loading,
				setLoading,
				isFetching,
				setIsFetching,
				resultControle,
				setResultControle,
				procurationUsers,
				setProcurationUsers,
				syndicatList,
				setSyndicatList,
				query,
				setQuery,
				resultAdministrative,
				setResultAdministrative,
				resultBureau,
				setResultBureau,
				step,
				setStep,
				voting,
				setVoting,
				superProcuration,
				setSuperProcuration,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
