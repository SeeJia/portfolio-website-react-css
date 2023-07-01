import React from 'react'
import './ProjectCard.css';

const ProjectCard = ({image,title,description,link}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} alt='link'>Demo</a>
    </div>
  )
}

export default ProjectCard