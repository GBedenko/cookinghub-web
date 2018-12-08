import React, { Component } from 'react'
import axios from 'axios'

import './RecipeContent.css'

import Ingredients from './ingredients/Ingredients'
import PreperationSteps from './preperationsSteps/PreperationSteps'
import RecipeVideo from './recipeVideo/RecipeVideo'
import RecipeSoundFile from './recipeSoundFile/RecipeSoundFile'

class RecipeContent extends Component {

	constructor(props){
		super(props)

		this.state = {
			ingredients: [],
			steps: [],
			video: ''
		}

	}

	componentDidMount(){
		axios.get('http://localhost:8080/api/v1.0/recipes/' + this.props.recipeID)
			.then(({ data }) => {
				this.setState({
					ingredients: data.ingredients,
					steps: data.steps,
					video: data.video})
			})
	}

	render() {

		return (
			<div className="recipeContent">
				<Ingredients ingredients_list={this.state.ingredients}/>
				<PreperationSteps preperation_steps_list={this.state.steps}/>
				<RecipeVideo video={this.state.video}/>
				<RecipeSoundFile/>
			</div>
		)
	}
}
export default RecipeContent
