import React, { Component } from 'react'

import './CreateRecipe.css'

class CreateRecipe extends Component {

	constructor(props){
		super(props)

		this.state = {
		}
	}

	render() {

		return (

			<div className="CreateRecipe">
				<form id="createRecipeForm">
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Name:</label>
						<br/>
						<input type="text" className="form-control" placeholder="What is the name of your Recipe?"/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect1">Category:</label>
						<br/>
						<select className="form-control">
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
						<textarea className="form-control" rows="3"></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Main Image:</label>
						<br/>
						<input type="file" className="form-control-file"/>
					</div>
					<div className="form-group">
						<input type="hidden" name="count" value="1" />
						<label className="control-label" htmlFor="field1">Ingredients:</label>
						<br/>
						<div className="form-group" id="fields">
							<div className="controls" id="profs">
								<form className="input-append">
									<div id="field"><input autoComplete="off" className="input" id="field1" name="prof1" type="text" placeholder="Add Ingredient..." data-items="8"/><button id="b1" className="btn add-more" type="button">+</button></div>
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
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Video File:</label>
						<br/>
						<input type="file" className="form-control-file"/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Audio File:</label>
						<br/>
						<input type="file" className="form-control-file"/>
						<br/>
					</div>
				</form>
				<button type="submit" form="createRecipeForm" value="publish_recipe">Publish Recipe</button>
				<button type="submit" form="createRecipeForm" value="save_recipe">Save Recipe for Later (Won't be published)</button>
			</div>
		)
	}
}
export default CreateRecipe
