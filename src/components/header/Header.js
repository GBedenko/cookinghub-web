import React, { Component } from 'react'

import './Header.css'

import SearchBox from './searchBox/SearchBox'

import yummyRecipesLogo from './img/logo-full.png'

class Header extends Component {

	constructor(props){
		// Uses parent 'Component' properties variables
		super(props)

		// Ensures that the functions understand what 'this' object is
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)

		// Maintains the state of the header's attributes, including the value of the search field in the header
		this.state = {
			searchTerm: ''
		}
	}

	handleSearchSubmit(event){
		//prevent the form to be submitted to its action url
		event.preventDefault()

		// Use the passed function from the parent
		this.props.onSearchClick(this.state.searchTerm)
	}

	handleInputChange(event){
		// Update the state of the searchTerm value to whatever was entered in the field
		this.setState({searchTerm: event.target.value})
	}

	checkIfRequired(path) {

		return !/login|register|welcome$/g.test(path)
	}

	render() {

		return (

			<React.Fragment>
				{this.checkIfRequired(this.props.location.pathname) &&

				<div className="Header">
					<a href="/"><img src={yummyRecipesLogo} alt="Yummy Recipes Logo" /></a>
					<div className="row">
						<ul className="navigationMenu">
							<li><a href="/">Home</a></li>
							<li><a href="/createRecipe">Create a Recipe</a></li>
							<li><a href="/user">My Recipes and Lists</a></li>
						</ul>
						<div>
							<li><a href="/login">Log In</a></li>
							<li><a href="/register">Register</a></li>
						</div>
						<div className="searchBoxContainer">
							<SearchBox/>
						</div>
					</div>
				</div> }

			</React.Fragment>
		)
	}
}
export default Header
