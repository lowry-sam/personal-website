import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"
import './index.scss'
import Footer from "../Footer"


const About = () => {
    
    const [ letterClass, setLetterClass] = useState('text-animate')
    const doSomething = async() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
    }
        
    useEffect(() =>{
         doSomething();
    },[])

    return (
        <>
        <div className='about-page-container'>
            <div className="text-zone-about">
                <h1> 
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '!']}
                        idx={15}
                    />    
                </h1>    

                <p>
                    I attended the University of South Carolina from 2019-2024, and received my Bachelor's in 
                    <span className='nav-bar-text'> Computer Science </span> 
                    and my Master's in 
                    <span className='nav-bar-text'> Secondary Education. </span>
                </p>
                <p>
                    I have extensive experience through work and education experiences in 
                    <span className='nav-bar-text'> Technical Training, </span> 
                    <span className='nav-bar-text'> Software Development, </span> 
                    <span className='nav-bar-text'> IT, </span> 
                    <span className='nav-bar-text'> AI & ML, </span> 
                    <span className='nav-bar-text'> Data Analytics, </span>
                    <span className='nav-bar-text'> Database Design and Management, </span>  and 
                    <span className='nav-bar-text'> Technical Solutions. </span>
                </p>

                

                {/* <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div> */}
                
            </div>   
           <div className="pictures-zone-about">
                <div className='border'><FontAwesomeIcon icon={faAngular} color="#DD0031" className='icons' data-text='Angular'/></div>
                <div className='border'><FontAwesomeIcon icon={faHtml5} color="#F06529" className='icons'/></div>
                <div className='border'><FontAwesomeIcon icon={faCss3} color="#28A4D9"  className='icons'/></div>
                <div className='border'><FontAwesomeIcon icon={faReact} color="#5ED4F4" className='icons'/></div>
                <div className='border'><FontAwesomeIcon icon={faJsSquare} color="#EFD81D"  className='icons'/></div>
                <div className='border'><FontAwesomeIcon icon={faGitAlt} color="#EC4D28"  className='icons'/></div>
            </div>
        </div>
        
       <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default About