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
                <ul>
                    {this.props.preperation_steps_list.map((step, i) => <li key={i}>{step}</li>)}
                </ul>
            </div>
        );
    }
}
export default PreperationSteps;