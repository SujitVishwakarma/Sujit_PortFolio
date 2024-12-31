import React, { useState } from 'react'
import "./MobileView.css"
const MobilView = ({isOpen, toggleMenu}) => {
    console.log("MobileView rendered, isOpen:", isOpen);
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <img className='logo' src='./profile logo.png' />
                    <ul>
                        <li>
                            <a href='#home' className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href='#about' className='menu-item'>About</a>
                        </li>
                        <li>
                            <a className='menu-item'>Project</a>
                        </li>
                        <li>
                            <a className='menu-item'>Contact</a>
                        </li>
                        <button className='contact-btn' onClick={() => { }}>Hire me</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobilView
