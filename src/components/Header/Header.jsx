import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="home">
      <span>I'm</span><h1> See Jia Jia,</h1>
      <h3>Frontend Developer.</h3>
      <p>I’m a Information Technology(IT) student studied at University Utara Malaysia(UUM).</p>
      
      <button className='project'><Link to="/Projects">Project</Link></button>
    
    </div>
  )
}

export default Header