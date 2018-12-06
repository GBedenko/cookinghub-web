import React, { Component } from 'react'
import './RecipeSoundFile.css'

class RecipeSoundFile extends Component {

	constructor(props){
		super(props)

		this.state = {
		}

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
export default RecipeSoundFile
