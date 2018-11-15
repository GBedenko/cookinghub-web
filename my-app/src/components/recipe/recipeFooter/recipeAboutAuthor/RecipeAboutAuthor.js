import React, { Component } from 'react';
import './RecipeAboutAuthor.css'

class RecipeAboutAuthor extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="RecipeAboutAuthor">
                <h3>About this Recipe's Author:</h3>
                <p>Username</p>            
            </div>
        );
    }
}
export default RecipeAboutAuthor;