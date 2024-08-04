import "./Navbar.css"
import React, {useState} from 'react';
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  // mobile menu functions
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);
    
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="homeSection" spy={true} smooth={true} offset={-70} duration={500} className="navbar-logo">
              grace shum
          </Link>
          <div className="nav-menu">
            {click ? 
            <FaTimes onClick={handleClick} size={25} style={{color:"white"}} className="menu-button"/> :
            <FaBars onClick={handleClick} size={25} style={{color:"white"}} className="menu-button"/>} 
            <ul className={click ? "nav-items active" : "nav-items"}>   
              <li>
                <Link to='homeSection' spy={true} smooth={true} offset={-60} duration={400} className='nav-links' onClick={closeMobileMenu}>
                  home
                </Link>
              </li>
              <li>
                <Link to="aboutSection" spy={true} smooth={true} offset={-60} duration={400} className='nav-links' onClick={closeMobileMenu}>
                  about
                </Link>
              </li>
              <li>
                <Link to='projectSection' spy={true} smooth={true} offset={-60} duration={400} className='nav-links' onClick={closeMobileMenu}>
                  projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
