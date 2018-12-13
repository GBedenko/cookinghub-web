// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeHeader.css'

// RecipeHeader component containing summary of the recipe details
class RecipeHeader extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	render() {

		// Recipe header component displays name, image, category and description of the recipe
		return (
			<div className="RecipeHeader">
				<div className="RecipeInfo">
					<h1>{this.props.name}</h1>
					<h2>Category: {this.props.category}</h2>
				</div>
				<div className="RecipeImage">
					<div className="recipe-main-image-container">
						<img src={this.props.main_image} style={{width: 200, height: 200}} alt="Recipe Image"/>
					</div>
				</div>

				<div className="RecipeDescription">
					<p>{this.props.description}</p>
				</div>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeHeader
