import React, { Component } from 'react';

class UserRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="UserRecipes">
                <h4>Your Recipes:</h4>
                <ul>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
            </div>
        );
    }
}
export default UserRecipes;