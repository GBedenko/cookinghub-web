// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeFooter.css'

// Import child components
import RecipeComments from './recipeComments/RecipeComments'
import RecipeAboutAuthor from './recipeAboutAuthor/RecipeAboutAuthor'
import RecipeCommentBox from './recipeCommentBox/RecipeCommentBox'
import RecipeSharingOptions from'./recipeSharingOptions/RecipeSharingOptions'

/**
 * @class RecipeFooter component containing options and other details for a recipe
 */
class RecipeFooter extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		this.state = {
			authHeader: ''
		}
	}

	/**
	 * Component consists of other smaller components to breakdown the UI elements
	 */
	render() {

		return (

			<div className="RecipeFooter">
				<RecipeSharingOptions likes={this.props.likes} dislikes={this.props.dislikes} authHeader={this.props.authHeader} recipeID={this.props.recipeID} views={this.props.views} />
				{/* <RecipeComments/> */}
				<RecipeCommentBox />
				<RecipeAboutAuthor />
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeFooter
