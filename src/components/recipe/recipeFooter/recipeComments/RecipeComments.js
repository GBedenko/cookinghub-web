// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeComments.css'

// RecipeComments component for listing all comments for the recipe retrieved from backend API
class RecipeComments extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	render() {

		return (
			// List of the comments and option to reply to a comment
			<div className="RecipeComments">
				<p>Comment 1...</p><a href="#">Reply to this comment</a>
				{/* <p>Comment 2...</p><a href="#">Reply to this comment</a>
				<p>Comment 3...</p><a href="#">Reply to this comment</a>
				<p>Comment 4...</p><a href="#">Reply to this comment</a>
				<p>Comment 5...</p><a href="#">Reply to this comment</a> */}
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeComments
