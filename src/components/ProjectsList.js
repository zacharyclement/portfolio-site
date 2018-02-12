import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Parallax } from 'react-parallax';
import Project from './Project';
import '../App.css';
import projects from '../data';
import scrollButton from '../images/downArrowBlack.svg';
import BackgroundImage from '../images/background0.jpg';

// const BackgroundImage = 'https://ak9.picdn.net/shutterstock/videos/6968029/thumb/1.jpg?i10c=img.resize(height:160)';
const buttonStyle = {
  background: 'none', padding: 20, position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%,-50%)', width: '40px',
};
const backgroundImageStyle = {
  display: 'grid', objectFit: 'cover', gridArea: '1/1/-1/-1', height: '100vh',
};

const ProjectsList = () => (

  <div>


    <Parallax
      strength={300}
      bgImage={BackgroundImage}
      blur={-5}
    >
      <div style={backgroundImageStyle}>
        <input type="image" src={scrollButton} className="bounce" style={buttonStyle} onClick={() => scrollToComponent(this.scrollArea, { offset: 1 })} />
      </div>

    </Parallax>

    <section ref={(section) => { this.scrollArea = section; }} >
      <div className="project-list">{projects.map(project => <Project key={project.id} project={project} />)}</div>
    </section>

  </div>
);

export default ProjectsList;
