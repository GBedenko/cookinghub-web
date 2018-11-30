import React, { Component } from 'react'
import axios from 'axios'

import './HomePage.css';

import FilterCategoryRecipes from './filterCategoryRecipes/FilterCategoryRecipes'
import HighestRatedRecipes from './highestRatedRecipes/HighestRatedRecipes'
import MostRecentRecipes from './mostRecentRecipes/MostRecentRecipes'
import MostViewedRecipes from './mostViewedRecipes/MostViewedRecipes'
import CustomListRecipes from './customListRecipes/CustomListRecipes';

class HomePage extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            all_recipes: []
        };        
    }

    componentDidMount(){

        axios.get('http://localhost:8080/api/v1.0/recipes')
             .then( resp => {
                    this.setState({
                        all_recipes: resp.data
                    });
                })
             .catch((err)=> {})
    }

    render() {
        console.log("all recipes:")
        console.log(this.state.all_recipes)

        return (

            <div className="HomePage">
                    <FilterCategoryRecipes recipes_list={this.state.all_recipes} />  
                    <HighestRatedRecipes recipes_list={this.state.all_recipes} />
                    <MostRecentRecipes recipes_list={this.state.all_recipes} /> 
                    <MostViewedRecipes recipes_list={this.state.all_recipes} /> 
                    <CustomListRecipes title="Your Favourite Recipes:" recipes_list={this.state.all_recipes} />  
                    <CustomListRecipes title="Recipes from Authors you Follow:" recipes_list={this.state.all_recipes} />  
                    <CustomListRecipes title="Recipes you created:" recipes_list={this.state.all_recipes} />  
                    <CustomListRecipes title="Recipes Custom List Name:" recipes_list={this.state.all_recipes} />  
            </div>            
        );
    }
}
export default HomePage;