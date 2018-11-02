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
                <h3>Step by Step Audio Instructions:</h3>
                <audio controls></audio>
            </div>
        );
    }
}
export default RecipeSoundFile;