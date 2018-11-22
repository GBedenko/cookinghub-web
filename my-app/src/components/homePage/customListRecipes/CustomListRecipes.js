import React, { Component } from 'react';
import './CustomListRecipes.css'
import Grid from '../grid/Grid'
import Data from '../temp_data'

class CustomListRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            
            <div className="CustomListRecipes">
                <h3>{this.props.title}</h3>
                <div>
                    <Grid items={Data.items} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
                </div>
            </div>
        );
    }
}
export default CustomListRecipes;