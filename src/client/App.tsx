import * as React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details';
import Edit from './pages/Edit';
import Add from './pages/Add';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC<AppProps> = () => {
	return(
		<BrowserRouter>
		<Switch>
			<Route exact path = '/' component={Home} />
			<Route exact path = '/details/:id' component={Details} />
			<Route exact path= '/edit/:id' component={Edit} />
			<Route exact path='/add' component={Add} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/register' component={Register} />

		</Switch>
		</BrowserRouter>
	)
}

interface AppProps {}

export default App
