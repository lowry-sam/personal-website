import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, 
    faReact, faJava, faDocker, faClaude, faGolang, faGoogle, faLinux, 
    faMicrosoft, faPython, faSlack} from 
    "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"
import './index.scss'
import Footer from "../Footer"
import teams from '../../assets/brand-logos/teams.png'
import adobe from '../../assets/brand-logos/adobe-new.png'
import slack from '../../assets/brand-logos/slack.png'
import zoom from '../../assets/brand-logos/zoom.webp'
import chat from "../../assets/brand-logos/cgpt.webp"
import python from "../../assets/brand-logos/python.png"
import microsoft from "../../assets/brand-logos/microsoft_office.png"
import google from "../../assets/brand-logos/google.webp"
import cplusplus from "../../assets/brand-logos/C++.png"
import c from "../../assets/brand-logos/C_Logo.png"
import csharp from "../../assets/brand-logos/Logo_C_sharp.png"
import matlab from "../../assets/brand-logos/Matlab_Logo.png"
import r from "../../assets/brand-logos/R_logo.svg.png"
import powerbi from "../../assets/brand-logos/powerbi.png"
import sql from "../../assets/brand-logos/sql.png"
import linux from "../../assets/brand-logos/linux.png"
import windows from "../../assets/brand-logos/windows.png"
import apple from "../../assets/brand-logos/apple-color.png"
import copilot from "../../assets/brand-logos/github-copilot.png"
import canvas from "../../assets/brand-logos/canvas.png"
import magicschool from "../../assets/brand-logos/magicschool.png"

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

    const icons = [
        {src: faJava, text: "Java", color: "#FF5733", type: "icon"},
        {src: faCss3, text: "CSS", color: "#28A4D9", type: "icon"},
        {src: zoom, text: "Zoom", type:"image"},{src: faGitAlt, text: "Git", color: "#EC4D28", type: "icon"},
        {src: chat, text: "ChatGPT", type:"image"},
        {src: csharp, text: "C#", type:"image"},
        {src: faReact, text: "React", color: "#5ED4F4", type: "icon"},
        {src: windows, text: "Windows", type: "image"},
        {src: faDocker, text: "Docker", color: "#0db7ed", type: "icon"},
        {src: faClaude, text: "Claude", color: "#C15F3C", type: "icon"},
        {src: faGolang, text: "GoLang", color: "#00ADD8", type: "icon"},
        //{src: faGoogle, text: "Google Workspace", color: "black"},
        {src: canvas, text: "Canvas", type: "image"}, 
        {src: powerbi, text: "Power BI", type:"image"},
         {src: linux, text: "Linux", color: "#F4BC00", type: "image"},
        //{src: faMicrosoft, text: "Microsoft Office", color: "#B3191C"},
        //{src: faPython, text: "Python", color: "#4584b6"},
        //{src: faSlack, text: "Slack", color: "#4A154B"},
        //{src: faC, text: "C", color: "black"}
        {src: c, text: "C", type:"image"},
        {src: faHtml5, text: "HTML", color: "#F06529", type: "icon"},
        {src: slack, text: "Slack", type:"image"},
        {src: adobe, text: "Adobe Creative Cloud", type:"image"},
        {src: copilot, text: "Copilot", type: "image"},
        {src: python, text: "Python", type:"image"},
        {src: microsoft, text: "Microsoft Office  ", type:"image"},
        {src: google, text: "Google Workspace", type:"image"},
         {src: teams, text: "Microsoft Teams", type:"image"},
         {src: cplusplus, text: "C++", type:"image"},
        {src: faAngular, text: "Angular", color: "#DD0031", type: "icon"},
        {src: apple, text: "iOS", type: "image"},
        {src: matlab, text: "MatLab", type:"image"},
        {src: r, text: "R", type:"image"},
        {src: magicschool, text: "Magic School AI", type: "image"},
        {src: faJsSquare, text: "JavaScript", color: "#EFD81D", type: "icon"},{src: sql, text: "SQL", type:"image"},

    ];

    const images = [
        

    ]

    const renderIcons = (icons) => {

        return (
            <div className='render-icons'>
                <div className='level one'>
                    {
                        icons.map((icon, index) => {
                                return index < 4 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level two'>
                    {
                        icons.map((icon, index) => {
                                return index < 9 && index >= 4 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level three'>
                    {
                        icons.map((icon, index) => {
                                return index < 15 && index >= 9 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                {/* <div className='level center'>
                    {
                        icons.map((icon, index) => {
                                return index === 12 ? (
                                    
                                        <div className="image-container one" data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div> */}
                <div className='level four'>
                    {
                        icons.map((icon, index) => {
                                return index < 22 && index >= 15 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level five'>
                    {
                        icons.map((icon, index) => {
                                return index < 27 && index >= 22 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                 <div className='level six'>
                    {
                        icons.map((icon, index) => {
                                return index < 35 && index >= 27 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                {/* <div className='level seven'>
                    {
                        icons.map((icon, index) => {
                                return index < 25 && index >= 21 ? (
                                    
                                        <div className="image-container one" data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div> */}
            </div>)
            
    }

    const renderIconsTiny = (icons) => {

        return (
            <div className='render-icons-tiny'>
                <div className='level one'>
                    {
                        icons.map((icon, index) => {
                                return index < 3 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level two'>
                    {
                        icons.map((icon, index) => {
                                return index < 7 && index >= 3 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level three'>
                    {
                        icons.map((icon, index) => {
                                return index < 12 && index >= 7 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                {/* <div className='level center'>
                    {
                        icons.map((icon, index) => {
                                return index === 12 ? (
                                    
                                        <div className="image-container one" data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div> */}
                <div className='level four'>
                    {
                        icons.map((icon, index) => {
                                return index < 18 && index >= 12 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level five'>
                    {
                        icons.map((icon, index) => {
                                return index < 23 && index >= 18 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                 <div className='level six'>
                    {
                        icons.map((icon, index) => {
                                return index < 27 && index >= 23 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level seven'>
                    {
                        icons.map((icon, index) => {
                                return index < 35 && index >= 27 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
            </div>)
            
    }

    const renderIconsTeenieTiny = (icons) => {

        return (
            <div className='render-icons-teenie-tiny'>
                <div className='level one'>
                    {
                        icons.map((icon, index) => {
                                return index < 2 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level two'>
                    {
                        icons.map((icon, index) => {
                                return index < 5 && index >= 2 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level three'>
                    {
                        icons.map((icon, index) => {
                                return index < 9 && index >= 5 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                {/* <div className='level center'>
                    {
                        icons.map((icon, index) => {
                                return index === 12 ? (
                                    
                                        <div className="image-container one" data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div> */}
                <div className='level four'>
                    {
                        icons.map((icon, index) => {
                                return index < 14 && index >= 9 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level five'>
                    {
                        icons.map((icon, index) => {
                                return index < 20 && index >= 14 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                 <div className='level six'>
                    {
                        icons.map((icon, index) => {
                                return index < 25 && index >= 20 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
                <div className='level seven'>
                    {
                        icons.map((icon, index) => {
                                return index < 29 && index >= 25 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>

                <div className='level eight'>
                    {
                        icons.map((icon, index) => {
                                return index < 33 && index >= 29 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>

                <div className='level nine'>
                    {
                        icons.map((icon, index) => {
                                return index < 35 && index >= 33 ? (
                                    
                                        <div className={"image-container " + index} data-text={icon.text}>
                                            { icon.type === "icon" ?
                                                <div className='border'><FontAwesomeIcon icon={icon.src} color={icon.color} className='icons' alt={`item ${index+1}`} /></div>
                                                : <div className='border'><img src={icon.src} className='icons' alt={`item ${index+1}`} /></div>
                                                
                                            }
                                        </div>
                                    
                            ) : (<div></div>)
                            
                        } ) 
                    }
                </div>
            </div>)
            
    }

    const renderImgs = (images) => {
        return (
            <div className='render-icons'>
                {
                    images.map((image) => {
                        return (
                            <div class="image-container" data-text={image.text}>
                                
                            </div>
                        )
                    })
                }
            </div>)
    }


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
                <p>Here are some of the tools and languages I am knowledgable in! Hover over them for details.</p>

                

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
                {renderIcons(icons)}
                {renderIconsTiny(icons)}
                {renderIconsTeenieTiny(icons)}
                
                {/* {renderImgs(images)} */}
                {/* <div class="image-container" data-text="Angular">
                    <div className='border' data-text='Angular'><FontAwesomeIcon icon={faAngular} color="#DD0031" className='icons' data-text='Angular'/></div>
                </div>
                
                <div class="image-container" data-text="HTML">
                    <div className='border'><FontAwesomeIcon icon={faHtml5} color="#F06529" className='icons'/></div>
                </div>

                <div class="image-container" data-text="CSS">
                    <div className='border'><FontAwesomeIcon icon={faCss3} color="#28A4D9"  className='icons'/></div>
                </div>

                <div class="image-container" data-text="React">
                    <div className='border'><FontAwesomeIcon icon={faReact} color="#5ED4F4" className='icons'/></div>
                </div>

                <div class="image-container" data-text="JavaScript">
                    <div className='border'><FontAwesomeIcon icon={faJsSquare} color="#EFD81D"  className='icons'/></div>
                </div>
                
                <div class="image-container" data-text="Git">
                    <div className='border'><FontAwesomeIcon icon={faGitAlt} color="#EC4D28"  className='icons'/></div>
                </div>
                
                <div class="image-container" data-text="Microsoft Teams">
                    <div className='border'><img src={teams} className='icons'/></div>
                </div> */}
                
                
            </div>
        </div>
        
       <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default About