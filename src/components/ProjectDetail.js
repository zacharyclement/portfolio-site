import React, { Component } from 'react';
import '../App.css';
import App from '../App';
import projects from '../data';

const Test = ({ match }) => (
  <div>
    <h1>{match.params.id}</h1>
    <p>hello</p>
    <p>{match.params.title}</p>
  </div>
);

export default Test;
