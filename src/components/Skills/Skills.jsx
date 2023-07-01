import React from 'react'
import SkillCard from './SkillCard/SkillCard';
import './Skills.css';
import SkillData from '../../Data/SkillData';

const Skills = () => {

  return (
    <div className="app">
    <div className="skill-container">
      {SkillData.map((card) => (
        <SkillCard key={card.id} image={card.image} title={card.title} />
      ))}
    </div>
  </div>
  )
}

export default Skills