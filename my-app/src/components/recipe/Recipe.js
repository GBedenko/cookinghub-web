import React, { Component } from 'react';
import axios from 'axios'
import RecipeHeader from './recipeHeader/RecipeHeader'
import Ingredients from './ingredients/Ingredients';
import PreperationSteps from './preperationsSteps/PreperationSteps';
import RecipeVideo from './recipeVideo/RecipeVideo'
import RecipeSoundFile from './recipeSoundFile/RecipeSoundFile'
import RecipeCommentBox from './recipeFooter/recipeCommentBox/RecipeCommentBox';
import RecipeAboutAuthor from './recipeFooter/recipeAboutAuthor/RecipeAboutAuthor';
import RecipeSharingOptions from './recipeFooter/recipeSharingOptions/RecipeSharingOptions';

import cooking_logo from './img/recipe_logo.png'

class Recipe extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            dataloaded: false,
            recipe_data: {}
        };        
    }

    componentDidMount(){
        const recipeURI = this.props.location.pathname
        axios
          .get('http://localhost:8080/api/v1.0/' + recipeURI)
          .then(({ data })=> {
            console.log(data);
            this.setState({
                recipe_data: data,
                dataloaded: true});
          })
          .catch((err)=> {})
    }

    render() {

        return (
            <div className="Recipe">
                <RecipeHeader recipe_image={cooking_logo}/>
                <Ingredients/>  
                <PreperationSteps/>  
                <RecipeVideo/>
                <RecipeSoundFile/>
                <RecipeCommentBox/>  
                <RecipeAboutAuthor/>   
                <RecipeSharingOptions/>
            </div>
        );
    }
}
export default Recipe;