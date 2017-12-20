import React, { Component } from "react";
import Blond from "./Blond";
import Amber from "./Amber";
import Brown from "./Brown";
import Header from "./Header";
import logo from './logo.svg';
import beers from './beers.jpg';
import './App.css';
import './index.css';
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



          <ul className="header">
            <li><NavLink exact to="/">Blond Beers</NavLink></li>
            <li><NavLink to="/Amber">Amber Beers</NavLink></li>
            <li><NavLink to="/Brown">Brown Beers</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Blond}/>
            <Route path="/Amber" component={Amber}/>
            <Route path="/Brown" component={Brown}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}


export default App;
