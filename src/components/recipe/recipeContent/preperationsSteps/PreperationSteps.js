// Import React
import React, { Component } from 'react'

// Import CSS
import './PreperationSteps.css'

// PreperationSteps component is an ordered list for the method of the recipe
class PreperationSteps extends Component {

	constructor(props){

		// Uses parent 'React Component' properties variables
		super(props)
	}

	render() {

		return (

			// Component maps the steps list passed from parent to a list of ordered list items 
			<div className="preperation-steps-container">
				<h3>Preperations Steps:</h3>
				<ol>
					{this.props.preperation_steps_list.map((step, i) => <li key={i}>{step}</li>)}
				</ol>
			</div>
		)
	}
}

// Export component so it can be imported
export default PreperationSteps
