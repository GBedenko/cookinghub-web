// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeHeader.css'

// Import other modules this component uses
import axios from 'axios'

// RecipeHeader component containing summary of the recipe details
class RecipeHeader extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			// Save state of recipe data that is shown in the RecipeHeader
			name: '',
			category: '',
			description: '',
			image: ''
		}
	}

	componentDidMount(){

		// Request backend API for recipe data object for the recipe id being viewed
		axios.get('http://localhost:8080/api/v1.0/recipes/' + this.props.recipeID)
			.then(({ data }) => {
				this.setState({
					// Set state for only the attributes the header uses
					name: data.name,
					description: data.description,
					category: data.category,
					mainImage: data.main_image})
			})
	}

	render() {

		// Recipe header component displays name, image, category and description of the recipe
		return (
			<div className="RecipeHeader">
				<div className="RecipeInfo">
					<h1>{this.state.name}</h1>
					<h2>Category: {this.state.category}</h2>
				</div>
				<div className="RecipeImage">
					<div className="recipe-main-image-container">
						<img src={this.state.mainImage} style={{width: 200, height: 200}} alt="Recipe Image"/>
					</div>
				</div>

				<div className="RecipeDescription">
					<p>{this.state.description}</p>
				</div>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeHeader
