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
	const [resultsAccess, setResultsAccess] = useState(false); // autoriser l'accès au résultat pour un email pret definit

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
				resultsAccess,
				setResultsAccess,
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
