import React, { Component } from 'react';

class MostRecentRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="MostRecentRecipes">
                <h3>Most Recent Recipes:</h3>
                <ol>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ol>
            </div>
        );
    }
}
export default MostRecentRecipes;