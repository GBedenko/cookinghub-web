// Import React
import React, { Component } from 'react'

// Import CSS
import './RecipeHeader.css'

// Import module for making requests to backend API
import ApiRequests from '../../../modules/api_requests'

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
			main_image: ''
		}
	}

	componentDidMount(){

		// Request backend API for recipe data object for the recipe id being viewed
		ApiRequests.getRecipe(this.props.authHeader, this.props.recipeID)
					.then(({ data }) => {
						// Once data retrieved, set it to the state of the component's recipe data
						this.setState({
							name: data.name,
							category: data.category,
							description: data.description,
							main_image: data.main_image
						})				
					})
					.catch((reason) => {						
						console.log(reason)
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
						<img src={this.state.main_image} style={{width: 200, height: 200}} alt="Recipe Image"/>
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
