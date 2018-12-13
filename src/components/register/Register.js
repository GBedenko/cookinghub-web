// Import React and React Router
import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'

// Import CSS
import './Register.css'

// Import function from module to create a Basic Authentication Header
import CreateAuthHeader from '../../modules/create_basic_auth_header'

// Import module for making requests to backend API
import ApiRequests from '../../modules/api_requests'

// Import other modules this component uses
import bcrypt from 'bcryptjs'

// Import logo image from img directory
import logo from '../../img/logo-full-rectangle.png'

// Register component to force users to require an account, creates a new user in backend API
class Register extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {

			// State of new user object being created using register input fields
			user: {
				full_name: '',
				username: '',
				password: '',
				role: 'viewer' // Default permissions of a user
			},
			// State of any potential errors from the register account inputs
			errors: {
				username: false,
				password: false,
				incorrect: false
			},
			redirect: false // Redirect state changed when user successfully creates a new account
		}

		// Ensures the functions in this component understand the 'this' keyword refers to the component functions
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleRegisterClick = this.handleRegisterClick.bind(this)
	}

	// Handles change of an input field
	handleInputChange(event){

		// Find the field target for the event
		const target = event.target

		// Retrieve the name of the field for this input field
		const name = target.name

		// Retrieve the value from the target
		const value = target.value

		// From the component state, set a new object as just the user object from the state to include the new value
		const newUser = Object.assign({}, this.state.user, {[name]: value})

		// Set the state of user object to the updated version
		this.setState({
			user: newUser
		})
	}

	handleRegisterClick(event){

		// Prevent default html submit button logic
		event.preventDefault()

		// Errors object to assign any error values when checking the form details
		const newErrors = {}

		// If trying to register but username/password are empty strings then new errors object state is true
		newErrors.username = this.state.username === '' ? true:false
		newErrors.password = this.state.password === '' ? true:false

		// Set the component's errors state to the newly created errors object
		this.setState({errors: newErrors})

		// Create a Basic Auth header based on the username and password entered
		const authHeader = CreateAuthHeader(this.state.user.username, this.state.user.password)

		// Define salt for hashing password
		const salt = 10

		// Hash the password using bcrypt
		const passwordHash = bcrypt.hashSync(this.state.user.password, salt)

		// Assign the password attribute to now be the hashed version instead of plaintext
		const newUser = Object.assign({}, this.state.user, {password: passwordHash})

		// Call backend API to create a new user based on the user credentials entered
		ApiRequests.addUser(authHeader, newUser)
			.then((response) => {
				// If create user successful, set application auth header for the user state (function sent from App component)
				this.props.onSuccess(authHeader)
				this.setState({redirect: true}) // Set redirect true to navigate the user to within the application
			})
			.catch((reason) => {
				// If create new user unsuccessful, set state of errors object to show the details were invalid and the user should check them
				this.setState({errors: {incorrect: true}})
			})
	}

	render() {

		// If redirect flag is true, next run of render will redirect to home as the user created account successfully
		if(this.state.redirect) return <Redirect to={'/app/home'}/>

		return (

			// Form with logo to prompt for new user details or go back to login screen if user doesn't need to create a new account
			<div className="registerForm">

				<img src={logo}/>

				<h1 className="text-center">Register:</h1>
				<form>
					<label htmlFor="full_name"><b>Full Name</b></label>
					<input type="text" placeholder="Enter Name" name="full_name" onChange={this.handleInputChange} value={this.state.user.full_name} />

					<label htmlFor="username"><b>Username</b></label>
					<input type="text" placeholder="Enter Username" name="username" onChange={this.handleInputChange} value={this.state.user.username} />
					{this.state.errors.username ? <div className="error">Username is required</div>: null}

					<label htmlFor="password" ><b>Password</b></label>
					<input type="password" placeholder="Enter Password" name="password" onChange={this.handleInputChange} value={this.state.user.password} />
					{this.state.errors.password ? <div className="error">password is required</div>: null}


					<label htmlFor="role" ><b>Account Type</b></label><br/>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" name="role" onChange={this.handleInputChange} id="permissions1" value="viewer" checked/>
						<label class="form-check-label" for="permissions1">I want to view recipes only</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" name="role" onChange={this.handleInputChange} id="permissions2" value="creator"/>
						<label class="form-check-label" for="permissions2">I want to create and view recipes</label>
					</div>

					{this.state.errors.incorrect ? <div className="error">Details were incorrect</div>: null}

					<button type="submit" onClick={this.handleRegisterClick}>Register</button>
				</form>

				<p>Already have an account? <a href="/">Login.</a></p>

			</div>
		)
	}
}

// Export component so it can be imported
export default Register
