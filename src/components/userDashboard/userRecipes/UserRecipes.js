import React, { Component } from 'react'
import './UserRecipes.css'

class UserRecipes extends Component {

	constructor(props){
		super(props)

		this.state = {
		}

	}

	render() {

		return (

			<div className="UserRecipes">
				<h4>Your Recipes:</h4>
				<table>
					<tr>
						<th>Name</th>
						<th>Status</th>
						<th>Views</th>
						<th>Comments</th>
						<th>Recommendations</th>
					</tr>
					<tr>
						<td>Name...</td>
						<td>Published (<a href="#">Change Status</a>)</td>
						<td>50</td>
						<td>2</td>
						<td>1</td>
					</tr>
					<tr>
						<td>Fdsa...</td>
						<td>Unpublished (<a href="#">Change Status</a>)</td>
						<td>12</td>
						<td>0</td>
						<td>0</td>
					</tr>
					<tr>
						<td>Asdf...</td>
						<td>Published (<a href="#">Change Status</a>)</td>
						<td>100</td>
						<td>20</td>
						<td>12</td>
					</tr>
				</table>
			</div>
		)
	}
}
export default UserRecipes
