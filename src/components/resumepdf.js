import React from 'react'
import Resume from '../images/Resume.pdf'
import ResumePDFStyles from './resumepdf.module.scss'

const ResumePDF = () => {
  return(
    <div>
        <object data= {Resume} type="application/pdf" alt="resume" className={ResumePDFStyles.pdf}/>
    </div>

  )
}

export default ResumePDF