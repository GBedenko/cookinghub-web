// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeSoundFile.css'

// Displays an audio track widget if the recipe has an audio file
class RecipeSoundFile extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	render() {

		return (

			<div className="RecipeSoundFile">
				<h3>Step by Step Audio Instructions:</h3>
				<div className="EmbeddedSoundFile">
					<audio controls></audio>
				</div>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeSoundFile
