import React from 'react'
import './experienceCard.css'

const ExperienceCard = ({details}) => {
  return (
    <div className='experience-card'>
      <h6>{details.title}</h6>
      <div className='duration'>{details.date}</div>
      <ul>
        {details.responsibility.map((item)=>(
            <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard
