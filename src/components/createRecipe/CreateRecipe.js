import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

import './CreateRecipe.css'
import IngredientInput from './inputs/IngredientInput'
import PreperationStepInput from './inputs/IngredientInput'

class CreateRecipe extends Component {

	constructor(props){
		super(props)

		// Default values for a new recipe (which will be populated from values in form)
		this.state = {
			new_recipe: { 
				name: '',
				category: 'Starter',
				description: '',
				main_image: '',
				ingredients: [''],
				steps: [''],
				views: 0,
				likes: 0,
				dislikes: 0},
			redirect: false
		}

		// Ensures that the functions understand what 'this' object is
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.addIngredient = this.addIngredient.bind(this)
		this.handleIngredientArraySubmit = this.handleIngredientArraySubmit.bind(this)
		this.addStep = this.addStep.bind(this)
		this.handleStepArraySubmit = this.handleStepArraySubmit.bind(this)
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

		axios.post('http://localhost:8080/api/v1.0/recipes', this.state.new_recipe, {headers: { 'Content-Type': 'application/json'}})

		this.setState({redirect: true})
	}

	handleIngredientArraySubmit(event, index) {
		console.log(`${event.target.name} changed value to ${event.target.value} at index ${index}`)
		let ingr = Array.from(this.state.new_recipe.ingredients)
		ingr[index] = event.target.value
		let recipe = Object.assign({},this.state.new_recipe,{ingredients: ingr})
		this.setState({
			new_recipe: recipe
		})
	}

	addIngredient = (event) => {
		console.log(this.state.new_recipe.ingredients)
		event.preventDefault()
		let newIngredients = this.state.new_recipe.ingredients.push("")
		this.setState(({
			ingredients: newIngredients
		}))
	}

	handleStepArraySubmit(event, index) {
		console.log(`${event.target.name} changed value to ${event.target.value} at index ${index}`)
		let step = Array.from(this.state.new_recipe.steps)
		step[index] = event.target.value
		let recipe = Object.assign({},this.state.new_recipe,{steps: step})
		this.setState({
			new_recipe: recipe
		})
	}

	addStep = (event) => {
		console.log(this.state.new_recipe.steps)
		event.preventDefault()
		let newSteps = this.state.new_recipe.steps.push("")
		this.setState(({
			steps: newSteps
		}))
	}

	render() {

		if(this.state.redirect) return <Redirect to={'/app/user'}/>	

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
							placeholder="Image of Finished Recipe"
							onChange={this.handleInputChange}/>
					</div>

					<h4>Ingredients:</h4>
					{this.state.new_recipe.ingredients.map( (val, idx) => {
						
						return (
							<IngredientInput index={idx} 
							key={"ingredient"+idx} 
							onChange={this.handleIngredientArraySubmit} 
							value={this.state.new_recipe.ingredients[idx]}
							id={"ingredient"+idx} />
						)
					})}
					<button onClick={this.addIngredient}>Add New Ingredient</button>

					<h4>Preperation Steps:</h4>
					{this.state.new_recipe.steps.map( (val, idx) => {
						
						return (
							<PreperationStepInput index={idx} 
							key={"step"+idx} 
							onChange={this.handleStepArraySubmit} 
							value={this.state.new_recipe.steps[idx]}
							id={"step"+idx} />
						)
					})}
					<button onClick={this.addStep}>Add New Preperation Step</button>

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
