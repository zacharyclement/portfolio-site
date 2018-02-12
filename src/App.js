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
import scrollToComponent from 'react-scroll-to-component';
import StickyHeader from 'react-sticky-header';


const App = () => (

  <Router>
    <div className="App">
      <header>
        <div><NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink></div>

        <nav className="App-nav">
          <ul className="header-links">
            <li><a href="#" onClick={() => scrollToComponent(this.scrollArea, { offset: 300 })}>Projects</a></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>
        </nav>
      </header>


      <section ref={(section) => { this.scrollArea = section; }} >
        <Switch>
          <Route exact path="/" component={ProjectsList} />
          <Route path="/About" component={About} />
          <Route path="/Blog" component={() => window.location = 'https://zacharyclement.blogspot.com'} />
          <Route path="/:id" component={ProjectDetail} />
        </Switch>

      </section>


      <footer>
        <div />
      </footer>

    </div>
  </Router>
);


export default App;
