import './index.scss'
import Profile from '../../assets/a.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src='https://as1.ftcdn.net/v2/jpg/05/16/70/86/1000_F_516708697_dSz9IOMSWq8p0Rtj8ra1UIudorn1y79e.jpg' alt='logo'/>
            
            
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="blue" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="blue" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="blue" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="blue" />
            </NavLink>
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
    </div>

)

export default Sidebar