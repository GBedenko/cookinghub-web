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
				<div className="row m-0 p-0">
					<div className="LoginForm col-6" >
						<Login />
					</div>
					<div className="RegisterForm col-6">
						<Register />
					</div>
				</div>
			</div>
		)
	}
}
export default Welcome
