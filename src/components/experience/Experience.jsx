import React, { useRef } from 'react'
import './experience.css'
import { EXPERIENCE } from '../../utils/data'
import ExperienceCard from './experienceCard/ExperienceCard'
import Slider from 'react-slick'

const Experience = () => {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
      };
  return (
    <div className='experience-container'>
      <h5>Work Experience</h5>
      <div className='experience-content'>
      <Slider ref={sliderRef} {...settings}>
        {EXPERIENCE.map((item)=> (
            <ExperienceCard key={item.title} details={item}/>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default Experience
