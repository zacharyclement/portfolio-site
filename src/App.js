import React, { Component } from 'react';
// Replace BrowserRouter with HashRouter to work on gitpages
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProjectsList from './components/ProjectsList';
import ProjectDetail from './components/ProjectDetail';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <p className="App-title">ZC</p>
      </header>
      <Switch>
        <Route exact path="/" component={ProjectsList} />
        <Route path="/:id" component={Test} />
      </Switch>
    </div>
  </Router>
);


export default App;

const Test = ({ match }) => (
  <div>
    <h1>{match.params.id}</h1>
    <p>hello</p>
    <p>{match.params.title}</p>
  </div>
);
