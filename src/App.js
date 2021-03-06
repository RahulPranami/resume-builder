import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Resume from './components/Resume';

import logo from './logo.svg';
import './App.css';


export default class App extends
Component {
  render(){
    return(
      <Router>
        <div>
          <Route path='/' exact component={Home}/>
          <Route path='/:username' component={Resume}/>
        </div>
      </Router>
    )
  }

}