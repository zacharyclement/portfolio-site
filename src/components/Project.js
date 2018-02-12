import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import Overdrive from 'react-overdrive';
import '../App.css';


const Project = ({ project }) => (
  <Tilt>
    <div className="each-project">
      <Link to={`/${project.id}`}>
        <Overdrive id={project.id}>
          <img src={project.image} className="project-image" alt="" />
        </Overdrive>
      </Link>
      <p className="project-title">{project.title}</p>
    </div>
  </Tilt>
);

export default Project;
