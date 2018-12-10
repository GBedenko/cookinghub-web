import ReactDOM from 'react-dom'
import React, { Component } from 'react'
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
import Protected from './components/protected/Protected'

class App extends Component {

	constructor(props){
		super(props)

		this.state = {
			authHeader: ''
		}
		this.onSetAuthHeader = this.onSetAuthHeader.bind(this)
	}

	onSetAuthHeader(authHeader) {
		this.setState({authHeader: authHeader})
	}

	render() {

		return (
			<React.Fragment>
				<Route path="/" component={Header}/>
				<Route path="/" exact component={HomePage}/>
				<Route path="/welcome" component={Welcome}/>
				<Route path="/login" component={Login} render={(props) => <Login onSuccess={this.onSetAuthHeader}/> } />
				<Route path="/register" component={Register}/>
				<Route path="/app" render={(props) => <Protected authHeader={this.state.authHeader}/>} />
			</React.Fragment>
		)
	}
}

export default App
