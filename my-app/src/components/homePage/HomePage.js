import React, { Component } from 'react';

import FilterCategoryRecipes from './filterCategoryRecipes/FilterCategoryRecipes'
import HighestRatedRecipes from './highestRatedRecipes/HighestRatedRecipes'
import MostRecentRecipes from './mostRecentRecipes/MostRecentRecipes'
import MostViewedRecipes from './mostViewedRecipes/MostViewedRecipes'
import './HomePage.css';

class HomePage extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };        
    }

    render() {

        return (

            <div className="HomePage">
                <div className="row">
                    <div className="box">
                        <FilterCategoryRecipes />                    
                    </div>
                    <div className="box">
                        <HighestRatedRecipes />
                    </div>

                </div>
                <div className="row">
                    <div className="box">
                        <MostRecentRecipes />                      
                    </div>
                    <div className="box">
                        <MostViewedRecipes />                    
                    </div>
                </div>

            </div>
            
        );
    }
}
export default HomePage;