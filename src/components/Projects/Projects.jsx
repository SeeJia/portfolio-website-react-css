import React from 'react'
import ProjectData from '../../Data/ProjectData';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <div className="app">
    <div className="project-container">
      {ProjectData.map((card) => (
        <ProjectCard key={card.id} image={card.image} title={card.title} description={card.description} link={card.link}/>
      ))}
    </div>
  </div>
  )
}

export default Projects