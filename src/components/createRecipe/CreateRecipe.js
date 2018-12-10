import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

import './CreateRecipe.css'

class CreateRecipe extends Component {

	constructor(props){
		super(props)

		// Default values for a new recipe (which will be populated from values in form)
		this.state = {
			name: '',
			category: 'Main',
			description: '',
			main_image: '',
			ingredients: [''],
			steps: [],
			steps_images: [],
			user: '',
			views: 0,
			likes: 0,
			dislikes: 0
		}

		// Ensures that the functions understand what 'this' object is
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.addIngredient = this.addIngredient.bind(this)
	}

	handleInputChange(event) {

		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {

		event.preventDefault()

		axios.post('http://localhost:8080/api/v1.0/recipes', this.state, {headers: { 'Content-Type': 'application/json'}})

		return <Redirect to={'/app/user'}/>
	}

	addIngredient = (e) => {
		this.setState((prevState) => ({
			ingredients: [...prevState.ingredients, ''],
		}))
	}

	render() {
		const {ingredients} = this.state

		return (

			<div className="CreateRecipe">
				<form id="createRecipeForm" onSubmit={this.handleSubmit}>

					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Name:</label>
						<br/>
						<input
							type="text"
							className="form-control"
							name="name"
							placeholder="What is the name of your Recipe?"
							onChange={this.handleInputChange}/>
					</div>

					<div className="form-group">
						<label htmlFor="exampleFormControlSelect1">Category:</label>
						<br/>
						<select className="form-control" name="category" onChange={this.handleInputChange}>
							<option>Starter</option>
							<option>Main</option>
							<option>Dessert</option>
							<option>Breakfast</option>
							<option>Drink</option>
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1">Description:</label>
						<br/>
						<input
							type="text"
							className="form-control"
							name="description"
							placeholder="Description of Recipe"
							onChange={this.handleInputChange}/>
					</div>

					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Main Image:</label>
						<br/>
						<input
							type="text"
							className="form-control"
							name="main_image"
							placeholder="Description of Recipe"
							onChange={this.handleInputChange}/>
					</div>

					<h4>Ingredients:</h4>
					{ingredients.map( (val, idx) => {
						const ingredientId = `ingredient-${idx}`
						return (
							<div key={idx}>
								<label htmlFor={ingredientId}>{`Ingredient ${idx + 1}: `}</label>
								<input
									type="text"
									name={ingredientId}
									className="ingredient"
									onChange={this.handleInputChange}
								/>
							</div>
						)
					})}
					<a onClick={this.addIngredient}>Add New Ingredient</a>

					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Video File:</label>
						<br/>
						<input
							type="text"
							className="form-control"
							name="video"
							placeholder="Video link for Recipe"
							onChange={this.handleInputChange}/>
					</div>

					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Audio File:</label>
						<br/>
						<input
							type="text"
							className="form-control"
							name="audio"
							placeholder="Audio link for Recipe"
							onChange={this.handleInputChange}/>
						<br/>
					</div>

				</form>
				<button type="submit" form="createRecipeForm" value="publish_recipe">Publish Recipe</button>
			</div>
		)
	}
}
export default CreateRecipe
