import React, { Component } from 'react'
import axios from 'axios'

import './CreateRecipe.css'

class CreateRecipe extends Component {

	constructor(props){
		super(props)

		// Default values for a new recipe (which will be populated from values in form)
		this.state = {
			name: "",
			category: "Main",
			description: "",
			main_image: "",
			ingredients: [],
			steps: [],
			steps_images: [],
			user: "",
			views: 0,
			likes: 0,
			dislikes: 0
		}

		// Ensures that the functions understand what 'this' object is
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
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

		axios.post('http://localhost:8080/api/v1.0/recipes', this.state, {headers: { "Content-Type": "application/json"}})

		window.location = '/recipes'
	}

	render() {

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

					{/* <div className="form-group">
						<input type="hidden" name="count" value="1" />
						<label className="control-label" htmlFor="field1">Ingredients:</label>
						<br/>
						<div className="form-group" id="fields">
							<div className="controls" id="profs">
								<form className="input-append">
									<div id="field">
										<input autoComplete="off" className="input" id="field1" name="prof1" type="text" placeholder="Add Ingredient..." data-items="8"/><button id="b1" className="btn add-more" type="button">+</button>
									</div>
								</form>
								<br/>
								<small>Press + to add another form field :)</small>
							</div>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Preperation Steps:</label>
						<p>1.</p><textarea className="form-control" rows="3"></textarea>
						<br/>
						<label htmlFor="exampleFormControlFile1">Step Image:</label>
						<br/>
						<input type="file" className="form-control-file"/>
						<br/>
						<small>Press + to add another form field :)</small>
					</div> */}

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
