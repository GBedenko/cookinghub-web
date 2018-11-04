import React, { Component } from 'react';

class RecipeSharingOptions extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            <div className="RecipeSharingOptions">
                <ul>
                    <li>Follow this Author</li>
                    <li>Rate this Recipe</li>
                    <li>Recommend this Recipe to another user</li>
                    <li>Share this Recipe to Social Media</li>
                </ul>
            </div>
        );
    }
}
export default RecipeSharingOptions;