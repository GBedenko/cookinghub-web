import React, { Component } from 'react';

class RecipeSoundFile extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="RecipeSoundFile">
                <h3>Step by Step Video:</h3>
                <video width="320" height="240" controls></video>
            </div>
        );
    }
}
export default RecipeSoundFile;