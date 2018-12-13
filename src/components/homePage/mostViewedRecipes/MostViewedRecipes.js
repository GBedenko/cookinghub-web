// Import React
import React, { Component } from 'react'

// Import module for making requests to backend API
import ApiRequests from '../../../modules/api_requests'

// Import CSS
import './MostViewedRecipes.css'

// Import child components
import Grid from '../grid/Grid'

// MostViewedRecipes component to contain list of recipe tiles sorted by views ascending
class MostViewedRecipes extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipes_list: [], // List of recipe objects which will be retrieve from backend API
			authHeader: ''
		}
	}

	// React lifecycle called to check if component should update
	shouldComponentUpdate(nextProps) {

		// If authHeader prop has been passed to the component, need to update
		return nextProps.authHeader.length > 0
	}

	// React lifecycle function to update (used for if prop recieved after component mounts)
	componentDidUpdate() {

		if(this.state.recipes_list.length == 0 && this.props.authHeader) {
			// Request backend API for recipes with params limit of 4 and sorted by timestamp attribute descending
			ApiRequests.getRecipes(this.props.authHeader, '?limit=4&view=-1')
						.then( resp => {
							this.setState({
								// Set state of recipes list to object retrieved from GET request
								recipes_list: resp.data
							})
						})
		}
	}

	componentDidMount(){
		
		// Assign the authorization header to this component's state passed from parent
		this.setState({authHeader: this.props.authHeader})
	}

	render() {

		// Component is made up from a grid of 1 row containing 4 elements using the recipes data
		return (

			<div className="MostViewedRecipes">
				<h3>Most Viewed Recipes:</h3>
				<div>
					<Grid items={this.state.recipes_list} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
				</div>
			</div>
		)
	}
}

// Export component so it can be imported by others
export default MostViewedRecipes
