import React, { Component } from 'react';

class UserDetails extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="UserDetails">
                <h4>User Details:</h4>
                <ul>
                    <li>Username</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
                <img src={this.props.img} alt="User Profile" style={{width: 50, height: 50}}/>
            </div>
        );
    }
}
export default UserDetails;