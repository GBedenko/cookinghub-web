import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import Login from './components/login/Login'
import Register from './components/register/Register'
import Protected from './Protected'

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
				<Route exact path="/" render={(props) => <Login onSuccess={this.onSetAuthHeader}/> } />
				<Route path="/register" render={(props) => <Register onSuccess={this.onSetAuthHeader}/> } />
				<Route path="/app" render={(props) => <Protected authHeader={this.state.authHeader}/>} />
			</React.Fragment>
		)
	}
}

export default App
