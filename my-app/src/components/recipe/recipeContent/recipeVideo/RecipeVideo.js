import React, { Component } from 'react';
import './RecipeVideo.css'

class RecipeVideo extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="RecipeVideo">
                <h3>Step by Step Video:</h3>
                <video width="320" height="240" controls></video>
            </div>
        );
    }
}
export default RecipeVideo;