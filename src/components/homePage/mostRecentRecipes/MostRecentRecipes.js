// Import React
import React, { Component } from 'react'

// Import other modules this component uses
import axios from 'axios'

// Import CSS
import './MostRecentRecipes.css'

// Import child components
import Grid from '../grid/Grid'

// MostRecentRecipes component to contain list of recipe tiles sorted by timestamp of their creation descending
class MostRecentRecipes extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipes_list: [] // List of recipe objects which will be retrieve from backend API
		}
	}

	componentDidMount(){

		// Request backend API for recipes with params limit of 4 and sorted by timestamp attribute descending
		axios.get('http://localhost:8080/api/v1.0/recipes?limit=4&timestamp=-1')
				.then( resp => {
					// Set state of recipes list to object retrieved from GET request
					this.setState({
						recipes_list: resp.data
					})
				})
	}

	render() {

		// Component is made up from a grid of 1 row containing 4 elements using the recipes data
		return (

			<div className="MostRecentRecipes">
				<h3>Most Recent Recipes:</h3>
				<div>
					<Grid items={this.state.recipes_list} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
				</div>
			</div>
		)
	}
}

// Export component so it can be imported by others
export default MostRecentRecipes
