import React, { Component } from 'react';
import axios from 'axios'
import RecipeHeader from './recipeHeader/RecipeHeader'
import RecipeContent from './recipeContent/RecipeContent'
import RecipeFooter from './recipeFooter/RecipeFooter'

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
                <RecipeContent/>
                <RecipeFooter/>
            </div>
        );
    }
}
export default Recipe;