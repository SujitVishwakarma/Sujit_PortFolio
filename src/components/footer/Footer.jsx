import React from 'react';
import logo from '../assests/profileLogo.png'
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0e1218] to-[#041421] p-4 lg:p-8 rounded-lg shadow-shadowOne mt-6 lg:mt-0' text-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-2 md:mb-0">
            <img src={logo} alt='prifile' style={{width:'60%', height:'3rem', marginBottom:'1rem'}}/>
            <p>Creating meaningful experiences through design and technology.Explore my work,<br/> let's connect, and create something amazing together!</p>
          </div>
            {/* Pages */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="font-bold mb-2 text-orange-700">QUICK LINKS</h3>
              <ul>
                <li><a href="#" className="hover:text-orange-600">Home </a></li>
                <li><a href="#about" className="hover:text-orange-600">About</a></li>
                <li><a href="#projects" className="hover:text-orange-600">Project</a></li>
                <li><a href="#contacts" className="hover:text-orange-600">Contact</a></li>
                <li><a href='https://drive.google.com/file/d/101qPl8cba50i4fdceelQIKbjRWp9hIUv/view?usp=drive_link' download='' className="hover:text-orange-600">Resume</a></li>

              </ul>
            </div>

            {/* Reference Page */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="font-bold mb-2 text-orange-700">RESOURCES</h3>
              <ul>
                <li><a href="#" className="hover:text-orange-600">Authentication</a></li>
                <li><a href="#" className="hover:text-orange-600">Instructions</a></li>
                <li><a href="#" className="hover:text-orange-600">Licensing</a></li>
                <li><a href="#" className="hover:text-orange-600">Over Right</a></li>
                <li><a href="#" className="hover:text-orange-600">Style Guide</a></li>
              </ul>
            </div>

            {/* Pages */}
            <div className="w-full md:w-1/4">
              <h3 className="font-bold mb-2 text-orange-700">DEVELOPERS</h3>
              <ul>
                <li><a href="/" className="hover:text-orange-600">Documentation</a></li>
                <li><a href="" className="hover:text-orange-600">Web Developement</a></li>
                <li><a href="" className="hover:text-orange-600">Software Developement</a></li>
                <li><a href="" className="hover:text-orange-600">Open Source</a></li>
                <li><a href="" className="hover:text-orange-600">Web Hosting</a></li>

              </ul>
            </div>
        </div>
        <div className='w-full bg-slate-500 h-0.5 mt-6 mb-0'></div>

        {/* Social Media Icons */}
        <div className='flex justify-between items-center'>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-600 ">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href='https://www.instagram.com/sujit5256/' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/sujit-vishwakarma-8b1381212" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-600">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-center text-gray-400">
            © 2024 Copyright Sujit Vishwakarma
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
