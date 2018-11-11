import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/Header'
import HomePage from './components/homePage/HomePage'
import Recipe from './components/recipe/Recipe'
import UserDashboard from './components/userDashboard/UserDashboard'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import CreateRecipe from './components/createRecipe/CreateRecipe';


ReactDOM.render(<Router>
                    <React.Fragment>
                        <Route path="/" component={Header}/>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/recipe" component={Recipe}/>
                        <Route path="/user" component={UserDashboard}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Signup}/>
                        <Route path="/createRecipe" component={CreateRecipe}/>
                    </React.Fragment>
                </Router>, document.getElementById('root'));

serviceWorker.unregister();
