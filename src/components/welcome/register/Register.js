import React, { Component } from 'react'
import './Register.css'
import BasicAuth from '../../../modules/BasicAuth'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class Register extends Component {

	constructor(props){
		super(props)

		this.state = {
			registerButtonColor: {backgroundColor: this.props.registerButtonColor},
			username: '',
			password: '',
			errors: {
				username: false,
				password: false,
				incorrect: false
			},
			redirect: false
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleRegisterClick = this.handleRegisterClick.bind(this)
	}

	handleInputChange(event){

		const target = event.target

		const name = target.name
		const value = target.value

		this.setState({
			[name]: value
		})
	}

	handleRegisterClick(event){

		//prevent form submission
		event.preventDefault()

		//create new object to assign new error values
		const newErrors = {}

		newErrors.username = this.state.username === '' ? true:false
		newErrors.password = this.state.password === '' ? true:false
		this.setState({errors: newErrors})

		// Create a Basic Auth header based on the username and password entered
		const authHeader = BasicAuth(this.state.username, this.state.password)
		
		// Define salt for hashing password
		const salt = 10

		// Hash the password using bcrypt
		const passwordHash = bcrypt.hashSync(this.state.password, salt)

		axios.post('http://localhost:8080/api/v1.0/users', {username: this.state.username, passwordHash: passwordHash})
			.then((response) => {
				this.props.onSuccess(authHeader)
				console.log("got here")
				this.setState({redirect: true})
			})
			.catch((reason) => this.setState({errors: {incorrect: true}}))

	}

	render() {

		if(this.state.redirect) return <Redirect to={'/app/all_recipes'}/>	

		return (

			<div className="registerForm">

				<h1>Create a New Account:</h1>
				<form>
					<label htmlFor="username"><b>Username</b></label>
					<input type="text" placeholder="Enter Username" name="username" onChange={this.handleInputChange} value={this.state.username} />
					{this.state.errors.username ? <div className="error">Username is required</div>: null}

					<label htmlFor="password" ><b>Password</b></label>
					<input type="password" placeholder="Enter Password" name="password" onChange={this.handleInputChange} value={this.state.password} />
					{this.state.errors.password ? <div className="error">password is required</div>: null}

					{this.state.errors.incorrect ? <div className="error">Details were incorrect</div>: null}

					<button type="submit" style={this.state.registerButtonColor} onClick={this.handleRegisterClick}>Register</button>
				</form>
			</div>

		)
	}
}
export default Register
