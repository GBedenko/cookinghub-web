import React, { Component } from 'react'

import './HomePage.css'

import HighestRatedRecipes from './highestRatedRecipes/HighestRatedRecipes'
import MostRecentRecipes from './mostRecentRecipes/MostRecentRecipes'
import MostViewedRecipes from './mostViewedRecipes/MostViewedRecipes'

class HomePage extends Component {

	constructor(props){
		super(props)

		this.state = {
			all_recipes: [],
			authHeader: ''
		}
		this.setState({authHeader: this.props.authHeader})
		console.log(this.state.authHeader)
	}

	render() {

		return (

			<div className="HomePage">
				<HighestRatedRecipes recipes_list={this.state.all_recipes} authHeader={this.state.authHeader} />
				<MostRecentRecipes recipes_list={this.state.all_recipes} authHeader={this.state.authHeader} />
				<MostViewedRecipes recipes_list={this.state.all_recipes} authHeader={this.state.authHeader} />
			</div>
		)
	}
}
export default HomePage
