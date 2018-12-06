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
                <div className="EmbeddedVideo">
                    <iframe width="640" height="480" src={this.props.video} controls></iframe>
                </div>
            </div>
        );
    }
}
export default RecipeVideo;