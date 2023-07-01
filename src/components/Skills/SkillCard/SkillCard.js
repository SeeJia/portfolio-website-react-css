import React from 'react'
import './skillcard.css';

const SkillCard = ({image, title}) => {
  return (
    <div className="skill-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}

export default SkillCard