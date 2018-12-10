import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import Login from './components/welcome/login/Login'
import Register from './components/welcome/register/Register'
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

	onSetAuthHeader(newAuthHeader) {
		this.setState({authHeader: newAuthHeader})
	}

	render() {

		return (
			<React.Fragment>
				<Route path="/" render={(props) => <Welcome authHeader={this.state.authHeader}/> } />
				<Route path="/login" render={(props) => <Login onSuccess={this.onSetAuthHeader}/> } />
				<Route path="/register" render={(props) => <Register onSuccess={this.onSetAuthHeader}/> } />
				<Route path="/app" render={(props) => <Protected authHeader={this.state.authHeader}/>} />
			</React.Fragment>
		)
	}
}

export default App
