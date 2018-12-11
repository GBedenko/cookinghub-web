import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom'

import './Header.css'

import SearchBox from './searchBox/SearchBox'

import yummyRecipesLogo from '../../img/logo-full.png'

class Header extends Component {

	constructor(props){
		// Uses parent 'Component' properties variables
		super(props)

		// Maintains the state of the header's attributes, including the value of the search field in the header
		this.state = {
			searchQuery: ''
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
					<Link to={"/app/home"}><img src={yummyRecipesLogo} alt="Yummy Recipes Logo" /></Link>
					<div className="row">
						<ul className="navigationMenu">
							<li><Link to={"/app/home"}>Home</Link></li>
							<li><Link to={"/app/create-recipe"}>Create a Recipe</Link></li>
							<li><Link to={"/app/user"}>My Recipes and Lists</Link></li>
						</ul>
						<div className="searchBoxContainer">
							<SearchBox submitSearch={this.submitSearch}/>
						</div>

							<li><a class="text-danger" href="/">Logout</a></li>
					</div>
				</div> }

			</React.Fragment>
		)
	}
}
export default withRouter(Header)
