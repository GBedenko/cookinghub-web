import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import HomePage from '../homePage/HomePage'
import Recipe from '../recipe/Recipe'
import UserDashboard from '../userDashboard/UserDashboard'
import CreateRecipe from '../createRecipe/CreateRecipe'
import SearchResults from '../searchResults/SearchResults'
import Header from '../header/Header'

class Protected extends Component {

	constructor(props){
		super(props)
		this.state = {
			authHeader: ''
		}
		this.setState({authHeader: this.props.authHeader})
	}

	render() {

		if (!this.props.authHeader ) {
			return <Redirect to={'/login'} />
		}
		return(
			<React.Fragment>
				<Route path="/" component={Header}/>
				<Route path="/app/home" render={(props) => <HomePage authHeader={this.state.authHeader}/> } />
				<Route path="/app/recipe" render={(props) => <Recipe authHeader={this.state.authHeader}/> } />
				<Route path="/app/recipes" render={(props) => <SearchResults authHeader={this.state.authHeader}/> } />
				<Route path="/app/user" render={(props) => <UserDashboard authHeader={this.state.authHeader}/> } />
				<Route path="/app/createRecipe" render={(props) => <CreateRecipe authHeader={this.state.authHeader}/> } />
			</React.Fragment>
		)
	}
}

export default Protected
