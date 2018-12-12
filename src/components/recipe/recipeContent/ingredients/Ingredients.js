// Import React
import React, { Component } from 'react'

// Import CSS
import './Ingredients.css'

// Ingredients component is an unordered list for what the recipe requires
class Ingredients extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	render() {

		return (

			// Component maps the ingredients list passed from parent to a list of unordered list items 
			<div className="Ingredients">
				<h3>Ingredients:</h3>
				<ul>
					{this.props.ingredients_list.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
				</ul>
			</div>
		)
	}
}

// Export component so it can be imported
export default Ingredients
