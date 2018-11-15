import React, { Component } from 'react';

import FilterCategoryRecipes from './filterCategoryRecipes/FilterCategoryRecipes'
import HighestRatedRecipes from './highestRatedRecipes/HighestRatedRecipes'
import MostRecentRecipes from './mostRecentRecipes/MostRecentRecipes'
import MostViewedRecipes from './mostViewedRecipes/MostViewedRecipes'
import './HomePage.css';
import CustomListRecipes from './customListRecipes/CustomListRecipes';

class HomePage extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };        
    }

    render() {

        return (

            <div className="HomePage">
                    <FilterCategoryRecipes />  
                    <HighestRatedRecipes />
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