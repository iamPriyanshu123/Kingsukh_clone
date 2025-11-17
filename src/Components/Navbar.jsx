import React from 'react'
import '../styles/Navbar.css'
export const Navbar = () => {
    return (
        <>
            <div className="Navbar-cont">
                <div className="nav-item">
                    <h3 className='text-lg'>KingSukh <br /> Guest House</h3>
                </div>
                <div className="nav-item mr-4">
                    <ul className='list-none flex'>
                        <li>Home</li>
                        <li> <a href="#about-main">About</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Rooms">Rooms</a></li>
                        <li> <a href='#Gallery'>Gallery</a></li>
                        <li><a href='#Contact-Us'>Contact</a></li>
                    </ul>
                </div>
                <div className="nav-item relative left-16">
                    <button className='bg-pink-700 w-36 h-12 text-emerald-50 rounded-lg text-lg'>BOOK NOW</button>
                </div>
            </div>
        </>
    )
}
