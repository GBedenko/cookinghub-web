import React, { Component } from 'react'
import './Welcome.css'

import Login from './login/Login'
import Register from './register/Register'

class Welcome extends Component {

	constructor(props){
		super(props)

		this.state = {
		}

	}

	render() {

		return (

			<div className="Welcome">
				<div className="row">
					<div className="LoginForm">
						<Login />
					</div>
					<div className="RegisterForm">
						<Register />
					</div>
				</div>
			</div>
		)
	}
}
export default Welcome
