// Import React and React Router
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Import child components
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

// Recipe component containing child components for different sections of how a recipe is displayed
class Recipe extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// Save the recipe id from the url endpoint /recipe/:recipe_id the user is on
		const recipeIdFromURL = this.props.match.params.id

		// State variables for this component
		this.state = {
			recipeID: recipeIdFromURL, // ID of the current recipe being viewed
			recipe: {}, // Recipe object to be retrieved from backend API
			authHeader: '' // Authorisation header saved to this component as it makes HTTP calls to backend API
		}
	}
	
	componentDidMount(){		
		// Set the authorization header state to the one passed from parent
		this.setState({authHeader: this.props.authHeader})
	}

	render() {

		// Recipe component is made up of child components which it passes recipe data to
		return (
			<div className="recipe">
				<RecipeHeader recipeID={this.state.recipeID}/>
				<RecipeContent recipeID={this.state.recipeID}/>
				<RecipeFooter recipeID={this.state.recipeID}/>
			</div>
		)
	}
}

// Export component so it can be imported
export default withRouter(Recipe)
