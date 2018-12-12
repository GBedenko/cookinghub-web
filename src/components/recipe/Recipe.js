import React, { Component } from 'react'
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom'
import axios from 'axios'

class Recipe extends Component {

	constructor(props){
		super(props)

		// Save the recipe id from the url endpoint /recipe/:recipe_id the user is on
		const recipeIdFromURL = this.props.match.params.id
		// location.pathname.match(/\/([0-9a-fA-F]+)/g)[0].substr(1)

		this.state = {
			recipeID: recipeIdFromURL,
			recipe: {}
		}
	}
	
	componentDidMount(){
		
		axios.get('http://localhost:8080/api/v1.0/recipes/' + this.state.recipeID)
			.then(({ data }) => {
				console.log(data)
				this.setState({
					recipe: data
				})
				
			})	
	}

	render() {

		return (
			<div className="recipe">
				<RecipeHeader recipeID={this.state.recipeID}/>
				<RecipeContent recipeID={this.state.recipeID}/>
				<RecipeFooter recipeID={this.state.recipeID}/>
			</div>
		)
	}
}

export default withRouter(Recipe)
