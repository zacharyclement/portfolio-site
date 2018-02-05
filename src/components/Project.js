import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Project = ({ project }) => (
  <div>
    <Link to={`/${project.id}`}>
      <img src={project.image} className="project-image" alt="" />
    </Link>
    <p>{project.title}</p>
  </div>
);

export default Project;
