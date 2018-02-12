import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import '../App.css';
import projects from '../data';


class ProjectDetail extends Component {
  componentWillMount() {
    this.myFunction();
  }

  myFunction = () => {
    projects.forEach((project) => {
      console.log(project.id);
      console.log(this.props.match.params.id);
      if (project.id == this.props.match.params.id) {
        console.log(project.title);
        this.setState({
          id: project.id,
          title: project.title,
          image: project.image,
          desc: project.desc,

        });
      }
    });
  };


  render() {
    return (
      <div className="project-detail">
        <h1>{this.props.match.params.id}</h1>
        <h1>{this.state.title}</h1>
        <Overdrive id={this.state.id}>
          <img src={this.state.image} className="project-image" alt="" />
        </Overdrive>
        <p>{this.state.desc}</p>

      </div>

    );
  }
}

export default ProjectDetail;
