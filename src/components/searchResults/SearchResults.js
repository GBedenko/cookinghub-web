// Import React and React Router
import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

// Import CSS
import './SearchResults.css'

// Import module for making requests to backend API
import ApiRequests from '../../modules/api_requests'

/**
 * @class SearchResults is assigned to recipes endpoint to show all recipes matching search criteria
 */
class SearchResults extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipes: [], // List of recipe object which will be retrieved according to query on backend API
			authHeader: '',
			searchQuery: ''
		}
	}

	// React lifecycle called to check if component should update
	shouldComponentUpdate(nextProps) {

		// If new search prop has been passed to the component, need to update
		return nextProps.location.search != this.state.searchQuery
	}

	// React lifecycle function to update (used for if prop recieved after component mounts)
	componentDidUpdate() {

		// Call backend API for all recipes and send the url params as search query
		ApiRequests.getRecipes(this.props.authHeader, this.props.location.search)
			.then(({ data }) => {
				// Set the data for all retrieved recipes to the component's state
				this.setState({
					recipes: data,
					searchQuery: this.props.location.search
				})
			})
	}

	componentDidMount(){

		// Call backend API for all recipes and send the url params as search query
		ApiRequests.getRecipes(this.props.authHeader, this.props.location.search)
			.then(({ data }) => {
				// Set the data for all retrieved recipes to the component's state
				this.setState({
					recipes: data,
					searchQuery: this.props.location.search
				})
			})
	}

	/**
	 * // Map each recipe to HTML displaying the name, category likes and image of the recipe, all wrapped within a React Link
	 */
	render() {

		return (
			
			<div className="SearchResults">

				<h3>Your search query found {this.state.recipes.length} results:</h3>

				{this.state.recipes.map((recipe) =>

					<Link to={'/app/recipe/' + recipe._id} key={recipe._id}>
						<div className="SearchResult" key={recipe._id}>
							<div className="row">
								<div className="col-3"><p>{recipe.name}</p></div>
								<div className="col-2"><p><b>Category: </b>{recipe.category}</p></div>
								<div className="col-2"><p>Likes: {recipe.likes}</p></div>
								<div className="col-2"><p>Views: {recipe.views}</p></div>
								<div className="col-2"><img src={recipe.main_image} style={{width: '100px', height: '100px'}}/></div>
							</div>
						</div>
					</Link>
				)}

			</div>
		)
	}
}

// Export component so it can be imported
export default withRouter(SearchResults)
