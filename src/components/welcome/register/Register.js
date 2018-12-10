import React, { Component } from 'react'
import './Register.css'

class Register extends Component {

	constructor(props){
		super(props)

		this.state = {
			registerButtonColor: {backgroundColor: this.props.registerButtonColor},
			username: '',
			password: '',
			errors: {
				username: false,
				password: false
			}
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
	}

	render() {

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

					<button type="submit" style={this.state.registerButtonColor} onClick={this.handleRegisterClick}>Register</button>
				</form>
			</div>

		)
	}
}
export default Register
