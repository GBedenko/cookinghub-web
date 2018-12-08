import React, { Component } from 'react'
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

import cookingLogo from './img/recipe_logo.png'

class Recipe extends Component {

	constructor(props){
		super(props)

		// Save the recipe id from the url endpoint /recipe/:recipe_id the user is on
		const recipeIdFromURL = this.props.location.pathname.match(/\/([0-9a-fA-F]+)/g)[0].substr(1)

		this.state = {
			recipe_id: recipeIdFromURL
		}
	}

	render() {

		return (
			<div className="recipe">
				<RecipeHeader recipeImage={cookingLogo} recipeID={this.state.recipeID}/>
				<RecipeContent recipeID={this.state.recipe_id}/>
				<RecipeFooter recipeID={this.state.recipe_id}/>
			</div>
		)
	}
}
export default Recipe
