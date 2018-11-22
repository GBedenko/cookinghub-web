import React, { Component } from 'react';
import axios from 'axios'
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

import cooking_logo from './img/recipe_logo.png'

class Recipe extends Component {
  
    constructor(props){
        super(props);
        const recipe_id_from_url = this.props.location.pathname.match(/\/([0-9a-fA-F]+)/g)[0].substr(1)
        // Save the recipe_id as the url endpoint /recipe/:recipe_id the user is on

        this.state = {
            recipe_id: recipe_id_from_url
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