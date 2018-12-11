import React, { Component } from 'react'

import UserRecipes from './userRecipes/UserRecipes'

class UserDashboard extends Component {

	constructor(props){
		super(props)

		this.state = {
			username: ''
		}
	}

	render() {

		return (
			<div className="UserDashboard">
				<h1>{this.state.username}'s Dashboard:</h1>
				<UserRecipes/>
			</div>
		)
	}
}
export default UserDashboard
