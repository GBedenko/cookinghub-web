import React, { Component } from 'react'
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

class Recipe extends Component {

	constructor(props){
		super(props)

		// Save the recipe id from the url endpoint /recipe/:recipe_id the user is on
		const recipeIdFromURL = this.props.location.pathname.match(/\/([0-9a-fA-F]+)/g)[0].substr(1)

		this.state = {
			recipeID: recipeIdFromURL
		}
	}

	render() {

		return (
			<div className="recipe">
				<RecipeHeader recipeID={this.state.recipeID}/>
				<RecipeContent recipeID={this.state.recipeID}/>
				<RecipeFooter recipeID={this.state.recipeID}/>
			</div>
		)
	}
}
export default Recipe
