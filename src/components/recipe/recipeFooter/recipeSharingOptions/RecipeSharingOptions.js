//Import React and React Router
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import './RecipeSharingOptions.css'

// Import module for making requests to backend API
import ApiRequests from '../../../../modules/api_requests'

/**
 * @class RecipeSharingOptions contains recipe info on ratings and sharing the recipe to other users or elsewhere
 */
class RecipeSharingOptions extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipeID: '',
			likes: -1,
			dislikes: -1,
			reload: false
		}

		// Set component states based on ones passed from parent component
		this.setState({likes: this.props.likes,
			dislikes: this.props.dislikes})

		// Ensures the functions in this component understand the 'this' keyword refers to the component functions
		this.addLikeToRecipe = this.addLikeToRecipe.bind(this)
		this.addDislikeToRecipe = this.addDislikeToRecipe.bind(this)
	}

	// React lifecycle called to check if component should update
	shouldComponentUpdate(nextProps) {

		// If authHeader prop has been passed to the component, need to update
		return nextProps.likes >= 0
	}


	// React lifecycle function to update (used for if prop recieved after component mounts)
	componentDidUpdate() {

		if(this.props.likes >= 0 && this.props.dislikes >= 0 && this.state.likes == -1 && this.state.dislikes == -1) {

			this.setState({
				likes: this.props.likes,
				dislikes: this.props.dislikes
			})
		}
	}

	/**
	 * Handles logic for when user clicks to like a recipe
	 * @param {*} event Event from component to call this method 
	 */
	addLikeToRecipe(event){

		// Prevent default html behaviour of the submit button
		event.preventDefault()

		// Increment number of likes for the recipe
		const newLikesCount = this.props.likes + 1

		// Send a patch request to backend API to increment the likes count for the recipe
		ApiRequests.updateRecipe(this.props.authHeader, this.props.recipeID, {likes: newLikesCount})
			.then((response) => {
				// If successfully updated in the backend, update the likes count in the component
				this.setState({likes: newLikesCount})
			})
	}

	/**
	 * Handles logic for when user clicks to dislike a recipe
	 * @param {*} event Event from component to call this method 
	 */
	addDislikeToRecipe(event){

		// Prevent default html behaviour of the submit button
		event.preventDefault()

		// Increment number of dislikes for the recipe
		const newDislikesCount = this.props.dislikes + 1

		// Send a patch request to backend API to increment the dislikes count for the recipe
		ApiRequests.updateRecipe(this.props.authHeader, this.props.recipeID, {dislikes: newDislikesCount})
			.then((response) => {
				// If successfully updated in the backend, update the dislikes count in the component
				this.setState({dislikes: newDislikesCount})
			})
	}

	/**
	 * Component is one unordered list of the different ways you can share/rate/follow the recipe
	 */
	render() {

		if(this.state.reload) return <Redirect to={'/app/recipes/' + this.props.recipeID}/>

		return (
			
			<div className="RecipeSharingOptions">
				<ul>
					<li><button className="btn btn-success" onClick={this.addLikeToRecipe}>Like this Recipe</button></li>
					<li><p>{this.state.likes} likes</p></li>
					<li><button className="btn btn-danger" onClick={this.addDislikeToRecipe}>Dislike this Recipe</button></li>
					<li><p>{this.state.dislikes} dislikes</p></li>
				</ul>
				{/* <li><a href="#">Recommend this Recipe to another user</a></li>
					<li><a href="#">Follow this Author</a></li>
					<li><a href="#">Share this Recipe to Social Media</a></li>
					<li><a href="#">Report this Recipe to administrator</a></li> */}
			</div>
		)
	}
}

// Export component so it can be imported
export default withRouter(RecipeSharingOptions)
