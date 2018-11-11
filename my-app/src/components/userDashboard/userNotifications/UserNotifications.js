import React, { Component } from 'react';
import './UserNotifications.css'

class UserNotifications extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="UserNotifications">
                <h4>Notifications:</h4>
                <table>
                    <tr>
                        <th>Summary</th>
                        <th>Recipe Link</th>
                    </tr>
                    <tr>
                        <td>A user you follow uploaded a recipe</td>
                        <td><a href="#">Recipe</a></td>
                    </tr>
                    <tr>
                        <td>A user you follow uploaded a recipe</td>
                        <td><a href="#">Recipe</a></td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default UserNotifications;