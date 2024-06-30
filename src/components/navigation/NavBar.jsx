import React, { useState } from 'react'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import MobilView from './MobilView';
import CloseIcon from '@mui/icons-material/Close';
import profile from '../assests/profileLogo.png'
const NavBar = ({contactRef}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(prevState => !prevState);
  }
  const handleHireme = ()=>{
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <>
      <MobilView isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <div className='flex justify-center items-center gap-3'>
            <img className='logo' src='./profile logo.png' alt='' />
            <img style={{height:'2rem', width:'11rem'}} className='logo' src={profile} alt='logo' />
          </div>
          <ul>
            <li>
              <a href='/' className='menu-item'>Home</a>
            </li>
            <li>
              <a href='#about' className='menu-item'>About</a>
            </li>
            <li>
              <a href='#projects' className='menu-item'>Project</a>
            </li>
            <li>
              <a href='#contacts' className='menu-item'>Contact</a>
            </li>
            <button className='contact-btn' onClick={handleHireme}>Hire me</button>
          </ul>
          <button className='menu-btn' onClick={() => { }}>
            <span style={{ fontSize: "1.8rem" }} onClick={toggleMenu}>{openMenu ? <CloseIcon /> : <MenuIcon />}</span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
