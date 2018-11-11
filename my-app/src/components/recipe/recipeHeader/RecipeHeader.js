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
                <div class="center">
                    <div class="row">
                        <div class="column">
                            <div class="name-container">
                                <h1>Recipe Name</h1>
                            </div>
                            <div class="category-container">
                                <h2>Category: Starter</h2>
                            </div>
                        </div>
                        <div class="column">
                            <div class="recipe-main-image-container">
                                <img src={this.props.recipe_image} style={{width: 200, height: 200}} alt="blah"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="description-container">
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