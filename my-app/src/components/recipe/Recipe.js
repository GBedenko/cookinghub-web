import React, { Component } from 'react'
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

import cooking_logo from './img/recipe_logo.png'

class Recipe extends Component {

	constructor(props){
		super(props)

		// Save the recipe_id from the url endpoint /recipe/:recipe_id the user is on
		const recipe_id_from_url = this.props.location.pathname.match(/\/([0-9a-fA-F]+)/g)[0].substr(1)

		this.state = {
			recipe_id: recipe_id_from_url
		}
	}

	render() {

		return (
			<div className="recipe">
				<RecipeHeader recipe_image={cooking_logo} recipe_id={this.state.recipe_id}/>
				<RecipeContent recipe_id={this.state.recipe_id}/>
				<RecipeFooter recipe_id={this.state.recipe_id}/>
			</div>
		)
	}
}
export default Recipe
