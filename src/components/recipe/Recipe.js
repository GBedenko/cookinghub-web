// Import React and React Router
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Import module for making requests to backend API
import ApiRequests from '../../modules/api_requests'

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
			recipe: { // Recipe object to be retrieved from backend API
				name: '',
				category: '',
				description: '',
				main_image: '',
				ingredients_list: [],
				preperation_steps_list: [],
				video: ''
			},
			authHeader: '' // Authorisation header saved to this component as it makes HTTP calls to backend API
		}
	}

	// React lifecycle called to check if component should update
	shouldComponentUpdate(nextProps) {

		// If authHeader prop has been passed to the component, need to update
		return nextProps.authHeader.length > 0
	}

	// React lifecycle function to update (used for if prop recieved after component mounts)
	componentDidUpdate() {

		if(this.props.authHeader && this.state.recipe.name.length == 0) {

			// Request backend API for recipe data object for the recipe id being viewed
			ApiRequests.getRecipe(this.props.authHeader, this.state.recipeID)
				.then(({ data }) => {
					const retrievedRecipe = {
						name: data.name,
						category: data.category,
						description: data.description,
						main_image: data.main_image,
						ingredients_list: data.ingredients,
						preperation_steps_list: data.steps,
						video: data.video,
						likes: data.likes,
						dislikes: data.dislikes
					}

					// Once data retrieved, set it to the state of the component's recipe data
					this.setState({
						recipe: retrievedRecipe
					})
				})
		}
	}

	componentDidMount(){

		// Assign the authorization header to this component's state passed from parent
		this.setState({authHeader: this.props.authHeader})
	}

	render() {

		// Recipe component is made up of child components which it passes recipe data to
		return (
			<div className="recipe">
				<RecipeHeader name={this.state.recipe.name} category={this.state.recipe.category} description={this.state.recipe.description} main_image={this.state.recipe.main_image} />
				<RecipeContent ingredients_list={this.state.recipe.ingredients_list} preperation_steps_list={this.state.recipe.preperation_steps_list} video={this.state.recipe.video} />
				<RecipeFooter likes={this.state.recipe.likes} dislikes={this.state.recipe.dislikes} authHeader={this.props.authHeader} recipeID={this.state.recipeID} />
			</div>
		)
	}
}

// Export component so it can be imported
export default withRouter(Recipe)
