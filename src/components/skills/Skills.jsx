import React, { useState } from 'react'
import './skills.css'
import html from '../assests/html.png'
import java from '../assests/java.png'
import cpp from '../assests/cpp.png'
import c from '../assests/c.png'
import python from '../assests/python.png'
import css from '../assests/css.png'
import js from '../assests/js.png'
import react from '../assests/react.png'
import node from '../assests/node.png'
import mui from '../assests/mui.png'
import restApi from '../assests/api.png'
import git from '../assests/git.png'
import exp from '../assests/express.png'
import mongodb from '../assests/mongodb.png'
import mySQL from '../assests/mySQL.png'
import matlab from '../assests/matlab.png'
import arduino from '../assests/arduino.png'
import jwt from '../assests/jwt.png'
import firebase from '../assests/firebase.png'
import  {SKILLS}  from '../../utils/data'
import SkillCard from './SkillCard'
import SkillsInfoCard from './skillsInfoCard/SkillsInfoCard'
import tailwind from '../assests/tailwind.png'


const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data)=>{
    setSelectedSkill(data);
  }
  const language = [
    java, cpp, c, python, js, html, css, matlab, arduino
  ]
  const framework = [
    react, node, mui, tailwind, restApi, git, exp, jwt
  ]
  const database = [
    mongodb, mySQL, firebase
  ]
  return (
    <div className='main-container'>
      <h2 style={{ marginRight: '135px' }}>Language</h2>
      <div className='skills'>
        {language.map((language, index) => (
          <div key={index} className="skill-item">
            <img src={language} alt={`language ${index + 1}`} className="logo" />
          </div>
        ))}
      </div>
      <h2 style={{ marginRight: '99px' }}>Framework</h2>
      <div className='skills'>
        {framework.map((framework, index) => (
          <div key={index} className="skill-item">
            <img src={framework} alt={`framework ${index + 1}`} className="logo" />
          </div>
        ))}
      </div>
      <h2 style={{ marginRight: '99px' }}>Database</h2>
      <div className='skills'>
        {database.map((database, index) => (
          <div key={index} className="skill-item">
            <img src={database} alt={`database ${index + 1}`} className="logo" />
          </div>
        ))}
      </div>
      <br style={{border: "1px solid #fff", height: '2px'}}/>

      <div className='skills-container'>
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
          <div className='skilld'>
            {SKILLS.map((item)=>(
              <SkillCard 
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={()=>{
                  handleSelectSkill(item)
                }}
              />
            ))}
          </div>
          <div className='skill-info'>
            <SkillsInfoCard 
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
