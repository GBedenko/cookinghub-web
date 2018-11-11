import React, { Component } from 'react';
import './Ingredients.css'

class Ingredients extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            <div class="ingredients-container">
                <h3>Ingredients:</h3>
                <ul>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
            </div>
        );
    }
}
export default Ingredients;