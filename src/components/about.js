import React from 'react'
import aboutMeSVG from '../svg/aboutme.svg'

const About = () => {
  return(
    <div>
      <img src={aboutMeSVG} alt="About me icon" width="25%" style={{float: 'right'}}/>
      <h2>About me</h2>
      <p>
        My name is Thomas. I am a December 2020 Graduate from Westminster College. I learned about my passion of software development senior year of highschool.
        I like to work on personal projects, currently working on a Point of Sale/Inventory Management System and in search of a software engineering position. I also like to balance my time with working out, gaming, and photography.
      </p>
    </div>
  )
}

export default About