import React from 'react'
import Skill from './skill'
import javascriptSVG from '../svg/javascript.svg'
import reactSVG from '../svg/react.svg'
import htmlSVG from '../svg/html.svg'
import cssSVG from '../svg/css.svg'
import pythonSVG from '../svg/python.svg'
import postgreSQLSVG from '../svg/postgreSQL.svg'
import resumeStyles from './resume.module.scss'

const Resume = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>
          <h2>Eductation</h2>
          <ul>
            <li>
              <h3>Westminster College</h3>
              <h5>&emsp;August 2019 - December 2020</h5>
              <p>&emsp;B.S. - Computer Science</p>
            </li>
            <li>
              <h3>Salt Lake Community College</h3>
              <h5>&emsp;August 2016 - June 2019</h5>
              <p>&emsp;A.S. - General Studies</p>
              <p></p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Work</h2>
          <ul>
            <li>
              <h3>Gossip Tapioca</h3>
              <h5>Jan 2019 - Dec 2020</h5>
              <p>Assistant Manager</p>
            </li>
            <li>
              <h3>Westminster College</h3>
              <h5>September 2019 - May 2020</h5>
              <p>I.T. Help Desk Technician</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Skills</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Skill skillIcon={javascriptSVG} skillName="Javascript" />
          <Skill skillIcon={reactSVG} skillName="ReactJS" />
          <Skill skillIcon={htmlSVG} skillName="HTML 5" />
          <Skill skillIcon={cssSVG} skillName="CSS 3" />
          <Skill skillIcon={pythonSVG} skillName="Python 3" />
          <Skill skillIcon={postgreSQLSVG} skillName="PostgreSQL" />
        </div>
      </div>
      <div style={{ marginBottom: '20px' }} />
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
        <a href="https://github.com/ttangcs/thomastang/raw/master/src/content/Resume_Jan2020.pdf" className={resumeStyles.downloadButton} download>Download CV</a>
        <a href="mailto:ttangcs@gmail.com" className={resumeStyles.contactButton} download>Contact</a>
      </div>
    </div>

  )
}

export default Resume