import React, { Component } from 'react';
import './HighestRatedRecipes.css'
import Grid from '../grid/Grid'
import Data from '../temp_data'

class HighestRatedRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="HighestRatedRecipes">
                <h3>Highest Rated Recipes:</h3>
                <div>
                    <Grid items={Data.items} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
                </div>
            </div>
        );
    }
}
export default HighestRatedRecipes;