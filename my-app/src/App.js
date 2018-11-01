//import react
import React, { Component } from 'react';
//import the css for the app
import './App.css';
//import the Header component
import Header from './components/header/Header';
import cooking_logo from './cooking_logo.png'; 

//define a new class for the App
class App extends Component {

  render() {
    //this app will render the header component
    return (
      <div>
      <Header title="Yummy Recipe Blog" logo={cooking_logo} onSearchClick={this.onSearch} backgroundColor="#7FFF2B"/>
      </div>
    );
  }

  onSearch(term){  
    console.log("search on term:" + term);
  }

}

//finally do not forget to export the component
export default App;