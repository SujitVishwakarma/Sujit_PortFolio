import React, { useEffect } from 'react'
import './hero.css'
import About_bg from '../assests/About-bg.png'
import hero_bg from '../assests/side_hero.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typed from 'typed.js';
import mainProfile from '../assests/mainProfile1.png'

const Hero = () => {
    const el = React.useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Web Developer',
                'MERN Stack Developer',
                'Java Developer',
                'Frontend Developer'
            ],
            typeSpeed: 50,
            backSpeed: 50, // Speed at which the text is erased
            loop: true,    // Enable looping
        });
        return () => {
            typed.destroy();
        };
    }, [])

    return (
        <section>
            <div className='hero-container' id='home'>
                <div className='hero-content'>
                    <h3>Hi, Myself</h3>
                    <h1>Sujit Vishwakarma</h1>
                    <div className='wrapper'>
                        <h1>I'm a <span ref={el} /></h1>
                    </div>
                    <p>
                    I'm Sujit Vishwakarma, a passionate software developer with a B.Tech in Electronics and Telecommunication from Veer Surendra Sai University of Technology, Burla.<br/>
                    As a Tech Team Manager and coordinator in my university's Robotics Society, I've honed my leadership skills and contributed to numerous tech initiatives. I'm always eager to innovate and take on new challenges in software development. Passionate frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solution
                    </p>
                    <div className='social-media'>
                        <a href='https://www.linkedin.com/in/sujit-vishwakarma-8b1381212' target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                        <a href='#' target="_blank" rel="noopener noreferrer"><XIcon /></a>
                        <a href='https://www.instagram.com/sujit5256/' target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                        <a href='https://github.com/SujitVishwakarma/SujitVishwakarma' target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                    </div>
                    <a href='https://drive.google.com/file/d/101qPl8cba50i4fdceelQIKbjRWp9hIUv/view?usp=drive_link' download=''>
                        <button className='hero-btn'>Download CV</button>
                    </a>
                </div>
                <div className='hero-img' style={{width:'84%', marginTop:'30px'}}>
                    <img src={mainProfile} alt='Hero' />
                </div>
            </div>
        </section>
    )
}

export default Hero
