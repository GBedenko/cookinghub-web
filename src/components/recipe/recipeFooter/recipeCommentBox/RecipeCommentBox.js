// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeCommentBox.css'

// Component to add a comment to a recipe
class RecipeCommentBox extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	render() {

		return (

			<div className="RecipeCommentBox">
				<h4>Comment on this Recipe:</h4>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeCommentBox
