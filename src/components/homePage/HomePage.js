import React, { Component } from 'react'

import './HomePage.css'

import HighestRatedRecipes from './highestRatedRecipes/HighestRatedRecipes'
import MostRecentRecipes from './mostRecentRecipes/MostRecentRecipes'
import MostViewedRecipes from './mostViewedRecipes/MostViewedRecipes'

class HomePage extends Component {

	constructor(props){
		super(props)

		this.state = {
			all_recipes: []
		}
	}

	render() {

		return (

			<div className="HomePage">
				<HighestRatedRecipes recipes_list={this.state.all_recipes} />
				<MostRecentRecipes recipes_list={this.state.all_recipes} />
				<MostViewedRecipes recipes_list={this.state.all_recipes} />
			</div>
		)
	}
}
export default HomePage
