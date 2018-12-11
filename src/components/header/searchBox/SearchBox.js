import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

class SearchBox extends Component {

	constructor(props){
		super(props)
		this.state = {
			searchQuery: '',
			redirect: false,
			link: ''
		}
		
		// Ensures that the functions understand what 'this' object is
		// this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.submitSearch = this.submitSearch.bind(this)
	}

	// handleSearchSubmit(event) {
	// 	//prevent the form to be submitted to its action url
	// 	event.preventDefault()
	// 	this.setState({redirect: true})		
	// }

	onChange(event) {
		event.preventDefault()
		this.setState({searchQuery: event.target.value})
	}

	submitSearch(event) {
		event.preventDefault()

		this.props.history.push('/app/recipes?query=' + this.state.searchQuery)
	}
	render() {

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

export default withRouter(SearchBox)
