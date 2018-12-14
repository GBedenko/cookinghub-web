// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeCommentBox.css'

/**
 * @class Component to add a comment to a recipe
 */
class RecipeCommentBox extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	/**
	 * Component to add a comment to a recipe
	 */
	render() {

		return (

			<div className="RecipeCommentBox">
				<h4>Comment on this Recipe:</h4>
				<textarea rows="4" cols="100" name="comment" form="usrform">Add a comment...</textarea>
				<br/>
				<button>Submit</button>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeCommentBox
