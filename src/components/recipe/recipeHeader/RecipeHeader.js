import React, { Component } from 'react'
import './RecipeHeader.css'
import axios from 'axios'

class RecipeHeader extends Component {

	constructor(props){
		super(props)

		this.state = {
			name: '',
			category: '',
			description: '',
			image: ''
		}

	}

	componentDidMount(){

		axios.get('http://localhost:8080/api/v1.0/recipes/' + this.props.recipeID)
			.then(({ data }) => {
				this.setState({
					name: data.name,
					description: data.description,
					category: data.category,
					mainImage: data.main_image})
			})
	}

	render() {

		return (
			<div className="RecipeHeader">
				<div className="RecipeInfo">
					<h1>{this.state.name}</h1>
					<h2>Category: {this.state.category}</h2>
				</div>
				<div className="RecipeImage">
					<div className="recipe-main-image-container">
						<img src={this.state.mainImage} style={{width: 200, height: 200}} alt="blah"/>
					</div>
				</div>

				<div className="RecipeDescription">
					<p>{this.state.description}</p>
				</div>
			</div>
		)
	}
}
export default RecipeHeader

