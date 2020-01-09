import * as React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details';

const App: React.FC<AppProps> = () => {
	return(
		<BrowserRouter>
		<Switch>
			<Route exact path = '/' component={Home} />
			<Route exact path = '/details/:id' component={Details} />
		</Switch>
		</BrowserRouter>
	)
}

interface AppProps {}

export default App
