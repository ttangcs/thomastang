import React from 'react';
import landingStyles from './landing.module.scss'


const Landing = () => {

  return(
    <div className={landingStyles.landingContainer}>
      <div>
        <h1>Thomas Tang</h1>
        <h2>Software Developer</h2>
        <h4>Salt Lake City, Utah</h4>
      </div>
    </div>
  )
}

export default Landing