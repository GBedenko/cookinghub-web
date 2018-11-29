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
             .then(({ data })=> {
                console.log(data)
                    this.setState({
                        all_recipes: data
                    });
                })
             .catch((err)=> {})
    }

    render() {

        return (

            <div className="HomePage">
                    <FilterCategoryRecipes />  
                    <HighestRatedRecipes recipes_list={this.state.all_recipes} />
                    <MostRecentRecipes /> 
                    <MostViewedRecipes /> 
                    <CustomListRecipes title="Your Favourite Recipes:" />  
                    <CustomListRecipes title="Recipes from Authors you Follow:" />  
                    <CustomListRecipes title="Recipes you created:" />  
                    <CustomListRecipes title="Recipes Custom List Name:" />  
            </div>            
        );
    }
}
export default HomePage;