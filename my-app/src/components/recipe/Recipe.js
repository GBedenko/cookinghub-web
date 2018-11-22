import React, { Component } from 'react';
import axios from 'axios'
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

import cooking_logo from './img/recipe_logo.png'

class Recipe extends Component {
  
    constructor(props){
        super(props);
        console.log(this.props.location.pathname.match(/([0-9]+)/g)[0])
        // Save the recipe_id as the url endpoint /recipe/:recipe_id the user is on

        this.state = {
            recipe_id: this.props.location.pathname.match(/([0-9]+)/g)[0]
        };        
    }

    render() {

        return (
            <div className="Recipe">
                <RecipeHeader recipe_image={cooking_logo} recipe_id={this.state.recipe_id}/>
                <RecipeContent recipe_id={this.state.recipe_id}/>
                <RecipeFooter recipe_id={this.state.recipe_id}/>
            </div>
        );
    }
}
export default Recipe;