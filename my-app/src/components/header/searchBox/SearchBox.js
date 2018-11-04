import React, { Component } from 'react';

class SearchBox extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {

        return (
        <div className="SearchBox">
            <form action="">
                <input type="text" placeholder="Search.." name="txtSearch" />
                <button type="submit">Search</button>
            </form>
        </div>
        );
    }
}
export default SearchBox;