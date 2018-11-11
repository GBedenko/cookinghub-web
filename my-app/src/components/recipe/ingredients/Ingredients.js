import React, { Component } from 'react';

class Ingredients extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
    }
    
    render() {

        return (
            <div className="Ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    {this.props.ingredients_list}
                </ul>
            </div>
        );
    }
}
export default Ingredients;