import React, { Component } from 'react';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import '../App.css';
import olympic1 from '../images/olympic1.jpg';

import projects from '../data';

const ProjectsList = () => (
  <div>
    <div className="grid">
      <img src={olympic1} className="cover-image" alt=" " />
      <main>
        <h1>I am Zach</h1>
        <p>check out the things I make</p>
      </main>
    </div>
    <div className="project-list">{projects.map(project => <Project key={project.id} project={project} />)}</div>

  </div>
);


export default ProjectsList;

