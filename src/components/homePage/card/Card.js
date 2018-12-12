// Import React and React Router
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// Import CSS
import './Card.css'

// Card component for displaying an image and heading in a tile/card format
class Card extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	render() {

		// Card component displays an image and title passed from parent component
		return (
			// Entire Card component wrapped in a React Link so clicking anywhere on the Card will move to the recipe's page
			<Link to={'/app/recipe/' + this.props.id}>
			<div className="card">
				<div className="cardImage">
					<img src={this.props.image} alt={this.props.imgAlt} style={{width: '200px', height: '200px'}} />
				</div>
				<div className="container">
					<button className="linkButton"><h4><b>{this.props.title}</b></h4></button>
				</div>
			</div>
			</Link>
		)
	}
}

// Export component so it can be imported
export default Card
