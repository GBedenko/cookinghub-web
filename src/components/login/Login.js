// Import React and React Router
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// Import CSS
import './Login.css'

// Import function from module to create a Basic Authentication Header
import CreateAuthHeader from '../../modules/create_basic_auth_header'

// Import module for making requests to backend API
import ApiRequests from '../../modules/api_requests'

// Import logo image from img directory
import logo from '../../img/logo-full-rectangle.png'

/**
 * @class Login component using Basic Authentication to force users to require a login to access the application
 */
class Login extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {

			// State of login field forms and any errors from incorrect inputs
			username: '',
			password: '',
			// State of any potential errors from the login inputs
			errors: {
				username: false,
				password: false,
				incorrect: false
			},
			redirect: false // Redirect state changed when user successfully logs in
		}

		// Ensures the functions in this component understand the 'this' keyword refers to the component functions
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleLoginClick = this.handleLoginClick.bind(this)
	}

	/**
	 * Handles change of an input field
	 * @param {*} event Event from component to call this method 
	 */
	handleInputChange(event){

		// Find the field target for the event
		const target = event.target

		// Retrieve the name of the field for this input field
		const name = target.name

		// Retrieve the value from the target
		const value = target.value

		// Set state for whichever attribute's input field was used with the new value
		this.setState({
			[name]: value
		})
	}

	/**
	 * Handles behaviour when submitting login details
	 * @param {*} event Event from component to call this method 
	 */
	handleLoginClick(event){

		// Prevent default html submit button logic
		event.preventDefault()

		// Errors object to assign any error values when checking the form details
		const newErrors = {}

		// If trying to login but username/password are empty strings then new errors object state is true
		newErrors.username = this.state.username === '' ? true:false
		newErrors.password = this.state.password === '' ? true:false

		// Set the component's errors state to the newly created errors object
		this.setState({errors: newErrors})

		// Create a Basic Auth header based on the username and password entered
		const authHeader = CreateAuthHeader(this.state.username, this.state.password)

		// Call backend API to authenticate the user credentials using the created authentication header
		ApiRequests.login(authHeader)
			.then((response) => {
				// If login successful, set application auth header for the user state (function sent from App component)
				this.props.onSuccess(authHeader)
				this.setState({redirect: true}) // Set redirect true to navigate the user to within the application
			})
			.catch((reason) => {
				// If login unsuccessful, set state of errors object to show the login details were invalid
				this.setState({errors: {incorrect: true}})
			})
	}

	/**
	 * Form with logo to prompt for login details or go to register screen if user doesn't have an account
	 */
	render() {

		// If redirect flag is true, next run of render will redirect to home as the user logged in successfully
		if(this.state.redirect) return <Redirect to={'/app/home'}/>

		return (
			
			<div className="loginForm">

				<img src={logo}/>

				<h1 className="text-center">Login:</h1>
				<form>
					<label htmlFor="username"><b>Username</b></label>
					<input type="text" placeholder="Enter Username" name="username" onChange={this.handleInputChange} value={this.state.username} />
					{this.state.errors.username ? <div className="error">Username is required</div>: null}

					<label htmlFor="txtPassword" ><b>Password</b></label>
					<input type="password" placeholder="Enter Password" name="password" onChange={this.handleInputChange} value={this.state.password} />
					{this.state.errors.password ? <div className="error">password is required</div>: null}

					{this.state.errors.incorrect ? <div className="error">Login details were incorrect. Please check username and password</div>: null}

					<button type="submit" onClick={this.handleLoginClick}>Login</button>
				</form>

				<p>Don't have an account? <a href="/register">Create one.</a></p>

			</div>
		)
	}
}

// Export component so it can be imported
export default Login
