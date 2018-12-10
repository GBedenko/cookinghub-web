import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import Recipe from '../recipe/Recipe'
import UserDashboard from '../userDashboard/UserDashboard'
import CreateRecipe from '../createRecipe/CreateRecipe'
import SearchResults from '../searchResults/SearchResults'

class Protected extends Component {

	constructor(props){
		super(props)
	}

	render() {

		if (!this.props.authHeader ) {
			return <Redirect to={'/login'} />
		}
		return(
			<React.Fragment>
				<Route path="/recipe" component={Recipe}/>
				<Route path="/recipes" component={SearchResults}/>
				<Route path="/user" component={UserDashboard}/>
				<Route path="/createRecipe" component={CreateRecipe}/>
			</React.Fragment>
		)
	}
}

export default Protected
