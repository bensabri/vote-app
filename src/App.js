import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ConfirmForm from './components/ConfirmForm';

const App = () => {
	return (
		<>
			<Router>
				<AuthProvider>
					<Switch>
						<PrivateRoute exact path="/dashboard">
							<Dashboard />
						</PrivateRoute>
						{/* <Route path="/signup">
							<Signup />
						</Route> */}
						<Route path="/">
							<Login />
						</Route>
						<Route path="/confirm">
							<ConfirmForm />
						</Route>
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
};

export default App;
