import React, { Component } from 'react';
import './MostViewedRecipes.css'
import Grid from '../grid/Grid'
import Data from '../temp_data'

class MostViewedRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    handleThumbnailClicked(key){
        
        console.log("item with id:" + key + " was clicked");
    }
    
    render() {

        return (

            <div className="MostViewedRecipes">
                <h3>Most Viewed Recipes:</h3>
                <div>
                    <Grid items={Data.items} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
                </div>
            </div>
        );
    }
}
export default MostViewedRecipes;