import React, { Component } from 'react';
import './FilterCategoryRecipes.css'

class FilterCategoryRecipes extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    render() {

        return (

            <div className="FilterCategoryRecipes">
                <h3>Search Recipes by Category:</h3>
                <form action="/action_page.php">
                    <select name="cars">
                        <option value="volvo">Starters</option>
                        <option value="saab">Main Courses</option>
                        <option value="fiat">Desserts</option>
                        <option value="audi">Breakfast</option>
                        <option value="audi">Lunch</option>
                        <option value="audi">Side Dishes</option>
                        <option value="audi">Beverages</option>
                    </select>
                </form>
                <button type="submit">Submit</button>
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
export default FilterCategoryRecipes;