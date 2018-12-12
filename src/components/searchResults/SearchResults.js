// Import React and React Router
import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

// Import CSS
import './SearchResults.css'

// Import other modules this component uses
import axios from 'axios'

// SearchResults is assigned to recipes endpoint to show all recipes matching search criteria
class SearchResults extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			recipes: [] // List of recipe object which will be retrieved according to query on backend API
		}
	}

	componentDidMount(){

		// Call backend API for all recipes and send the url params as search query
		axios.get('http://localhost:8080/api/v1.0/recipes' + this.props.location.search)
			.then(({ data }) => {
				// Set the data for all retrieved recipes to the component's state
				this.setState({
					recipes: data
				})
			})
	}

	render() {

		return (

			// Map each recipe to HTML displaying the name, category likes and image of the recipe, all wrapped within a React Link
			<div className="SearchResults">

				<h3>Your search query found {this.state.recipes.length} results:</h3>

				{this.state.recipes.map((recipe) =>

					<Link to={'/app/recipe/' + recipe._id}>
						<div className="SearchResult" key={recipe._id}>
							<div className="row">
								<div className="col-3"><p>{recipe.name}</p></div>
								<div className="col-3"><p><b>Category: </b>{recipe.category}</p></div>
								<div className="col-3"><p>Likes: {recipe.likes}</p></div>
								<div className="col-3"><img src={recipe.main_image} style={{width: '100px', height: '100px'}}/></div>
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
