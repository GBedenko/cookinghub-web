import React, { Component } from 'react';
import './RecipeHeader.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};

class RecipeHeader extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            <div className="recipeHeader">
                <div id="aboveRecipeDescription" style={divStyle}>
                    <h1>Recipe Name</h1>
                    <h2>Category: Starter</h2>
                </div>
                <div style={divStyle}>
                    <p>Recipe description blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                    </p>
                    <img src={this.props.recipe_image} style={{width: 300, height: 300}}/>
                </div>
                
            </div>
        );
    }
}
export default RecipeHeader;