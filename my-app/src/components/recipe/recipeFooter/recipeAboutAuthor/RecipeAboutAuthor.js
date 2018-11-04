import React, { Component } from 'react';

class recipeAboutAuthor extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="recipeAboutAuthor">
                <h3>About this Recipe's Author:</h3>
                <p>Username</p>            
            </div>
        );
    }
}
export default recipeAboutAuthor;