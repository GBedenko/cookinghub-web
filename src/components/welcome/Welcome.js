import React, { Component } from 'react'
import './Welcome.css'
import {BrowserRouter as Redirect} from 'react-router-dom'

class Welcome extends Component {

	constructor(props){
		super(props)

		this.state = {
		}

	}

	render() {

		if(this.props.authHeader) {
			return <Redirect to={'/app/all_recipes'}/>
		} else {
			return <Redirect to={'/login'}/>
		}
	}
}
export default Welcome
