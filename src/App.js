// Import React and React Router
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Import components which anyone can access
import Login from './components/login/Login'
import Register from './components/register/Register'

// Import Protected component, which has sub-components that can only be accessed once user is authenticated
import Protected from './Protected'

/**
 * @class App is the top level React component called by index
 */
class App extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			// Authorization Header stored to App component so that all sub-components have access to it once set
			// after the user has logged in or created an account
			authHeader: ''
		}

		// Ensures the functions in this component understand the 'this' keyword refers to the component functions
		this.onSetAuthHeader = this.onSetAuthHeader.bind(this)
	}

	/**
	 * Function which is passed to login/register components so that they can set the authorization header across the whole application
	 * @param {*} newAuthHeader Basic authorization header string to be saved in the application's state
	 */
	onSetAuthHeader(newAuthHeader) {
		this.setState({authHeader: newAuthHeader})
	}

	/**
	 * App uses React Router, setting Login and Register components to public routes
	 * Sets everything else with an /app endpoint using the Protected component
	 * because every other page requires the user to be logged in
	 */
	render() {

		return (
			<React.Fragment>
				{/* Function to set the authHeader passed to Login and Register pages */}
				<Route exact path="/" render={() => <Login onSuccess={this.onSetAuthHeader}/> } />
				<Route path="/register" render={() => <Register onSuccess={this.onSetAuthHeader}/> } />

				{/* State of the authHeader is passed to all other UI components in the application */}
				<Route path="/app" render={() => <Protected authHeader={this.state.authHeader}/>} />
			</React.Fragment>
		)
	}
}

// Export App so it can be called by index
export default App
