//Import React and React Router
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import './RecipeSharingOptions.css'

// Import module for making requests to backend API
import ApiRequests from '../../../../modules/api_requests'

// RecipeSharingOptions contains recipe info on ratings and sharing the recipe to other users or elsewhere
class RecipeSharingOptions extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipeID : '',
			likes: 0,
			dislikes: 0,
			reload: false
		}

		// Set component states based on ones passed from parent component
		this.setState({recipeID: this.props.recipeID,
						likes: this.props.likes,
						dislikes: this.props.dislikes})

		// Ensures the functions in this component understand the 'this' keyword refers to the component functions
		this.addLikeToRecipe = this.addLikeToRecipe.bind(this)
		this.addDislikeToRecipe = this.addDislikeToRecipe.bind(this)

	}

	componentDidMount(){

		// Request backend API for recipe data object for the recipe id being viewed
		ApiRequests.getRecipe(this.props.authHeader, this.props.recipeID)
					.then(({ data }) => {
						// Once data retrieved, set it to the state of the component's recipe data
						this.setState({
							likes: data.likes,
							dislikes: data.dislikes
						})				
					})
					.catch((reason) => {						
						console.log(reason)
					})
	}

	// Handles logic for when user clicks to like a recipe
	addLikeToRecipe(event){
		
		// Prevent default html behaviour of the submit button
		event.preventDefault()

		// Increment number of likes for the recipe
		const newLikesCount = this.state.likes + 1
		
		// Send a patch request to backend API to increment the likes count for the recipe
		ApiRequests.updateRecipe(this.props.authHeader, this.props.recipeID, {likes: newLikesCount})
					.then((response) => {
						// If successfully updated in the backend, update the likes count in the component
						this.setState({likes: newLikesCount})
					})
	}

	// Handles logic for when user clicks to dislike a recipe
	addDislikeToRecipe(event){

		// Prevent default html behaviour of the submit button
		event.preventDefault()

		// Increment number of dislikes for the recipe
		const newDislikesCount = this.state.dislikes + 1

		// Send a patch request to backend API to increment the dislikes count for the recipe
		ApiRequests.updateRecipe(this.props.authHeader, this.props.recipeID, {dislikes: newDislikesCount})
					.then((response) => {
						// If successfully updated in the backend, update the dislikes count in the component
						this.setState({dislikes: newDislikesCount})
					})
	}

	render() {

		if(this.state.reload) return <Redirect to={'/app/recipes/' + this.props.recipeID}/>	

		return (

			// Component is one unordered list of the different ways you can share/rate/follow the recipe
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
