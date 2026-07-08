import './index.scss'
import Profile from '../../assets/a.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'





//import { AiOutlineClose, AiOutlineMenuUnfold } from 'reach-icons/ai'

//const Sidebar = () => {
    // const [burgerClass, setBurgerClass] = useState("burger-button unclicked");
    // const [menuClass, setMenuClass] = useState("menu hidden");
    // const [isMenuClicked, setMenuClicked] = useState("false");
    
    

    // const navRef = useRef();
    

    // return(
    //     <>
    // <div className = 'nav-bar'>
    //     {/* <Link className = 'logo' to = '/'>
    //         <img src='https://as1.ftcdn.net/v2/jpg/05/16/70/86/1000_F_516708697_dSz9IOMSWq8p0Rtj8ra1UIudorn1y79e.jpg' alt='logo'/>
    //     </Link> */}
    //     {/* <nav className={ showNav ? 'mobile-show': 'non-mobile' }>
    //         <ul>
    //             <li><FontAwesomeIcon icon={faHome} color="blue" onClick={()=>setShowNav(false)}/></li>
    //             <li>
    //                 <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={()=>setShowNav(false)}>
    //                     <FontAwesomeIcon icon={faUser} color="blue" />
    //                 </NavLink></li>
    //             <li>
    //                 <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>setShowNav(false)}>
    //                     <FontAwesomeIcon icon={faEnvelope} color="blue" />
    //                 </NavLink>
    //             </li>
    //             <li>
    //                 <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=>setShowNav(false)}>
    //                     <FontAwesomeIcon icon={faSuitcase} color="blue" />
    //                 </NavLink>
    //             </li>
    //         </ul>
    //         <FontAwesomeIcon
    //                 onClick={()=>setShowNav(false)}
    //                 icon={faClose}
    //                 color='yellow'
    //                 size = "3x"
    //                 className="close-icon"
    //             />
    //     </nav> */}
        // <nav className={showNav ? 'mobile-show' : ''}>
        //     <ul>
        //         <li>
        //             <Link className = 'nav-link' to = '/' onClick={toggleNav}>
        //                 Home
        //             </Link>
        //         </li>
        //         <li>
        //             <Link className = 'nav-link' to = '/about' onClick={toggleNav}>
        //                 About Me
        //             </Link>
        //         </li>

        //         <li>
        //             <Link className = 'nav-link' to = '/resume' onClick={toggleNav}>
        //                 Resume
        //             </Link>
        //         </li>
                
        //         <li>
        //             <Link className = 'nav-link' to = '/portfolio' onClick={toggleNav}>
        //                 Portfolio
        //             </Link>
        //         </li>

        //         <li>
        //             <Link className = 'nav-link' to = '/contact' onClick={toggleNav}>
        //                 Contact Me
        //             </Link>
        //         </li>
        //     </ul>
        //     <FontAwesomeIcon
        //             onClick={toggleNav}
        //             icon={faClose}
        //             color='yellow'
        //             size = "3x"
        //             className="close-icon"
        //         />

                
        // </nav>
            
            
    //     {/* <nav className={ showNav ? 'mobile-show': '' }>
    //         <div className='nav-items'>
    //             <NavLink exact="true" activeclassname="active" to="/">
    //                 <FontAwesomeIcon icon={faHome} color="blue" onClick={()=>setShowNav(false)}/>
    //             </NavLink>
    //             <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={()=>setShowNav(false)}>
    //                 <FontAwesomeIcon icon={faUser} color="blue" />
    //             </NavLink>
    //             <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={()=>setShowNav(false)}>
    //                 <FontAwesomeIcon icon={faEnvelope} color="blue" />
    //             </NavLink>
    //             <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=>setShowNav(false)}>
    //                 <FontAwesomeIcon icon={faSuitcase} color="blue" />
    //             </NavLink>
                
    //         </div>
    //     </nav> */}
    //     {/* <ul>
    //         <li>
    //             <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/sam-lowry/">
    //                 <FontAwesomeIcon icon={faLinkedin} color='red'></FontAwesomeIcon>
    //             </a>
    //         </li>
    //         <li>
    //             <a target='_blank' rel='noreferrer' href="https://github.com/lowry-sam">
    //                 <FontAwesomeIcon icon={faGithub} color='red'></FontAwesomeIcon>
    //             </a>
    //         </li>
    //     </ul> */}

    //     <FontAwesomeIcon
    //         onClick={toggleNav}
    //         icon={faBars}
    //         color='white'
    //         size = "3x"
    //         //className='hamburger-icon'
    //         className = 'hamburger-icon'
    //     />
        

    // </div>

   // }
    //</>

const NavBar = ({navigation}) => {

    // const [menu, setMenu] = useState(false)
    // const handleChange = () => {
    //     setMenu(!menu)
    // }

    // return (
    //     <div className='nav-bar'>
    //         <div>
    //             <Link><span className='logo'>Sam Lowry</span></Link>
    //         </div>
    //         <div>
    //             <nav>
    //                 <a href="/" >Home</a>
    //                 <a href="/about" >About Me</a>
    //                 <a href="/resume" >Resume</a>
    //                 <a href="/portfolio" >Portfolio</a>
    //                 <a href="/contact" >Contact Me</a>
    //             </nav>
    //         </div>
    //         {/* <div>
    //             <button>Hey</button>
    //         </div> */}
    //         <div>
    //             {/* {menu ? <AiOutlineClose /> : <AiOutlineMenuUnfold/>} */}
    //         </div>
    //     </div>
    // )


    const [showNav, setShowNav] = useState(false);
    //const [showNav, setShowNav] = useState(false);
    const [showBurger, setBurger] = useState(true);
    const toggleNav = (nav) => {
        if (windowWidth < 900) {setShowNav(!showNav);}
        setBurger(!showBurger);
        toggle(nav);
    }
    
    const navOptions = ["Home", "About Me", "Resume", "Portfolio", "Contact Me"];
    
    const [selectedNav, setSelectedNav] = useState(navigation);
    const toggle = (idx) => {
        // if(selectedNav === idx) {
        //     return setSelectedNav(null);
        // }
        setSelectedNav(idx);
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // 2. Update state whenever the window resizing event fires
        const handleResize = () => {setWindowWidth(window.innerWidth)
            if (windowWidth > 900) {
                setShowNav(false)
            }
        };
        window.addEventListener('resize', handleResize);
        // if (windowWidth < 900) {
        //     setShowNav(false)
        // }
        // 3. Clean up the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    

    const displayNavOptions = (navOptions) => {
        return (
            <ul className="nav-list">
                {
                    navOptions.map((nav) => (
                        
                        <div className={navigation === nav ? 'selected-nav' : 'not-selected'}>
                            <li className={navigation === nav ? 'selected-nav-item' : ''}>
                                <Link disabled={navigation === nav} className={navigation === nav ? 'selected-nav-link' : 'nav-link'} to = {nav} onClick={navigation === nav ? '' : () => toggleNav(nav) }>
                                    {nav}
                                </Link>
                                
                            </li>
                            <div className={navigation === nav ? 'selected-nav-slider' : 'no-slider'}></div>
                        </div>
                    ))
                }
            </ul>
        );
    }

  return (
    
    <div className="nav-bar">
        <div className="logo-box">
            <Link 
                to="/"
                onClick={() => setShowNav(false)}
                onClick={() => toggleNav("Home")}>
                <img 
                    alt="website logo"
                    src={logo}
                    className="logo"
                    />
            </Link>
            {/* <Link 
            className="logo"
            to="/"
            onClick={() => setShowNav(false)}
            onClick={() => toggleNav("Home")}>
            <span><h1><ul><li> Sam_ </li><li>Lowry</li></ul></h1></span>
        </Link> */}
        </div>

      {/* <Link 
        className="mini-logo"
        to="/"
        onClick={() => setShowNav(false)}
        onClick={() => toggleNav("Home")}>
        <span><h1> Sam_ Lowry</h1></span>
      </Link> */}

      <FontAwesomeIcon 
           onClick={() => setShowNav(true)}
           icon={faBars}
           color="#ffd700"
           size="3x"
           className='hamburger-icon'/>

         <nav className={showNav ? 'mobile-show' : ''}>
            {displayNavOptions(navOptions)}

            {/* <ul>
                <div className={selectedNav === "Home" ? 'selected-nav' : ''}>
                    <li>
                        <Link className = 'nav-link' to = '/' onClick={() => toggleNav("Home")}>
                            Home
                        </Link>
                    </li>
                </div>
                <div> 
                    <li>
                        <Link className = 'nav-link' to = '/about' onClick={() => toggleNav("About Me")}>
                            About Me
                        </Link>
                    </li>
                </div>
                <li>
                    <Link className = 'nav-link' to = '/resume' onClick={() => toggleNav("Resume")}>
                        Resume
                    </Link>
                </li>
                
                <li>
                    <Link className = 'nav-link' to = '/portfolio' onClick={() => toggleNav("Portfolio")}>
                        Portfolio
                    </Link>
                </li>

                <li>
                    <Link className = 'nav-link' to = '/contact' onClick={() => toggleNav("Contact Me")}>
                        Contact Me
                    </Link>
                </li>
            </ul>
             */}
            <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color='yellow'
                    size = "3x"
                    className="close-icon"
                />
                

                
        </nav>

        {/* <ul className='socials'>
            <li>
                <FontAwesomeIcon
                        icon={faLinkedin}
                        color="white"
                        className="anchor-icon"
                    />
                { <a href="https://www.linkedin.com/in/sam-lowry/">
                    <FontAwesomeIcon
                        //icon={}
                        color="white"
                        className="anchor-icon"
                    />
                </a> }
                <a
                    href="https://www.linkedin.com/in/sam-lowry/"
                    target="_blank"
                    rel="noreferrer"
                >
                   
                    
                </a>
            </li>
        </ul> */}
        <ul className='socials'>
        <li>
           <a
            href="https://www.linkedin.com/in/sam-lowry/"
            
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              className="anchor-icon"
            />
         </a> 
        </li>
        <li>
           <a
            href="https://github.com/lowry-sam"
            
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="anchor-icon"
            />
         </a> 
        </li>
         
{/* //             href="https://github.com/bobangajicsm"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faGithub}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
//             rel="noreferrer"
//             target="_blank"
//           >
//             <FontAwesomeIcon
//               icon={faYoutube}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
//             <FontAwesomeIcon
//               icon={faSkype}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//       </ul> */}
       {/* <ul>
//         <li>
//           <a
//             href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/bobangajicsm"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faGithub}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
//             rel="noreferrer"
//             target="_blank"
//           >
//             <FontAwesomeIcon
//               icon={faYoutube}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
//             <FontAwesomeIcon
//               icon={faSkype}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a> */}
         
       </ul> 
       
    </div>
  )
}
    



export default NavBar
