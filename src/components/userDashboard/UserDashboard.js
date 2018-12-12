// Import React
import React, { Component } from 'react'

// Import child components
import UserRecipes from './userRecipes/UserRecipes'

// UserDashboard allows to view all of a user's recipes and manage their status on the application
class UserDashboard extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			username: '' // The username of who is currently logged in to the application
		}
	}

	render() {

		// Displays the UserRecipes sub-component for the user to manage
		return (
			<div className="UserDashboard">
				<h1>{this.state.username}'s Dashboard:</h1>
				<UserRecipes/>
			</div>
		)
	}
}

// Export component so it can be imported
export default UserDashboard
