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
            <div className="RecipeHeader">
                <div className="center">
                    <div className="row">
                        <div className="column">
                            <div className="name-container">
                                <h1>Recipe Name</h1>
                            </div>
                            <div className="category-container">
                                <h2>Category: Starter</h2>
                            </div>
                        </div>
                        <div className="column">
                            <div className="recipe-main-image-container">
                                <img src={this.props.recipe_image} style={{width: 200, height: 200}} alt="blah"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="description-container">
                    <p>Recipe description blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                    </p>
                </div>
                
            </div>
        );
    }
}
export default RecipeHeader;