import './index.scss'
import Profile from '../../assets/a.png'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import React from 'react'





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
    const navOptions = [
        {name: "Home", left: 1.5, width: 13}, 
        {name: "About Me", left: 15, width: 18}, 
        {name: "Resume", left: 29.2, width: 16}, 
        {name:"Portfolio", left: 42.6, width: 15}, 
        {name: "Contact Me", left: 57.2, width: 19}];

    
     
    const location = useLocation();
    let result = location.pathname.replace("/", "");
    let result2 = result.replace("/", "");
    let realLocation = result2.replace("%20", " ");
    if ((realLocation === "")) {
        realLocation = "Home";
    } 

    console.log("nav: ");
    console.log(realLocation);

    let initialSelection = navOptions[0];

    const [ selectedNav, setSelectedNav] = useState(() => {
        //console.log("hi!");
        
        console.log(initialSelection);
        //console.log(realLocation);
            for (let i = 0; i < navOptions.length; i++) {
                if (navOptions[i].name === realLocation) {
                    initialSelection = navOptions[i];
                    break;
                }
            }
            console.log("new initial:")
            console.log(initialSelection);
            return initialSelection;
    });

     

    //   const assignContactMe = () => {
    //     setLeftDist(2);
    //     console.log(leftDist);
    //  }
     if (realLocation === "Contact Me") {
        console.log("hit!");
        //assignContactMe();
     }

     const [ leftDist, setLeftDist ] = useState(initialSelection.left);
    const [ widthVar, setWidth ] = useState(initialSelection.width);
    
   
    // } else if ((realLocation === "Contact Me")) {
    //     setLeftDist(navOptions[4].left);
    //     setWidth(navOptions[4].width);
    //     console.log(leftDist);
    //     console.log(widthVar);
    //  }
    console.log(realLocation);

    
     //setLeftDist(1);

     
     
    
    const menuRef=React.createRef();
    const sliderRef=React.createRef();

    const toggleNav = (nav) => {
        if (windowWidth < 900) {setShowNav(!showNav);setBurger(!showBurger);}
        if (nav === "Logo") {
            let nav = "Home";
            setShowNav(false);
        }
        toggle(nav.name);
        setLeftDist(nav.left);
        setWidth(nav.width);
        // console.log("left1:" + {leftDist});
        // console.log({leftDist});
    }
    
    
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

        if ((realLocation === "Contact Me")) {
            //console.log("booger!");
            setLeftDist(navOptions[4].left);
            setWidth(navOptions[4].width);
        }
        // if (windowWidth < 900) {
        //     setShowNav(false)
        // }
        // 3. Clean up the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [realLocation]);

    

    const displayNavOptions = (navOptions) => {
        return (
            <ul className="nav-list">
                <div className='selected-nav-slider-new' left-dist={leftDist} style={{  left: `${leftDist}vw`, width: `${widthVar}%` }}> </div>
                {
                    navOptions.map((nav) => (
                        
                        <div className={navigation === nav.name ? 'not-selected false' : 'not-selected'}>
                            <li className='selected-nav-item'>
                                <Link disabled={navigation === nav.name} 
                                    className={navigation === nav.name ? 'selected-nav-link' : 'nav-link'} 
                                    to = {nav.name} 
                                    onClick={navigation === nav.name ? () => { } : 
                                    () => {toggleNav(nav.name); setLeftDist(nav.left); setWidth(nav.width); 
                                        // console.log("left object" );console.log(nav.left);console.log(nav.name);
                                        // console.log("leftDist" );setLeftDist(nav.left); console.log(leftDist); 
                                         } }>
                                        {nav.name}
                                </Link>
                                
                            </li>
                            {/* <div className={navigation === nav.name ? 'selected-nav-slider' : 'no-slider'} left-dist={nav.left}></div> */}
                        </div>
                    ))
                }
            </ul>
        );
    }

//     const componentDidMount = () => {
//         this.moveSlider();
//     }

//     const componentDidUpdate = (prevProps, prevState, snapshot) => {
//         this.moveSlider();
//     }

//     const moveSlider = () => {
//         const activeMenuEntry = this.menuRef.current.querySelector(navigation);
//         console.log("hahsdfa")
//         console.log(navigation)
//         if (!activeMenuEntry) {return;}

//         const menuRec = this.menuRef.current.getBoundingClientRect();
//         const activeMenuEntryRec = activeMenuEntry.getBoundingClientRect();
//         const distance = activeMenuEntryRec.left - menuRec.left;
//         const width = activeMenuEntryRec.width;

//         requestAnimationFrame(() => {
//             this.sliderRef.current.setAttribute(
//                 "style",
//                 `display: block; transform: translate3d(${distance}px, 0, 0); width: ${width}px`
//             )
//         })

//   }

  return (
    
    <div className="nav-bar">
        <div className="logo-box">
            <Link 
                to="/"
                onClick={() => {toggleNav("Logo"); setLeftDist(navOptions[0].left); setWidth(navOptions[0].width);}}>
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
    



export default NavBar;
