// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeFooter.css'

// Import child components
import RecipeComments from './recipeComments/RecipeComments'
import RecipeAboutAuthor from './recipeAboutAuthor/RecipeAboutAuthor'
import RecipeCommentBox from './recipeCommentBox/RecipeCommentBox'
import RecipeSharingOptions from'./recipeSharingOptions/RecipeSharingOptions'

// RecipeFooter component containing options and other details for a recipe
class RecipeFooter extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipeID: ''
		}

		// Set state of the recipe id as the one passed from parent component
		this.setState({recipeID: this.props.recipeID})
	}

	render() {

		// Component consists of other smaller components to breakdown the UI elements
		return (

			<div className="RecipeFooter">
				<RecipeSharingOptions recipeID={this.state.recipeID}/>
				<RecipeComments/>
				<RecipeCommentBox/>
				<RecipeAboutAuthor recipeID={this.state.recipeID}/>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeFooter
