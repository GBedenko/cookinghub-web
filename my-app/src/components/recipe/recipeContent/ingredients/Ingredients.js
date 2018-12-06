import React, { Component } from 'react'
import './Ingredients.css'

class Ingredients extends Component {

	constructor(props){
		super(props)

		this.state = {
		}
	}

	render() {

		return (
			<div className="Ingredients">
				<h3>Ingredients:</h3>
				<ul>
					{this.props.ingredients_list.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
				</ul>
			</div>
		)
	}
}
export default Ingredients
