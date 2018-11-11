import React, { Component } from 'react';

import './Recipe.css'
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

import cooking_logo from './img/recipe_logo.png'

class Recipe extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };        
    }

    render() {

        return (
            <div className="Recipe">
                <RecipeHeader recipe_image={cooking_logo}/>
                <RecipeContent/>
                <RecipeFooter/>
            </div>
        );
    }
}
export default Recipe;