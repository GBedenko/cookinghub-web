import React, { Component } from 'react'
import './Card.css'

class Card extends Component {

	constructor(props){
		super(props)

		this.state = {
			cardStyle: {backgroundColor: this.props.backgroundColor}
		}

		this.onClickHandler = this.onClickHandler.bind(this)
	}

	onClickHandler(event){

		event.preventDefault()
		window.location = '/recipe/' + this.props.id
	}

	render() {

		return (

			<div className="card">
				<div className="cardImage">
					<img onClick={this.onClickHandler} src={this.props.image} alt={this.props.imgAlt} style={{width: '200px', height: '200px'}} />
				</div>
				<div className="container">
					<button onClick={this.onClickHandler} className="linkButton"><h4><b>{this.props.title}</b></h4></button>
					<p>{this.props.article}</p>
				</div>
			</div>
		)
	}
}
export default Card
