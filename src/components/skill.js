import React from 'react'

const Skill = ({skillIcon, skillName}) => {
  console.log(skillIcon)
  return(
    <div style={{textAlign: 'center'}}>
      <img width='50%' src={skillIcon} alt={skillName} />
      <h4>{skillName}</h4>
    </div>
  )
}

export default Skill