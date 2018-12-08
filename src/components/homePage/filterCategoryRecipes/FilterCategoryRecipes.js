import React, { Component } from 'react'
import './FilterCategoryRecipes.css'
import Grid from '../grid/Grid'

class FilterCategoryRecipes extends Component {

	constructor(props){
		super(props)

		this.state = {
		}

	}

	render() {

		return (

			<div className="FilterCategoryRecipes">
				<h3>Search Recipes by Category:</h3>
				<form action="/action_page.php">
					<select name="cars">
						<option value="volvo">Starters</option>
						<option value="saab">Main Courses</option>
						<option value="fiat">Desserts</option>
						<option value="audi">Breakfast</option>
						<option value="audi">Lunch</option>
						<option value="audi">Side Dishes</option>
						<option value="audi">Beverages</option>
					</select>
				</form>
				<button type="submit">Submit</button>
				<div>
					<Grid items={this.props.recipes_list} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
				</div>
			</div>
		)
	}
}
export default FilterCategoryRecipes
