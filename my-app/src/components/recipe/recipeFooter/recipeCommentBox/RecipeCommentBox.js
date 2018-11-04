import React, { Component } from 'react';

class recipeCommentBox extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="recipeCommentBox">
                <h4>Comment on this Recipe:</h4>
                <textarea rows="4" cols="50" name="comment" form="usrform">Enter text here...</textarea>
            </div>
        );
    }
}
export default recipeCommentBox;