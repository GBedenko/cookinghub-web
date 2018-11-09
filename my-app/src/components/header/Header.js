import React, { Component } from 'react';

import './Header.css';

import SearchBox from './searchBox/SearchBox'
import LoginBox from './loginBox/LoginBox'

import cooking_logo from './img/cooking_logo.png'

class Header extends Component {

    constructor(props){
        // Uses parent 'Component' properties variables
        super(props);
        console.log(props)
        
        // Ensures that the functions understand what 'this' object is
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        // Maintains the state of the header's attributes, including the value of the search field in the header
        this.state = {
            searchTerm : '',
            headerStyle:{backgroundColor:this.props.backgroundColor} 
        }
    }

    handleSearchSubmit(event){
        //prevent the form to be submitted to its action url
        event.preventDefault();

        // Use the passed function from the parent
        this.props.onSearchClick(this.state.searchTerm); 
    }

    handleInputChange(event){
        // this.state.searchTerm = event.target.value

        // Update the state of the searchTerm value to whatever was entered in the field
        this.setState({searchTerm : event.target.value})
    }

    checkIfRequired(path) {

        return !(/login$/g.test(path))
    }

    render() {

        return (

            <React.Fragment>
                {this.checkIfRequired(this.props.location.pathname) && 
                
                <div className="header" style={this.state.headerStyle}>
                    <img src={cooking_logo} alt="Yummy Recipes Logo" />
                    <a href="#default" className="logo"> {this.props.title}</a>
                    <div className="header-right">
                        <SearchBox/>
                        <LoginBox/>
                    </div>
                </div> }

            </React.Fragment>
        )            
    }
}
export default Header;