import React, { Component } from 'react'
import './UserFavouriteRecipes.css'

class UserFavouriteRecipes extends Component {

	constructor(props){
		super(props)

		this.state = {
		}

	}

	render() {

		return (

			<div className="UserFavouriteRecipes">
				<h4>Your Favourite Recipes:</h4>
				<table>
					<tr>
						<th>Recipe</th>
						<th>Author</th>
					</tr>
					<tr>
						<td><a href="#">Recipe Name</a></td>
						<td>AuthorName</td>
					</tr>
					<tr>
						<td><a href="#">Recipe Name</a></td>
						<td>AuthorName</td>
					</tr>
				</table>
			</div>
		)
	}
}
export default UserFavouriteRecipes
