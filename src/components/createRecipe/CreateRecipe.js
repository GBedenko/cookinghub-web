// Imports for React and React Router
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// Import module for making requests to backend API
import ApiRequests from '../../modules/api_requests'

// Import CSS
import './CreateRecipe.css'

// Import child components
import IngredientInput from './inputs/IngredientInput'
import PreperationStepInput from './inputs/PreperationStepInput'

// CreateRecipe component for interface containing form to create new recipe
class CreateRecipe extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)

		// State variables for this component
		this.state = {
			// Default values for a new recipe (which will be populated from values in form)
			new_recipe: {
				name: '',
				category: 'Starter',
				description: '',
				main_image: '',
				ingredients: [''],
				steps: [''],
				likes: 0,
				dislikes: 0},
			redirect: false // Redirect state changed when wanting to move to new screen
		}

		// Ensures the functions in this component understand the 'this' keyword refers to the component functions
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.addIngredient = this.addIngredient.bind(this)
		this.handleIngredientArraySubmit = this.handleIngredientArraySubmit.bind(this)
		this.addStep = this.addStep.bind(this)
		this.handleStepArraySubmit = this.handleStepArraySubmit.bind(this)
	}

	// Handles change of an input field
	handleInputChange(event) {

		// Find the field target for the event
		const target = event.target

		// Retrieve the value from the target
		const value = target.type === 'checkbox' ? target.checked : target.value

		// Retrieve the name of the field for this input field
		const name = target.name

		// Take the current state of the recipe and update it with the new updated value
		const updatedRecipe = Object.assign({},this.state.new_recipe,{[name]: value})

		// Set state for the new recipe to contain the changed value
		this.setState({
			new_recipe: updatedRecipe
		})
	}

	// Handles logic for when submit button is clicked
	handleSubmit(event) {

		// Prevent default html submit button logic (which would refresh the page, so needs to be avoided in SPA)
		event.preventDefault()

		// POST request to backend API to create the new recipe
		ApiRequests.addRecipe(this.props.authHeader, this.state.new_recipe)

		// Change value of redirect, which will refresh render of component and use React Redirect
		this.setState({redirect: true})
	}

	// Handles button for adding a new add ingredient input field
	handleIngredientArraySubmit(event, index) {

		// Use the current ingredients array from state
		const ingr = Array.from(this.state.new_recipe.ingredients)

		// At the given index, update the ingredients array with input field value
		ingr[index] = event.target.value

		// Take the current state of the recipe and update the ingredients array with new values
		const recipe = Object.assign({},this.state.new_recipe,{ingredients: ingr})

		// Set state for new recipe to be the updated one
		this.setState({
			new_recipe: recipe
		})
	}

	// Adds an empty value to the ingredients array when new input field is created
	addIngredient = (event) => {

		// Prevent default html behaviour
		event.preventDefault()

		// Add an empty string to the ingredients array
		const newIngredients = this.state.new_recipe.ingredients.push('')

		// Set state of ingredients array to include the new empty ingredient
		this.setState({
			ingredients: newIngredients
		})
	}

	// Handles button for adding a new add step input field
	handleStepArraySubmit(event, index) {

		// Use the current steps array from state
		const step = Array.from(this.state.new_recipe.steps)

		// At the given index, update the steps array with input field value
		step[index] = event.target.value

		// Take the current state of the recipe and update the steps array with new values
		const recipe = Object.assign({},this.state.new_recipe,{steps: step})

		// Set state for new recipe to be the updated one
		this.setState({
			new_recipe: recipe
		})
	}

	// Adds an empty value to the steps array when new input field is created
	addStep = (event) => {

		// Prevent default html behaviour
		event.preventDefault()

		// Add an empty string to the steps array
		const newSteps = this.state.new_recipe.steps.push('')

		// Set state of steps array to include the new empty step
		this.setState({
			steps: newSteps
		})
	}

	render() {

		// If redirect flag is true, next run of render will redirect to home as the recipe was created
		if(this.state.redirect) return <Redirect to={'/app/home'}/>

		return (

			// Form for all input fields of a new recipe being created
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
					{this.state.new_recipe.ingredients.map( (val, idx) =>
						<IngredientInput index={idx}
							key={'ingredient'+idx}
							onChange={this.handleIngredientArraySubmit}
							value={this.state.new_recipe.ingredients[idx]}
							id={'ingredient'+idx} />
					)}
					<button className="btn btn-primary" onClick={this.addIngredient}>Add New Ingredient</button>
					<br/>

					<h4>Preperation Steps:</h4>
					{this.state.new_recipe.steps.map( (val, idx) =>
						<PreperationStepInput index={idx}
							key={'step'+idx}
							onChange={this.handleStepArraySubmit}
							value={this.state.new_recipe.steps[idx]}
							id={'step'+idx} />
					)}
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

				<button type="submit" className="btn btn-primary btn-lg" form="createRecipeForm" value="publish_recipe">Publish Recipe</button>

			</div>
		)
	}
}

// Export component so it can be imported
export default CreateRecipe
