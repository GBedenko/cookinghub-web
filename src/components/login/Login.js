import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './Login.css'
import CreateAuthHeader from '../../../modules/create_basic_auth_header'
import axios from 'axios'
import logo from '../../../img/logo-full-rectangle.png'

class Login extends Component {

	constructor(props){
		super(props)

		this.state = {
			loginButtonColor: {backgroundColor: this.props.loginButtonColor},
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
		this.handleLoginClick = this.handleLoginClick.bind(this)
	}

	handleInputChange(event){

		const target = event.target

		const name = target.name
		const value = target.value

		this.setState({
			[name]: value
		})
	}

	handleLoginClick(event){

		//prevent form submission
		event.preventDefault()

		//create new object to assign new error values
		const newErrors = {}

		newErrors.username = this.state.username === '' ? true:false
		newErrors.password = this.state.password === '' ? true:false
		this.setState({errors: newErrors})
		console.log(this.state.username)
		console.log(this.state.password)
		// Create a Basic Auth header based on the username and password entered
		const authHeader = CreateAuthHeader(this.state.username, this.state.password)

		console.log(authHeader)
		// axios validate
		axios({
			method: 'head', //you can set what request you want to be
			url: 'http://localhost:8080/api/v1.0/login',
			headers: {
			  Authorization: authHeader
			}
		}).then((response) => {
			console.log(response)
			this.props.onSuccess(authHeader)
			this.setState({redirect: true})
		})
		.catch((reason) => {
			console.log(reason)
			this.setState({errors: {incorrect: true}})
		})

		// axios.head("http://localhost:8080/api/v1.0/login", { Authorization: authHeader})
			
			
	}

	render() {

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

					<button type="submit" style={this.state.loginButtonColor} onClick={this.handleLoginClick}>Login</button>
				</form>
				<p>Don't have an account? <a href="/register">Create one.</a></p>
			</div>

		)
	}
}
export default Login
