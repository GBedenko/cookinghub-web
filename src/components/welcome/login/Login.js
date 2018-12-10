import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './Login.css'

class Login extends Component {

	constructor(props){
		super(props)

		this.state = {
			loginButtonColor: {backgroundColor: this.props.loginButtonColor},
			username: '',
			password: '',
			errors: {
				username: false,
				password: false
			}
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

		const header = 'Basic asdfasdf'

		// axios
		// validate

		// if correct
		this.props.onSuccess(header)

		return <Redirect to={'/app/user'}/>
	}

	render() {

		return (

			<div className="loginForm">

				<h1>Login to an Existing Account:</h1>
				<form>
					<label htmlFor="username"><b>Username</b></label>
					<input type="text" placeholder="Enter Username" name="username" onChange={this.handleInputChange} value={this.state.username} />
					{this.state.errors.username ? <div className="error">Username is required</div>: null}

					<label htmlFor="txtPassword" ><b>Password</b></label>
					<input type="password" placeholder="Enter Password" name="txtPassword" onChange={this.handleInputChange} value={this.state.password} />
					{this.state.errors.password ? <div className="error">password is required</div>: null}

					<button type="submit" style={this.state.loginButtonColor} onClick={this.handleLoginClick}>Login</button>
				</form>
			</div>

		)
	}
}
export default Login
