import React, { Component } from 'react';
import './MostViewedRecipes.css'

class MostViewedRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="MostViewedRecipes">
                <h3>Most Viewed Recipes:</h3>
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
export default MostViewedRecipes;