import Loader from 'react-loaders';
import { CircleLoader } from 'react-spinners';
import Footer from '../Footer';
import './index.scss'
import resumeData from '../../data/resume.json'
import educationData from '../../data/education.json'
import skillsData from '../../data/skills.json'
import Spinner from '../Spinner';
import { useState, useEffect } from 'react'

const Resume = () => {
    const [ selected, setSelected ] = useState(null);
        
        const toggle = (idx) => {
            if(selected === idx) {
                return setSelected(null);
            }

            setSelected(idx);
        }

    const [opened, setOpened] = useState(false);

    const toggled = (num) => {
        setOpened(num);
    }

    const renderResume = (resume) => {
        return (
            <div className='container'>
                
                {
                    resume.map((job) => {
                        return (
                            <div className="accordion">
                                    <div key={job.title} className={selected === job.title ? 'resume-box selected' : 'resume-box not-selected'}>
                                        <div  > 
                                            {/* <img src={port.cover} alt="portfolio" className="portfolio-image"/> */}
                                            
                                            <div className='title-box' onClick={()=>toggle(job.title)}>
                                                <div className="title"> 
                                                    <h4 className="position" >{job.title} </h4>
                                                    <h4 className="company">{job.company}</h4>
                                                </div>
                                                <span className='arrow'>{selected === job.title ? '↓' : '↑' }</span>
                                            </div>
                                            <div className={selected === job.title ? 'content-show' : 'content'} >
                                                <div className="location"><h4 className="location">Location:</h4> {job.location}</div>
                                                <h4 className='description'>Description:  
                                                <ul className='description'>
                                                    {
                                                        job.description.map((item) => (<li> {item} </li>)
                                                    )}
                                                    </ul>
                                                </h4>
                                                <h4 className='dates'>From <h4>{job.startDate}</h4> to <h4>{job.endDate}</h4></h4>
                                                <h4 className='tags'>Tags:  
                                                <ul className='tag-box'>
                                                    {
                                                        job.tags.map((tag) => (<li> <span>{tag}</span> </li>)
                                                    )}
                                                    </ul>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    // const minorsLength = edu.map((e) => e.minors).length

    const renderEducatione = (education) => {
        return (
            <div className='education-container'>
                
                {
                    education.map((edu) => {
                        return (
                            <div className='education-box'>
                                <div className='education-title'>
                                    <h1 className={edu.school==="University of South Carolina" ? 'name-usc' : 'name-other'}>{edu.school} </h1>
                                    <img className={edu.school==="University of South Carolina" ? 'img-usc' : 'img-other'} src={edu.cover}/>
                                </div>
                                <div className={edu.degree==="BS Computer Science" ? 'degree-minors' : 'degree'}><h2>Degree: </h2><h2 className='degree-type'>{edu.degree}</h2></div>
                                <div className={edu.degree==="BS Computer Science" ? 'minor-box' : 'no-minors'}>
                                    <h2>Minors:</h2>
                                    <ul className='minor-list'>
                                        {
                                            edu.minors.map((minor) => (<li> {minor} </li>)
                                        )}
                                    </ul>
                                </div>
                                <h2 className={edu.degree==="BS Computer Science" ? 'minors-list-padding' : 'no-minors-list-padding'}>Attended from {edu.startDate} to {edu.endDate}</h2>
                                <div className={edu.degree==="BS Computer Science" ? 'location-box-no-padding' : 'location-box'}> 
                                    <h2 className="education-gpa">GPA: {edu.gpa}</h2>
                                    <h2 className="education-location">{edu.location}</h2>
                                </div>
                                
                                {/* <div>
                                    <div className=""> 
                                        <div className='title-box' onClick={()=>toggle(job.title)}>
                                            <div className="title"> 
                                                <h4 className="position" >{job.title} </h4>
                                                <h4 className="company">{job.company}</h4>
                                            </div>
                                            <span className='arrow'>{selected === job.title ? '↓' : '↑' }</span>
                                        </div>
                                        <div className={selected === job.title ? 'content-show' : 'content'} >
                                            <div className="location"><h4 className="location">Location:</h4> {job.location}</div>
                                            <h4 className='description'>Description:  
                                            <ul className='description'>
                                                {
                                                    job.description.map((item) => (<li> {item} </li>)
                                                )}
                                                </ul>
                                            </h4>
                                            <h4 className='dates'>From <h4>{job.startDate}</h4> to <h4>{job.endDate}</h4></h4>
                                            <h4 className='tags'>Tags:  
                                            <ul className='tag-box'>
                                                {
                                                    job.tags.map((tag) => (<li> <span>{tag}</span> </li>)
                                                )}
                                                </ul>
                                            </h4>
                                        </div>
                                    </div>
                                    
                                </div> */}
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    const [languagesSelected, setLanguagesSelected] = useState(false)
    const renderLanguages = (languages) => {
        
        return (
            <div>
                {
                    languages.map((language) => {
                        return (
                            <div className="languages-box"> 
                                <div className='languages-title-box' onClick={()=>setLanguagesSelected(!languagesSelected)}>
                                    <div className="title"> 
                                        <h4>Languages</h4>
                                    </div>
                                    <span className='arrow'>{languagesSelected ? '↓' : '↑' }</span>
                                </div>   
                                <ul className={languagesSelected ? 'languages-show' : 'languages-no'}>
                                    {
                                        language.language.map((item) => (<li> <span>{item}</span></li>)
                                    )}
                                </ul>     
                                
                           </div>
                        )
                    })
                }
            </div>)
    }

    const [toolsSelected, setToolsSelected] = useState(false)
    const renderTools = (tools) => {
        
        return (
            <div>
                {
                    tools.map((tool) => {
                        return (
                            <div className="languages-box"> 
                                <div className='languages-title-box' onClick={()=>setToolsSelected(!toolsSelected)}>
                                    <div className="title"> 
                                        <h4>Tools</h4>
                                    </div>
                                    <span className='arrow'>{toolsSelected ? '↓' : '↑' }</span>
                                </div>   
                                <ul className={toolsSelected ? 'languages-show' : 'languages-no'}>
                                    {
                                        tool.tool.map((item) => (<li> <span>{item}</span></li>)
                                    )}
                                </ul>     
                                
                           </div>
                        )
                    })
                }
            </div>)
    }

    const [certificationSelected, setCertificationSelected] = useState(false)
    const renderCerts = (certs) => {
        return (
            <div>
                {
                    certs.map((cert) => {
                        return (
                            <div className="languages-box"> 
                                <div className='languages-title-box' onClick={()=>setCertificationSelected(!certificationSelected)}>
                                    <div className="title"> 
                                        <h4>Certifications</h4>
                                    </div>
                                    <span className='arrow'>{certificationSelected ? '↓' : '↑' }</span>
                                </div>   
                                <ul className={certificationSelected ? 'certs-show' : 'certs-no'}>
                                    {
                                        cert.certification.map((item) => (<li> <span className="certs-span">{item}</span></li>)
                                    )}
                                </ul>     
                                
                           </div>
                        )
                    })
                }
            </div>)
    }

    return (
        <>
            <div className='resume'>
                <h1>Education, Work Experiences, and Skills</h1>
                <div className="title-description">
                    <p>Below you will find my relevant education, work experiences, and skills and abilities.</p>
                    <p>Use the dropdown menus to navigate!</p>
                </div>
                <hr/>
                <h1 className="secondary-title">Education</h1>
                <div className='education-container'>
                    <div className='render-education'>
                        {renderEducatione(educationData.education)}
                    </div>
                </div>
                <hr/>
                <h1 className="secondary-title">Work Experiences</h1>
                <div className='box'> 
                    
                    <div className="render-resume">
                        <h2 className='resume-title'>Software Engineering & Data Analytics</h2>
                        {renderResume(resumeData.resumeTech)}
                    </div>
                    <div className="render-resume">
                        <h2 className='resume-title'>Training & Education</h2>
                        {renderResume(resumeData.resumeTraining)}
                    </div>
                    <div className="render-resume">
                        <h2 className='resume-title'>Customer Service</h2>
                        {renderResume(resumeData.resumeService)}
                    </div>
                    
                </div>
                <hr/>
                <h1 className="secondary-title">Skills</h1>
                <div className="skills-box">
                    <div className="render-languages">
                        {renderLanguages(skillsData.Languages)}
                    </div>
                    <div className="render-languages">
                        {renderTools(skillsData.Tools)}
                    </div>
                    <div className="render-languages">
                        {renderCerts(skillsData.Certifications)}
                    </div>
                </div>
                <Footer/>
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default Resume;