import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

import './CreateRecipe.css'
import IngredientInput from './inputs/IngredientInput'
import PreperationStepInput from './inputs/PreperationStepInput'

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

		let updated_recipe = Object.assign({},this.state.new_recipe,{[name]: value})
		this.setState({
			new_recipe: updated_recipe
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

					<h4>Recipe Name:</h4>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="name"
							placeholder="What is the name of your Recipe?"
							onChange={this.handleInputChange}
							value={this.state.new_recipe.name}/>
					</div>

					<h4>Category:</h4>
					<div className="form-group">
						<select className="form-control" name="category" onChange={this.handleInputChange}>
							<option>Starter</option>
							<option>Main</option>
							<option>Dessert</option>
							<option>Breakfast</option>
							<option>Drink</option>
						</select>
					</div>

					<h4>Recipe Description:</h4>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="description"
							placeholder="Description of Recipe"
							onChange={this.handleInputChange}
							value={this.state.new_recipe.description}/>
					</div>

					<h4>Recipe Image:</h4>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="main_image"
							placeholder="Image of Finished Recipe"
							onChange={this.handleInputChange}
							value={this.state.new_recipe.main_image}/>
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
					<button className="btn btn-primary" onClick={this.addIngredient}>Add New Ingredient</button>
					<br/>

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
					<button className="btn btn-primary" onClick={this.addStep}>Add New Preperation Step</button>
					<br/>

					<h4>Video:</h4>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="video"
							placeholder="Video link for Recipe"
							onChange={this.handleInputChange}
							value={this.state.new_recipe.video}/>
					</div>

					<h4>Audio:</h4>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="audio"
							placeholder="Audio link for Recipe"
							onChange={this.handleInputChange}
							value={this.state.new_recipe.audio}/>
						<br/>
					</div>

				</form>
				<button type="submit" class="btn btn-primary btn-lg" form="createRecipeForm" value="publish_recipe">Publish Recipe</button>
			</div>
		)
	}
}
export default CreateRecipe
