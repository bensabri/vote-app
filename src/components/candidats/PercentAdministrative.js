import { useGlobalContext } from '../../contexts/context';

const PercentAdministrative = () => {
	const { resultAdministrative } = useGlobalContext();
	console.log(resultAdministrative);
};
export default PercentAdministrative;
