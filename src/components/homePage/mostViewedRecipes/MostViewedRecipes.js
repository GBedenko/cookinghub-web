import React, { Component } from 'react'
import './MostViewedRecipes.css'
import Grid from '../grid/Grid'

class MostViewedRecipes extends Component {

	constructor(props){
		super(props)
	}

	handleThumbnailClicked(key){

	}

	render() {

		return (

			<div className="MostViewedRecipes">
				<h3>Most Viewed Recipes:</h3>
				<div>
					<Grid items={this.props.recipes_list} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
				</div>
			</div>
		)
	}
}
export default MostViewedRecipes
