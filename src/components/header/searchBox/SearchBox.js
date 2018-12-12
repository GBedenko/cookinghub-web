// Import React and React Router
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// SearchBox component for a search bar within the header component
class SearchBox extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			searchQuery: '' // State of the current query in the searchbox
		}
				
		// Ensures the functions in this component understand the 'this' keyword refers to the component functions
		this.onChange = this.onChange.bind(this)
		this.submitSearch = this.submitSearch.bind(this)
	}

	// Handles change of search bar field
	onChange(event) {

		// Prevent default html behaviour
		event.preventDefault()

		// Update the search query state for the component with what the user types in
		this.setState({searchQuery: event.target.value})
	}

	// Handles logic when submit search button is clicked
	submitSearch(event) {

		// Prevent default html behaviour for when a submit button is clicked
		event.preventDefault()

		// Change the url to the recipes endpoint with the query being what is in the search bar field
		this.props.history.push('/app/recipes?query=' + this.state.searchQuery)
	}

	render() {

		// JSX form for an input field and submit button as the search box component
		return (
			<div className="SearchBox">
				<form onSubmit={this.handleSearchSubmit}>
					<input type="text" placeholder="Search Recipes..." name="query" onChange={this.onChange} />
					<button type="submit" value={this.state.searchQuery} onClick={this.submitSearch}>Search</button>
				</form>
			</div>
		)
	}
}

// Export component so it can be imported and using React Router logic
export default withRouter(SearchBox)
