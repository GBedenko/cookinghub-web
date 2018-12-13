// Import React
import React, { Component } from 'react'

// Import CSS
import './HomePage.css'

// Import child components
import HighestRatedRecipes from './highestRatedRecipes/HighestRatedRecipes'
import MostRecentRecipes from './mostRecentRecipes/MostRecentRecipes'
import MostViewedRecipes from './mostViewedRecipes/MostViewedRecipes'

// HomePage component for main content showing after a user logs in
class HomePage extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			authHeader: ''
		}
	}

	componentDidMount(){
		// Assign the authorization header to this component's state passed from parent
		this.setState({authHeader: this.props.authHeader})
	}

	render() {

		// HomePage is made up from child components of lists of sorted recipes
		return (

			<div className="HomePage">
				<HighestRatedRecipes authHeader={this.props.authHeader}/>
				<MostRecentRecipes authHeader={this.props.authHeader} />
				<MostViewedRecipes authHeader={this.props.authHeader} />
			</div>
		)
	}
}

// Export component so it can be imported by others
export default HomePage
