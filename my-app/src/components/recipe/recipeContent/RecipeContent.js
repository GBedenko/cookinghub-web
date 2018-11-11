import React, { Component } from 'react';
import './RecipeContent.css'
import Ingredients from './ingredients/Ingredients';
import PreperationSteps from './preperationsSteps/PreperationSteps';
import RecipeVideo from './recipeVideo/RecipeVideo'
import RecipeSoundFile from './recipeSoundFile/RecipeSoundFile'

class RecipeContent extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            
            <div className="RecipeContent">
                <Ingredients/>  
                <PreperationSteps/>  
                <RecipeVideo/>
                <RecipeSoundFile/>
            </div>
        );
    }
}
export default RecipeContent;