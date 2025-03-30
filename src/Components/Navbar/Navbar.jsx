import React, { useEffect, useState} from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })

  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }





  return (
    <div>
        <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
            <h1 className='logo'>EKO-<span>RSG</span></h1>

            <ul className={mobileMenu ? 'show' : 'hide-mobile-menu'}>
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>

            <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
        </nav>
      
    </div>
  )
}

export default Navbar

