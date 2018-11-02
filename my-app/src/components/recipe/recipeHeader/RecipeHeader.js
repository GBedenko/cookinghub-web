import React, { Component } from 'react';
import './RecipeHeader.css';

class RecipeHeader extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            <div className="recipeHeader">
                <h1>Recipe Name</h1>
                <h2>Category: Starter</h2>
                <p>Recipe description blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                </p>
                <img src={this.props.recipe_image} style={{width: 100, height: 100}} alt="blah"/>
            </div>
        );
    }
}
export default RecipeHeader;