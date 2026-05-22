import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"


const About = () => {
    
    const [ letterClass, setLetterClass] = useState('text-animate')
//     useEffect (() => {
//     return setTimeout(() => {
//         setLetterClass('text-animate-hover')
//     }, 3000)
//    }, []) 

    return (
        <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1> 
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '!']}
                        idx={15}
                    />    
                </h1>    

                <p>
                    something somet hingskljdf
                </p>
                <p>
                    something else!
                </p>

                <div className="stage-cube-cont">
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
                </div>
            </div>   
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About