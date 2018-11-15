import React, { Component } from 'react';
import './MostRecentRecipes.css'

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
                    <li>1...</li>
                    <li>2...</li>
                    <li>3...</li>
                    <li>4...</li>
                    <li>5...</li>
                </ol>
            </div>
        );
    }
}
export default MostRecentRecipes;