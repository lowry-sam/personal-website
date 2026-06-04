import Loader from 'react-loaders';
import { CircleLoader } from 'react-spinners';
import Footer from '../Footer';
import './index.scss'
import resumeData from '../../data/resume.json'
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
    

    return (
        <>
            <div className='resume'>
                <h1>Education, Work Experiences, and Skills</h1>
                <div className="title-description">
                    <p>Below you will find my relevant education, work experiences, and skills and abilities.</p>
                    <p>Use the dropdown menus to navigate!</p>
                </div>
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
                <Footer/>
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default Resume;