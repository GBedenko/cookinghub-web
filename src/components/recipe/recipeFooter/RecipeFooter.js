import React, { Component } from 'react'
import './RecipeFooter.css'

import RecipeComments from './recipeComments/RecipeComments'
import RecipeAboutAuthor from './recipeAboutAuthor/RecipeAboutAuthor'
import RecipeCommentBox from './recipeCommentBox/RecipeCommentBox'
import RecipeSharingOptions from'./recipeSharingOptions/RecipeSharingOptions'

class RecipeFooter extends Component {

	constructor(props){
		super(props)

		this.state = {
			recipeID: ''
		}

		this.setState({recipeID: this.props.recipeID})
	}

	render() {

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
export default RecipeFooter
