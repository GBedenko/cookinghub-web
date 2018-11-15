import React, { Component } from 'react';
import './RecipeFooter.css'

import RecipeComments from './recipeComments/RecipeComments'
import RecipeAboutAuthor from './recipeAboutAuthor/RecipeAboutAuthor'
import RecipeCommentBox from './recipeCommentBox/RecipeCommentBox'
import RecipeSharingOptions from'./recipeSharingOptions/RecipeSharingOptions'

class RecipeFooter extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            
            <div className="RecipeFooter">
                <RecipeComments/>
                <RecipeCommentBox/>
                <RecipeAboutAuthor/>
                <RecipeSharingOptions/>
            </div>
        );
    }
}
export default RecipeFooter;