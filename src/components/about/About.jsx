import React, { useState } from 'react'
import './About.css'
import Boss from '../assests/Boss.png'
const About = () => {
    const [activeTab, setActiveTab] = useState('skills');
    return (
        <div id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='about-col-1'>
                        <img src={Boss} alt='about-image' />
                    </div>
                    <div className='about-col-2'>
                        <h1 className='sub-title'>About Me</h1>
                        <p className='text'>
                            I am Sujit Vishwakarma, a passionate software engineer with a strong foundation in electronics and telecommunications. I graduated with a B.Tech from Veer Surendra Sai University of Technology (VSSUT), Burla, where I honed my technical skills and gained hands-on experience in software development and hardware integration. I am proficient in multiple programming languages including Java, C, C++, Python, HTML, CSS, JavaScript, and Verilog. I have experience with frameworks and tools such as ReactJs, NodeJs, Material-UI. My database management skills include MongoDB, MySQL, and Firebase.
                        </p>
                        <div className='tab-titles'>
                            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => setActiveTab('skills')}>Skills</p>
                            <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => setActiveTab('experience')}>Experience</p>
                            <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => setActiveTab('education')}>Education</p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id='skills'>
                            <ul>
                                <li><span>Languages: </span>Java, C, C++, Python, HTML, CSS, JavaScript, Verilog</li>
                                <li><span>Frameworks: </span>ReactJs, NodeJs, Material-UI, jQuery, REST API, GitHub, Express</li>
                                <li><span>Database: </span> MongoDB, MySQL, Firebase</li>
                                <li><span>Developer Tools: </span> VS Code, Git</li>
                                <li><span>CourseWork:</span> Data Structure and Algorithms, DBMS, Operating System</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id='experience'>
                            <ul>
                                <li><span>Sept 2024 – Continuing</span>Software Developer at Codenomix</li>
                            <li><span>June 2024 – Aug 2024</span>Frontend Developer at Sachtak.com</li>
                                <li><span>April 2023 – July 2023</span> Software Developer at Graduate US</li>
                                <li><span>June 2023 – July 2023 </span> Software Engineer Intern at DRDO Balasore</li>
                                <li><span>June 2022 – July 202 </span> Summer Trainee at NALCO Angul</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id='education'>
                            <ul>
                                <li><span>B.Tech (2020 - 2024)</span>  Veer Surendra Sai University of Technology, Majored in ETC</li>
                                <li><span>Intermediate (2017 - 2019)</span>  Stewart Science Collage, Odisha</li>
                                <li><span>Matriculation (2017)</span>  Modern Public Scool, Odisha</li>
                            </ul>
                        </div>
                        <p style={{width:'100%', marginTop: "27px"}}>
                        Driven by a passion for technology and innovation, I continuously strive to expand my skill set and take on challenging projects. I am eager to leverage my background in software engineering and electronics to contribute to cutting-edge projects and make a meaningful impact in the tech industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
