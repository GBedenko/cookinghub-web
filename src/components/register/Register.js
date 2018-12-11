import React, { Component } from 'react'
import './Register.css'
import CreateAuthHeader from '../../modules/create_basic_auth_header'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import logo from '../../img/logo-full-rectangle.png'

class Register extends Component {

	constructor(props){
		super(props)

		this.state = {
			registerButtonColor: {backgroundColor: this.props.registerButtonColor},
			user: {
				full_name: '',
				username: '',
				password: ''
			},			
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

		let newUser = Object.assign({}, this.state.user, {[name]: value})
		
		this.setState({
			user: newUser
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
		const authHeader = CreateAuthHeader(this.state.username, this.state.password)
		
		// Define salt for hashing password
		const salt = 10

		// Hash the password using bcrypt
		const passwordHash = bcrypt.hashSync(this.state.user.password, salt)

		let newUser = Object.assign({}, this.state.user, {password: passwordHash})
		console.log(this.state.user)
		console.log(newUser)
		axios.post('http://localhost:8080/api/v1.0/users', newUser)
			.then((response) => {
				this.props.onSuccess(authHeader)
				this.setState({redirect: true})
			})
			.catch((reason) => this.setState({errors: {incorrect: true}}))

	}

	render() {

		if(this.state.redirect) return <Redirect to={'/app/home'}/>	

		return (

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

					{this.state.errors.incorrect ? <div className="error">Details were incorrect</div>: null}

					<button type="submit" style={this.state.registerButtonColor} onClick={this.handleRegisterClick}>Register</button>
				</form>
				<p>Already have an account? <a href="/">Login.</a></p>
			</div>

		)
	}
}
export default Register
