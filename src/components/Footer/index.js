import './index.scss'
import { faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div >
            <div className='footer'>
                
                <h3>Created by Sam Lowry in React, 2026</h3>
                <ul className='contacts-list'>
                    <li className='footer-icon'>
                        <a
                            href="https://github.com/lowry-sam"
                            
                        > GitHub
                            <FontAwesomeIcon
                            icon={faGithub}
                            color="#E4EBE6"
                            className="anchor-icon"
                            />
                        </a> 
                    </li>
                    
                    <li className='footer-icon'>
                        <a
                            href="/Contact%20Me"
                            className='email'
                        > slowry44@me.com
                            <FontAwesomeIcon
                            icon={faEnvelope}
                            color="red"
                            className="anchor-icon"
                            />
                        </a>  
                        {/* <a
                            href="/Contact%20Me"
                            
                        > | 843-801-5911
                            <FontAwesomeIcon
                            icon={faPhone}
                            color="red"
                            className="anchor-icon"
                            />
                        </a>  */}
                    </li>

                    <li className='footer-icon'>
                        <a
                            href="https://www.linkedin.com/in/sam-lowry/"
                            
                        > LinkedIn
                            <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#0072B1"
                            className="anchor-icon"
                            />
                        </a> 
                    </li>
                </ul>
                
            </div>
            
        </div>
    )
}

export default Footer;