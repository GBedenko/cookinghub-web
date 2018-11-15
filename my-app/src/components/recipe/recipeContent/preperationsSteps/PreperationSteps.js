import React, { Component } from 'react';
import './PreperationSteps.css'

class PreperationSteps extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            
            <div className="preperation-steps-container">
                <h3>Preperations Steps:</h3>
                <ol>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ol>
            </div>
        );
    }
}
export default PreperationSteps;