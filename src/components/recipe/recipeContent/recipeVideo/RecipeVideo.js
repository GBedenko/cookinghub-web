// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeVideo.css'

// Component to display an embedded video for the recipe
class RecipeVideo extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	render() {

		return (

			// JSX for displaying an embedded video using the video link passed from parent
			<div className="RecipeVideo">
				<h3>Step by Step Video:</h3>
				<div className="EmbeddedVideo">
					<iframe width="640" height="480" src={this.props.video} controls></iframe>
				</div>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeVideo
