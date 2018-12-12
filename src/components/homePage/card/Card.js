import React, { Component } from 'react'
import './Card.css'
import {BrowserRouter as Redirect, Link} from 'react-router-dom'

class Card extends Component {

	constructor(props){
		super(props)

		this.state = {
			cardStyle: {backgroundColor: this.props.backgroundColor},
			redirect: false
		}

	}

	render() {

		return (

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
export default Card
