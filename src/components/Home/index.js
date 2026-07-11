import Profile from '../../assets/image-gallery/profile.png'
import Profile2 from '../../assets/image-gallery/profile2.png'
import Profile3 from '../../assets/image-gallery/profile3new.jpg'
import Profile4 from '../../assets/image-gallery/profile4.jpg'
import Profile5 from '../../assets/image-gallery/profile5.jpg'
import Profile6 from '../../assets/image-gallery/profile6.jpg'
import Profile7 from '../../assets/image-gallery/profile7.jpg'
import Profile8 from '../../assets/image-gallery/profile8.jpg'
import Profile9 from '../../assets/image-gallery/profile9new.jpg'
import Profile10 from '../../assets/image-gallery/profile10.jpg'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo'
import Loader from 'react-loaders';
// import { CircleLoader } from 'react-spinners';
import { Pinwheel } from 'ldrs/react'
import 'ldrs/react/Pinwheel.css'
import Footer from '../Footer';
//import { setNav } from '../NavBar'
import NavBar from '../NavBar'
//import ReactLoading from 'react-loading'
import bracket from '../../assets/bracket-inverted-bordered-new.png'
import arrow from '../../assets/arrow-inverted.png'


const Home = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate')
    const nameArray = "Sam Lowry".split('')
    const jobArray = "Data Analyst".split('')
    const introArray = "Hello! I'm Sam Lowry".split('')

    const doSomething = async() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
    }
        
    useEffect(() =>{
         doSomething();
    },[])

    // const box = document.querySelector('.nav-bar-location');
    // let hoverCount = 0;

    // box?.addEventListener('mouseenter', () => {
    //     hoverCount++;

    //     if (hoverCount === 1) {
    //         box.classList.add('first-action');
    //         //box.textContent = "Hover me one more time...";
    //     } 
        
    //     else if (hoverCount > 2) {
    //         //box.classList.remove('first-action');
    //         box.classList.add('second-action');
    //     }
    // });

    const box2 = document.querySelector('.nav-bar-location-mobile');
    let hoverCount2 = 0;

    box2?.addEventListener('mouseenter', () => {
        hoverCount2++;

        if (hoverCount2 === 1) {
            box2.classList.add('first-action');
            //box.textContent = "Hover me one more time...";
        } 
        
        else if (hoverCount2 > 2) {
            //box.classList.remove('first-action');
            box2.classList.add('second-action');
        }
    });

    return (
        <>
        <Loader type="line-scale" active/>
            <div className="container home-page">
                {/* <div className='nav-bar-location'>
                    <div className='bracket'>
                        <img src={bracket}/>
                    </div>
                    <div className='nav-bar-descriptor'>
                        <h3>Nav Bar!</h3>
                        
                    </div>
                </div> */}
                <div className='nav-bar-location-mobile'>
                    <div className='nav-bar-descriptor-mobile'>
                        <h3>Navigate!</h3>
                        
                    </div>
                    <div className='nav-bar-descriptor-mobile-arrow'>
                        <img src={arrow}/>
                    </div>
                </div>
                <div className="text-zone">
                    <div className='intro'>
                        <div className='hello'>
                        
                            <span>
                                <AnimatedLetters
                                letterClass={letterClass}
                                strArray={introArray}
                                idx={1}/>
                            </span>
                            {/* <span className={letterClass}>H</span>
                            <span className={`${letterClass} _12`}>e</span>
                            <span className={`${letterClass} _13`}>l</span>
                            <span className={`${letterClass} _14`}>l</span>
                            <span className={`${letterClass} _15`}>o</span>
                            <span className={`${letterClass} _16`}>!</span> */}
                        </div>
                        <div className='im-name'>
                        <h1>
                            {/* <span className={`${letterClass} _17`}>I</span>
                            <span className={`${letterClass} _18`}>'m</span> */}
                        
                            {/* <img
                            src={LogoPic}
                            alt="JavaScript Developer Name, Web Developer Name"
                            /> */}
                        
                            {/* <span className='name'> 
                                <AnimatedLetters
                                letterClass={letterClass}
                                strArray={nameArray}
                                idx={15}/>
                            </span> */}
                        </h1></div>
                            
                                
                            {/* <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                            /> */}
                        
                    </div>
                <h2>Data Analyst / Software Developer / Technical Trainer</h2>
                <div className='parent-wrapper'>
                    <div className="further-explanation">
                        <p>This website is to demonstrate my aptitude in 
                            <span className='nav-bar-text'> Data Analytics, </span> 
                            <span className='nav-bar-text'> Software Development, </span> 
                            <span className='nav-bar-text'> Technical Training, </span> 
                        and more!</p>
                        <p>Please explore this site using the 
                            <span className='nav-bar-text'> Nav Bar </span>
                            above and feel free to 
                            <span className='nav-bar-text'> Contact Me </span> 
                        so we can discuss how I may serve your team best.</p>
                            
                            
                        {/* <span className="some-text">
                            <p>Please explore this site using the </p>
                            <div><p className='nav-bar-text'> Nav Bar </p></div>
                            <p> above and feel free to</p>
                        
                            <div>
                                <p className='contact-me-text'>Contact Me</p>
                            </div>
                        
                            <p> so we can discuss how I may serve your team best!</p>
                        </span> */}
                    </div>
                    
                    <div className='contact-button'>
                        <Link to="/Contact%20Me" className="flat-button">
                            CONTACT ME
                        </Link>
                    </div>
                </div>

                </div>
                {/* <Logo /> */}

                <div className='pictures-zone'>
                    <div className='hover-image'>
                        <img 
                            src={Profile2}
                            alt="pictures of Sam"
                            className="picture1"
                        />
                        <img 
                            src={Profile}
                            alt="pictures of Sam"
                            className="picture2"
                        />
                        <img 
                            src={Profile3}
                            alt="pictures of Sam"
                            className="picture3"
                        />
                        <img 
                            src={Profile4}
                            alt="pictures of Sam"
                            className="picture4"
                        />
                        <img 
                            src={Profile5}
                            alt="pictures of Sam"
                            className="picture5"
                        />
                        <img 
                            src={Profile6}
                            alt="pictures of Sam"
                            className="picture6"
                        />
                        <img 
                            src={Profile7}
                            alt="pictures of Sam"
                            className="picture7"
                        />
                        <img 
                            src={Profile8}
                            alt="pictures of Sam"
                            className="picture8"
                        />
                        <img 
                            src={Profile9}
                            alt="pictures of Sam"
                            className="picture9"
                        />
                        <img 
                            src={Profile10}
                            alt="pictures of Sam"
                            className="picture10"
                        />
                    </div>
                    <div className='suggestion-zone'> 
                        <p className="user-suggestion"> If you click and hold, the gallery will move quicker.</p>
                    </div>
                    
                </div>
                
                
            </div>

            
            <Loader type='ball-scale-ripple-multiple'/>
            {/* <CircleLoader/> */}
            
            {/* <ReactLoading type="balls"/> */}
            {/* <Footer/> */}
        </>
    );
}

export default Home;