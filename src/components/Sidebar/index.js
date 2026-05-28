import './index.scss'
import Profile from '../../assets/a.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src='https://as1.ftcdn.net/v2/jpg/05/16/70/86/1000_F_516708697_dSz9IOMSWq8p0Rtj8ra1UIudorn1y79e.jpg' alt='logo'/>
        </Link>
        <nav className={ showNav ? 'mobile-show': '' }>
            <div className='nav-items'>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="blue" onClick={()=>setShowNav(false)}/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={()=>setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="blue" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="blue" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=>setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color="blue" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={()=>setShowNav(false)}
                    icon={faClose}
                    color='yellow'
                    size = "3x"
                    className="close-icon"
                />
            </div>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/sam-lowry/">
                    <FontAwesomeIcon icon={faLinkedin} color='red'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://github.com/lowry-sam">
                    <FontAwesomeIcon icon={faGithub} color='red'></FontAwesomeIcon>
                </a>
            </li>
        </ul>

        <FontAwesomeIcon
            onClick={()=>setShowNav(true)}
            icon={faBars}
            color='yellow'
            size = "3x"
            className="hamburger-icon"
        />

    </div>

)}

export default Sidebar