import Loader from 'react-loaders';
import { CircleLoader } from 'react-spinners';
import Footer from '../Footer';
import './index.scss'
import resumeData from '../../data/resume.json'
import Spinner from '../Spinner';
import {useState, useEffect} from 'react'

const renderResume = (resume) => {
        return (
            <div className='container'>
                {
                    resume.map((job, idx) => {
                        return (
                            <div key={idx} className='resume-box'>
                                {/* <img src={port.cover} alt="portfolio" className="portfolio-image"/> */}
                                <div className="content">
                                    <p className="title">{job.title}</p>
                                    <h4 className="description">{job.description}</h4>
                                    <h4 className="description">{job.company}</h4>
                                    <h4 className="tags">{job.tags}</h4>
                                    <h4 className="dates">{job.startDate} to {job.endDate}</h4>
                                    {/* <button
                                    className="btn"
                                    onClick={() => window.open(job.url)}
                                    >View</button> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

const Resume = () => {

    return (
        <>
       
        
        <div className='resume'>
            <div className='box'> 
                <h1>Hello!</h1>
                <div className="render-resume">
                    {renderResume(resumeData.resume)}
                </div>
            
            </div>
           
            
            {/* <ul>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>




                v<li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
                <li>helisdjflsdf</li>
            </ul> */}
            <Footer/>
        </div>
       
        
        
        
        <Loader type='ball-scale-ripple-multiple'/>
        </>
    )
}

export default Resume;