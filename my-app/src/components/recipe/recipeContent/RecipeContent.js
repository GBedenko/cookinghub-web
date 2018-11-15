import React, { Component } from 'react';
import axios from 'axios'

import './RecipeContent.css'

import Ingredients from './ingredients/Ingredients';
import PreperationSteps from './preperationsSteps/PreperationSteps';
import RecipeVideo from './recipeVideo/RecipeVideo'
import RecipeSoundFile from './recipeSoundFile/RecipeSoundFile'

class RecipeContent extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            name: "",
            ingredients: [],
            steps: []
        };
        
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api/v1.0/recipes/5be609f20905f72f0493cfa7')
             .then(({ data })=> {
                console.log(data)
                    this.setState({
                        name: data.name,
                        ingredients: data.ingredients,
                        steps: data.steps});
                })
             .catch((err)=> {})
    }

    render() {

        return (
            
            <div className="RecipeContent">
                <Ingredients ingredients_list={this.state.ingredients}/>  
                <PreperationSteps preperation_steps_list={this.state.steps}/>  
                <RecipeVideo/>
                <RecipeSoundFile/>
            </div>
        );
    }
}
export default RecipeContent;