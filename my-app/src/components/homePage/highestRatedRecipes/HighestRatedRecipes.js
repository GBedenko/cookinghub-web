import React, { Component } from 'react';
import './HighestRatedRecipes.css'

class HighestRatedRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="HighestRatedRecipes">
                <h3>Highest Rated Recipes:</h3>
                <ol>
                    <li>1...</li>
                    <li>2...</li>
                    <li>3...</li>
                    <li>4...</li>
                    <li>5...</li>
                </ol>
            </div>
        );
    }
}
export default HighestRatedRecipes;