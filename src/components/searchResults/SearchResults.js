import React, { Component } from 'react'
import './SearchResults.css'
import axios from 'axios'

class SearchResults extends Component {

	constructor(props){
		super(props)

		this.state = {
			recipes: []
		}

	}

	componentDidMount(){
		
		axios.get('http://localhost:8080/api/v1.0/recipes' + this.props.location.search)
			.then(({ data }) => {
				this.setState({
					recipes: data
				})
			})
	}

	render() {

		return (

			<div className="SearchResults">

			</div>
		)
	}
}

export default SearchResults
