import React, { Component } from 'react';

import UserDetails from './userDetails/UserDetails'
import UserFavouriteRecipes from './userFavouriteRecipes/UserFavouriteRecipes'
import UserNotifications from './userNotifications/UserNotifications'
import UserRecipes from './userRecipes/UserRecipes'
import UserStatistics from './userStatistics/UserStatistics'


class UserDashboard extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };        
    }

    render() {

        return (
            <div className="UserDashboard">
                <UserDetails />
                <UserFavouriteRecipes/>  
                <UserNotifications/>  
                <UserRecipes/>
                <UserStatistics/>
            </div>
        );
    }
}
export default UserDashboard;