import React, { Component } from 'react';
import './HighestRatedRecipes.css'
import Grid from '../grid/Grid'

class HighestRatedRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            recipes_list: []
        };
        
    }

    componentDidMount(){
        this.setState({ recipe_list: this.props.recipes_list});
    }

    render() {

        return (

            <div className="HighestRatedRecipes">
                <h3>Highest Rated Recipes:</h3>
                <div>
                    <Grid items={this.state.recipes_list} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={4} />
                </div>
            </div>
        );
    }
}
export default HighestRatedRecipes;