import React, { Component } from 'react';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import '../App.css';

import olympic1 from '../images/olympic1.jpg';
import projects from '../data';

const ProjectsList = () => (
  <div>
    <img src={olympic1} className="background" alt=" " />
    <div className="project-list">{projects.map(project => <Project key={project.id} project={project} />)}</div>

  </div>
);


export default ProjectsList;

