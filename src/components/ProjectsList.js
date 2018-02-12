import React, { Component } from 'react';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import '../App.css';
import olympic3 from '../images/olympic3.jpg';
import projects from '../data';
import scrollToComponent from 'react-scroll-to-component';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import scrollButton from '../images/downArrowBlack.svg';

const BackgroundImage = 'https://static.pexels.com/photos/547114/pexels-photo-547114.jpeg';
const buttonStyle = {
  background: 'none', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '40px',
};
const backgroundImageStyle = {
  display: 'grid', objectFit: 'cover', gridArea: '1/1/-1/-1', height: '100vh', objectPosition: '', width: '100%',
};

const ProjectsList = () => (

  <div>


    <Parallax
      strength={100}
      bgImage={BackgroundImage}
      blur={-5}
    >
      <div style={backgroundImageStyle}>
        <img src={scrollButton} style={buttonStyle} onClick={() => scrollToComponent(this.scrollArea, { offset: 1 })} />


      </div>

    </Parallax>

    <section ref={(section) => { this.scrollArea = section; }} >
      <div className="project-list">{projects.map(project => <Project key={project.id} project={project} />)}</div>
    </section>

  </div>
);

const coverPage = styled.div`
  height: 200px;
`;


export default ProjectsList;
