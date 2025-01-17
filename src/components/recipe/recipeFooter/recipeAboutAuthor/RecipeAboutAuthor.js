// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeAboutAuthor.css'

/**
 * @class To show the author of the recipe and their user details
 */
class RecipeAboutAuthor extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	/**
	 * UI components showing author of the recipe and their user details
	 */
	render() {

		return (

			<div className="RecipeAboutAuthor">
				{/* <h3>About this Recipe's Author:</h3>
				<p>Username</p> */}
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeAboutAuthor
