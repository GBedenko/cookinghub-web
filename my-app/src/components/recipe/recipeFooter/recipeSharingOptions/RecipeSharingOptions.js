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
                    <li><a href="#">Add Recipe to my Favourites</a></li>
                    <li><a href="#">Rate this Recipe</a></li>
                    <li><a href="#">Recommend this Recipe to another user</a></li>
                    <li><a href="#">Follow this Author</a></li>
                    <li><a href="#">Share this Recipe to Social Media</a></li>
                    <li><a href="#">Report this Recipe to administrator</a></li>
                </ul>
            </div>
        );
    }
}
export default RecipeSharingOptions;