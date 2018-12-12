import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import HomePage from './components/homePage/HomePage'
import Recipe from './components/recipe/Recipe'
import UserDashboard from './components/userDashboard/UserDashboard'
import CreateRecipe from './components/createRecipe/CreateRecipe'
import SearchResults from './components/searchResults/SearchResults'
import Header from './components/header/Header'

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
