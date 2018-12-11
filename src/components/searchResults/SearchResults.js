import React, { Component } from 'react'
import './SearchResults.css'
import axios from 'axios'
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom'

class SearchResults extends Component {

	constructor(props){
		super(props)

		this.state = {
			recipes: []
		}

	}

	componentDidMount(){

		console.log(this.props)
		axios.get('http://localhost:8080/api/v1.0/recipes' + this.props.location.search)
			.then(({ data }) => {
				this.setState({
					recipes: data
				})
			})
	}

	render() {

		return (

			<div className="SearchResults">

				<h3>Your search query found {this.state.recipes.length} results:</h3>

				{this.state.recipes.map((recipe) =>
					<div className="SearchResult" key={recipe._id}>
						<div className="row">
							<div className="col-xs-3"><p>{recipe.name}</p></div>
							<div className="col-xs-3"><p><b>Category: </b>{recipe.category}</p></div>
							<div className="col-xs-3"><p>Likes: {recipe.likes}</p></div>
							<div className="col-xs-3"><img src={recipe.main_image} style={{width: '100px', height: '100px'}}/></div>
						</div>
					</div>
				)}

			</div>
		)
	}
}

export default withRouter(SearchResults)
