// Import React and React Router
import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

// Import CSS
import './Header.css'

// Import child components
import SearchBox from './searchBox/SearchBox'

// Import header image from img directory
import yummyRecipesLogo from '../../img/logo-full.png'

// Header component to show at the top of most pages within application
class Header extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	// Function to check if the header component should be rendered on the current page
	checkIfRequired(path) {

		// Regex test to return false if the path contains login or register
		return !/login|register$/g.test(path)
	}

	render() {

		// Component for logo, navigation bar and search box component, also with logout option in header
		return (

			<React.Fragment>
				{/* If the header should be rendered on the current page/pathname, then render it, else render nothing */}
				{this.checkIfRequired(this.props.location.pathname) &&

				// Header component using React Router Links instead of a tags so it can remain as SPA
				<div className="Header">
					<Link to={'/app/home'}><img src={yummyRecipesLogo} alt="Yummy Recipes Logo" /></Link>
					<div className="row">
						<ul className="navigationMenu">
							<li><Link to={'/app/home'}>Home</Link></li>
							<li><Link to={'/app/create-recipe'}>Create a Recipe</Link></li>
							<li><Link to={'/app/recipes'}>View All Recipes</Link></li>
						</ul>
						<div className="searchBoxContainer">
							<SearchBox submitSearch={this.submitSearch}/>
						</div>
						<div className="logoutLink">
							<a className="text-danger" href="/">Logout</a>
						</div>
					</div>
				</div> }

			</React.Fragment>
		)
	}
}

// Export component so it can be imported and using React Router logic
export default withRouter(Header)
