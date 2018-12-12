// Import React
import React, { Component } from 'react'

// Import module for making requests to backend API
import ApiRequests from '../../../modules/api_requests'

// Import CSS
import './HighestRatedRecipes.css'

// Import child components
import Grid from '../grid/Grid'

// HighestRatedRecipes component to contain list of recipe tiles sorted by likes count ascending
class HighestRatedRecipes extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipes_list: [], // List of recipe objects which will be retrieve from backend API
			authHeader: ''
		}
	}
	
	componentDidMount(){
		
		// Assign the authorization header to this component's state passed from parent
		this.setState({authHeader: this.props.authHeader})

		// Request backend API for recipes with params limit of 4 and sorted by likes attribute ascending
		ApiRequests.getRecipes(this.props.authHeader, '?limit=4&likes=1')
					.then( resp => {
						this.setState({
							// Set state of recipes list to object retrieved from GET request
							recipes_list: resp.data
						})
					})
	}

	render() {

		// Component is made up from a grid of 1 row containing 4 elements using the recipes data
		return (

			<div className="HighestRatedRecipes">
				<h3>Highest Rated Recipes:</h3>
				<div>
					<Grid items={this.state.recipes_list} colClass="col-m-3" rowLength={4} />
				</div>
			</div>
		)
	}
}

// Export component so it can be imported by others
export default HighestRatedRecipes
