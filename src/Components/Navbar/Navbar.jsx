import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h1 className='logo'>EKO-<span>RSG</span></h1>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>

            <img src={menu_icon} />
        </nav>
      
    </div>
  )
}

export default Navbar

