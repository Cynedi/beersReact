import React, { Component } from "react";
import Api from "./Api";
import Malt from "./Malt";
import Name from "./Name";
import Auther from "./Auther";
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";



class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <h1>BEERS WEB</h1>
          <ul className="header">
            <li><NavLink exact to="/">By malt</NavLink></li>
            <li><NavLink to="/stuff">By Name</NavLink></li>
            <li><NavLink to="/contact">Auther</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Malt}/>
            <Route path="/stuff" component={Name}/>
            <Route path="/contact" component={Auther}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}


export default App
