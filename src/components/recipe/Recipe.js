// Import React and React Router
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Import child components
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

// Import other modules this component uses
import axios from 'axios'

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
			recipe: {} // Recipe object to be retrieved from backend API
		}
	}
	
	componentDidMount(){
		
		// Request backend API for the data related to the recipe the user is wanting to view
		axios.get('http://localhost:8080/api/v1.0/recipes/' + this.state.recipeID)
			.then(({ data }) => {
				// Once data retrieved, set it to the state of the component's recipe data
				this.setState({
					recipe: data
				})
				
			})	
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
