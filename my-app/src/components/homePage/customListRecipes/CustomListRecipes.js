import React, { Component } from 'react';
import './CustomListRecipes.css'

class CustomListRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (
            
            <div className="CustomListRecipes">
                <h3>{this.props.title}</h3>
                <ol>
                    <li>1...</li>
                    <li>2...</li>
                    <li>3...</li>
                    <li>4...</li>
                    <li>5...</li>
                </ol>
            </div>
        );
    }
}
export default CustomListRecipes;