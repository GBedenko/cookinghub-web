//Import React
import React, { Component } from 'react'

// Import module for making requests to backend API
import ApiRequests from '../../../modules/api_requests'

// RecipeSharingOptions contains recipe info on ratings and sharing the recipe to other users or elsewhere
class RecipeSharingOptions extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipeID : '',
			likes: 0,
			dislikes: 0
		}

		// Set component states based on ones passed from parent component
		this.setState({recipeID: this.props.recipeID,
						likes: this.props.likes,
						dislikes: this.props.dislikes})

	}

	// Handles logic for when user clicks to like a recipe
	addLikeToRecipe(event){

		// Prevent default html behaviour of the submit button
		event.preventDefault()

		// Send a patch request to backend API to increment the likes count for the recipe
		ApiRequests.updateRecipe(this.props.authHeader, this.state.recipeID, {likes: this.state.likes + 1})
	}

	// Handles logic for when user clicks to dislike a recipe
	addDislikeToRecipe(event){

		// Prevent default html behaviour of the submit button
		event.preventDefault()

		// Send a patch request to backend API to increment the dislikes count for the recipe
		ApiRequests.updateRecipe(this.props.authHeader, this.state.recipeID, {likes: this.state.dislikes + 1})
	}

	render() {

		return (

			// Component is one unordered list of the different ways you can share/rate/follow the recipe
			<div className="RecipeSharingOptions">
				<ul>
					<li><button onClick={this.addLikeToRecipe}>Like this Recipe</button></li>
					<p>{this.state.likes}</p>
					<li><button onClick={this.addDislikeToRecipe}>Dislike this Recipe</button></li>
					<p>{this.state.dislikes}</p>
					{/* <li><a href="#">Recommend this Recipe to another user</a></li>
					<li><a href="#">Follow this Author</a></li>
					<li><a href="#">Share this Recipe to Social Media</a></li>
					<li><a href="#">Report this Recipe to administrator</a></li> */}
				</ul>
			</div>
		)
	}
}

// Export component so it can be imported
export default RecipeSharingOptions
