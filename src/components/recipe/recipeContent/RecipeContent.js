// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeContent.css'

// Import child components
import Ingredients from './ingredients/Ingredients'
import PreperationSteps from './preperationsSteps/PreperationSteps'
import RecipeVideo from './recipeVideo/RecipeVideo'
import RecipeSoundFile from './recipeSoundFile/RecipeSoundFile'

/**
 * @class RecipeContent contains the main body of a recipe including the ingredients and steps
 */
class RecipeContent extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	/**
	 * RecipeContent consists of smaller components to break down the UI structure
	 */
	render() {

		return (
			<div className="recipeContent">
				<Ingredients ingredients_list={this.props.ingredients_list}/>
				<PreperationSteps preperation_steps_list={this.props.preperation_steps_list}/>
				{this.props.video && <RecipeVideo video={this.props.video}/>}
				{/* <RecipeSoundFile/> */}
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeContent
