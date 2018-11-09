import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/Header'
import Recipe from './components/recipe/Recipe'
import UserDashboard from './components/userDashboard/UserDashboard'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'


ReactDOM.render(<Router>
                    <React.Fragment>
                        <Route path="/" component={Header}/>
                        <Route path="/" exact component={Recipe}/>
                        <Route path="/home" component={Recipe}/>
                        <Route path="/recipe" component={Recipe}/>
                        <Route path="/user" component={UserDashboard}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Signup}/>
                    </React.Fragment>
                </Router>, document.getElementById('root'));

serviceWorker.unregister();
