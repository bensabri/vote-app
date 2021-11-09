import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ConfirmForm from './components/ConfirmForm';
import AllResults from './results/AllResults';

const App = () => {
	return (
		<>
			<Router>
				<AuthProvider>
					<Switch>
						<Route exact path='/'>
							<Login />
						</Route>
						<PrivateRoute path='/home'>
							<Dashboard />
						</PrivateRoute>
						{/* <Route path="/signup">
							<Signup />
						</Route> */}
						<Route path='/confirm'>
							<ConfirmForm />
						</Route>
						<Route path='/resultats'>
							<AllResults />
						</Route>
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
};

export default App;
