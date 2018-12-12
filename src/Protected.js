// Import React and React Router
import React, { Component } from 'react'
import { Route, Redirect} from 'react-router-dom'

// Import child components which all require the user to be logged in
import HomePage from './components/homePage/HomePage'
import Recipe from './components/recipe/Recipe'
import UserDashboard from './components/userDashboard/UserDashboard'
import CreateRecipe from './components/createRecipe/CreateRecipe'
import SearchResults from './components/searchResults/SearchResults'
import Header from './components/header/Header'

// Defines React Router routes for access to components which require user logged in
// Every sub-component will check that the authHeader is present in this component's state
// If not then it logs the user out and won't allow them to access any components/pages here
class Protected extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			authHeader: '' // Authorization header after user logs in/creates account is store here for all sub-components to access
		}
		
		// Assign the authorization header to this component's state passed from parent
		this.setState({authHeader: this.props.authHeader})
	}

	render() {

		if (!this.props.authHeader ) {
			return <Redirect to={'/'} />
		}
		return(
			<React.Fragment>
				<Route path="/" component={Header}/>
				<Route exact path="/app/home" render={(props) => <HomePage /> } />
				<Route exact path="/app/recipe/:id" render={(props) => <Recipe /> } />
				<Route exact path="/app/recipes" render={(props) => <SearchResults /> } />
				<Route exact path="/app/user" render={(props) => <UserDashboard /> } />
				<Route exact path="/app/create-recipe" render={(props) => <CreateRecipe /> } />
			</React.Fragment>
		)
	}
}

export default Protected
