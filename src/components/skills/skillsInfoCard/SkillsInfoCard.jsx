import React from 'react'
import './skillsInfoCard.css'


const SkillsInfoCard = ({heading, skills}) => {
    return (
      <div className='skill-info-card'>
        <h6>{heading}</h6>
        <div className='skills-info-content'>
          {skills.map((item, index) => (
            <React.Fragment key={`skill ${index}`}>
              <div className='skilled-info'>
                <p>{item.skill}</p>
                <p className='percentage'>{item.percentage}</p>
              </div>
              <div className='skill-progress-bg'>
                <div className='skill-progress' style={{width: `${item.percentage}%`,
                  background: (item.percentage)}}></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  }
  
  export default SkillsInfoCard
  
  
