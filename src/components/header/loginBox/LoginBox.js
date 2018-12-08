import React, { Component } from 'react'

class LoginBox extends Component {

	constructor(props){
		super(props)
		this.state = {
		}
	}

	render() {

		return (
			<div className="LoginBox">
				<h4>Login</h4>
				<form action="">
					<input type="text" placeholder="Username" name="username" />
					<input type="text" placeholder="Password" name="password" />
					<button type="submit">Login</button>
				</form>
				<h4>Login via social media:</h4>
				<form action="">
					<ul>
						<li>Facebook</li>
						<li>Google</li>
						<li>Twitter</li>
						<li>Instagram</li>
					</ul>
				</form>
			</div>
		)
	}
}
export default LoginBox
