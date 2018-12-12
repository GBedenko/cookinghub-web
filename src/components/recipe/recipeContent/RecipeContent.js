// Import React
import React, { Component } from 'react'

// Import module for making requests to backend API
import ApiRequests from '../../../modules/api_requests'

// Import CSS
import './RecipeContent.css'

// Import child components
import Ingredients from './ingredients/Ingredients'
import PreperationSteps from './preperationsSteps/PreperationSteps'
import RecipeVideo from './recipeVideo/RecipeVideo'
import RecipeSoundFile from './recipeSoundFile/RecipeSoundFile'

// RecipeContent contains the main body of a recipe including the ingredients and steps
class RecipeContent extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			// Save state of recipe data that is shown in the RecipeContent
			ingredients: [],
			steps: [],
			video: ''
		}
	}

	componentDidMount(){

		// Request backend API for recipe data object for the recipe id being viewed
		ApiRequests.getRecipe(this.props.authHeader, this.props.recipeID)
					.then(({ data }) => {
						// Once data retrieved, set it to the state of the component's recipe data
						this.setState({
							ingredients: data.ingredients,
							steps: data.steps,
							video: data.video
						})				
					})
					.catch((reason) => {						
						console.log(reason)
					})
	}

	render() {

		// RecipeContent consists of smaller components to break down the UI structure
		return (
			<div className="recipeContent">
				<Ingredients ingredients_list={this.state.ingredients}/>
				<PreperationSteps preperation_steps_list={this.state.steps}/>
				<RecipeVideo video={this.state.video}/>
				<RecipeSoundFile/>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeContent
