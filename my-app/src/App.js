// Import React and the Component class
import React, { Component } from 'react';

// Import the CSS for this component
import './App.css';

import cooking_logo from './img/cooking_logo.png';

// Import other component this one will use
import Header from './components/header/Header';
import RecipeHeader from './components/recipe/recipeHeader/RecipeHeader'
import Ingrediants from './components/recipe/ingrediants/Ingrediants';
import PreperationSteps from './components/recipe/preperationsSteps/PreperationSteps';
import RecipeVideo from './components/recipe/recipeVideo/RecipeVideo'
import RecipeSoundFile from './components/recipe/recipeSoundFile/RecipeSoundFile'

class App extends Component {

  // Function to be passed to Header component
  onSearch(term){
    console.log("search on term:" + term);
  }
  
  // Function to be passsed to Grid component
  handleThumbnailClicked(key){    
    console.log("item with id:" + key + " was clicked");
  } 

  render() {
    // Render the App component and the other components it requires
    return (
      <div>
        <div class="recipe">
          <Header title="Yummy Recipes" logo={cooking_logo} onSearchClick={this.onSearch} backgroundColor="#339FFF" />
          <RecipeHeader recipe_image={cooking_logo}/>
          <Ingrediants/>  
          <PreperationSteps/>  
          <RecipeVideo/>
          <RecipeSoundFile/>               
        </div>
      </div>
    );
  }
  
}

// Export the component to be used by index
export default App;