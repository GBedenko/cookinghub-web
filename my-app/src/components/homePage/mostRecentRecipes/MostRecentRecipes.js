import React, { Component } from 'react';
import './MostRecentRecipes.css'
import Grid from '../grid/Grid'

class MostRecentRecipes extends Component {
  
    constructor(props){
        super(props)
    }

    render() {

        return (

            <div className="MostRecentRecipes">
                <h3>Most Recent Recipes:</h3>
                <div>
                    <Grid items={this.props.recipes_list} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
                </div>
            </div>
        );
    }
}
export default MostRecentRecipes;