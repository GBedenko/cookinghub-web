import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/Header'
import Recipe from './components/recipe/Recipe'
import UserDashboard from './components/userDashboard/UserDashboard'

import cooking_logo from './img/cooking_logo.png'

ReactDOM.render(<Router>
                    <React.Fragment>
                        <Header title="Yummy Recipes" logo={cooking_logo}/>
                        <Route path="/home" component={Recipe}/>
                        <Route path="/recipes" component={Recipe}/>
                        <Route path="recipes/:id" component={Recipe}/>
                        <Route path="users/:id" component={UserDashboard}/>
                    </React.Fragment>
                </Router>, document.getElementById('root'));
                
serviceWorker.unregister();
