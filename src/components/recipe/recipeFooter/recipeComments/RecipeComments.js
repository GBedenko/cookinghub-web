import React, { Component } from 'react'
import './RecipeComments.css'

class RecipeComments extends Component {

	constructor(props){
		super(props)

		this.state = {
		}

	}

	render() {

		return (

			<div className="RecipeComments">
				<p>Comment 1...</p><a href="#">Reply to this comment</a>
				<p>Comment 2...</p><a href="#">Reply to this comment</a>
				<p>Comment 3...</p><a href="#">Reply to this comment</a>
				<p>Comment 4...</p><a href="#">Reply to this comment</a>
				<p>Comment 5...</p><a href="#">Reply to this comment</a>
			</div>
		)
	}
}
export default RecipeComments
