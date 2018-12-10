import React, { Component } from 'react'
import axios from 'axios'

import './MostViewedRecipes.css'
import Grid from '../grid/Grid'

class MostViewedRecipes extends Component {

	constructor(props){
		super(props)

		this.state = {
			recipes_list: []
		}
	}

	componentDidMount(){

		axios.get('http://localhost:8080/api/v1.0/recipes?limit=4&views=1')
			.then( resp => {
				this.setState({
					recipes_list: resp.data
				})
			})
	}

	render() {

		return (

			<div className="MostViewedRecipes">
				<h3>Most Viewed Recipes:</h3>
				<div>
					<Grid items={this.state.recipes_list} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
				</div>
			</div>
		)
	}
}
export default MostViewedRecipes
