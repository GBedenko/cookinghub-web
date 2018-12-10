import React, { Component } from 'react'
import axios from 'axios'

import './HighestRatedRecipes.css'
import Grid from '../grid/Grid'

class HighestRatedRecipes extends Component {

	constructor(props){
		super(props)

		this.state = {
			recipes_list: []
		}
	}

	componentDidMount(){

		axios.get('http://localhost:8080/api/v1.0/recipes?limit=4&likes=1')
			.then( resp => {
				this.setState({
					recipes_list: resp.data
				})
			})
	}

	render() {

		return (

			<div className="HighestRatedRecipes">
				<h3>Highest Rated Recipes:</h3>
				<div>
					<Grid items={this.state.recipes_list} colClass="col-m-3" rowLength={4} />
				</div>
			</div>
		)
	}
}
export default HighestRatedRecipes
