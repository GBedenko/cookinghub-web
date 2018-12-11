import React, { Component } from 'react'

import UserFavouriteRecipes from './userFavouriteRecipes/UserFavouriteRecipes'
import UserNotifications from './userNotifications/UserNotifications'
import UserRecipes from './userRecipes/UserRecipes'
import UserCustomList from './userCustomLists/UserCustomList'


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
