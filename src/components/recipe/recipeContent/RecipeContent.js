// Import React
import React, { Component } from 'react'

// Import other modules this component uses
import axios from 'axios'

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

		// Request backend API for recipe data for the recipe being viewed
		axios.get('http://localhost:8080/api/v1.0/recipes/' + this.props.recipeID)
			.then(({ data }) => {
				this.setState({
					// Sets values from returned data only for values relevant to this component
					ingredients: data.ingredients,
					steps: data.steps,
					video: data.video})
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
