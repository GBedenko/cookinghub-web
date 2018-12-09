import React, { Component } from 'react'

class SearchBox extends Component {

	constructor(props){
		super(props)
		this.state = {
			searchQuery: ""
		}

		// Ensures that the functions understand what 'this' object is
		this.onChange = this.onChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	onChange(event) {
		// Update the state of the searchQuery value to whatever was entered in the field
		this.setState({searchQuery: event.target.value})
	}

	handleSearchSubmit(event) {
		//prevent the form to be submitted to its action url
		event.preventDefault()
		window.location = '/recipes?query=' + this.state.searchQuery
	}

	render() {

		return (
			<div className="SearchBox">
				<form onSubmit={this.handleSearchSubmit}>
					<input type="text" placeholder="Search Recipes..." name="query" onChange={this.onChange} />
					<button type="submit" onClick={this.handleSearchSubmit}>Search</button>
				</form>
			</div>
		)
	}
}

export default SearchBox
