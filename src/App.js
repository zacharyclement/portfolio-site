import React, { Component } from 'react';
// Replace BrowserRouter with HashRouter to work on gitpages
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProjectsList from './components/ProjectsList';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';


const App = () => (
  <Router>
    <div className="App">
      <header>
        <div><NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink></div>
        <nav className="App-nav">
          <ul className="header-links">
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="zacharyclement.blogspot.com/">Blog</NavLink></li>
          </ul>

          <div>
            <Route path="/About" component={About} />
          </div>

        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={ProjectsList} />
        <Route path="/:id" component={ProjectDetail} />
      </Switch>
    </div>
  </Router>
);


export default App;
