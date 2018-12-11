import React, { Component } from 'react'

import './Header.css'

import SearchBox from './searchBox/SearchBox'

import yummyRecipesLogo from '../../img/logo-full.png'

class Header extends Component {

	constructor(props){
		// Uses parent 'Component' properties variables
		super(props)

		// Maintains the state of the header's attributes, including the value of the search field in the header
		this.state = {
			searchTerm: ''
		}
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
							<li><a href="/app/home">Home</a></li>
							<li><a href="/app/createRecipe">Create a Recipe</a></li>
							<li><a href="/app/user">My Recipes and Lists</a></li>
						</ul>
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
