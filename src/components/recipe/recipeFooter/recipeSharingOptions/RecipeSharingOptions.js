import React, { Component } from 'react'

import axios from 'axios'

class RecipeSharingOptions extends Component {

	constructor(props){
		super(props)

		this.state = {
			recipeID : '',
			likes: 0,
			dislikes: 0
		}

		this.setState({recipeID: this.props.recipeID,
						likes: this.props.likes,
						dislikes: this.props.dislikes})

	}

	addLikeToRecipe(event){

		event.preventDefault()

		axios.patch('http://localhost:8080/api/v1.0/recipes/' + this.state.recipeID, {likes: this.state.likes + 1})
			// .then((response) => {
			// 	this.props.onSuccess(authHeader)
			// 	console.log("got here")
			// 	this.setState({refresh: true})
			// })
			// .catch((reason) => this.setState({errors: {incorrect: true}}))
	}

	addDislikeToRecipe(event){

		event.preventDefault()

		axios.patch('http://localhost:8080/api/v1.0/recipes/' + this.state.recipeID, {dislikes: this.state.dislikes + 1})
			// .then((response) => {
			// 	this.props.onSuccess(authHeader)
			// 	console.log("got here")
			// 	this.setState({refresh: true})
			// })
			// .catch((reason) => this.setState({errors: {incorrect: true}}))
	}

	render() {

		return (
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

export default RecipeSharingOptions
