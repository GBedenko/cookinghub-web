import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/header/Header'
import HomePage from './components/homePage/HomePage'
import Recipe from './components/recipe/Recipe'
import UserDashboard from './components/userDashboard/UserDashboard'
import Login from './components/welcome/login/Login'
import Register from './components/welcome/register/Register'
import CreateRecipe from './components/createRecipe/CreateRecipe'
import SearchResults from './components/searchResults/SearchResults'
import Welcome from './components/welcome/Welcome'


ReactDOM.render(<Router>
	<React.Fragment>
		<head>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
		</head>
		<Route path="/" component={Header}/>
		<Route path="/" exact component={HomePage}/>
		<Route path="/welcome" component={Welcome}/>
		<Route path="/recipe" component={Recipe}/>
		<Route path="/recipes" component={SearchResults}/>
		<Route path="/user" component={UserDashboard}/>
		<Route path="/login" component={Login}/>
		<Route path="/register" component={Register}/>
		<Route path="/createRecipe" component={CreateRecipe}/>
	</React.Fragment>
</Router>, document.getElementById('root'))

serviceWorker.unregister()
