import React from 'react';
import './index.scss'
import Loader from 'react-loaders';
import { MoonLoader } from 'react-spinners';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react'
import portfolioData from '../../data/portfolio.json'
import pic from '../../assets/image-gallery/profile10.jpg'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../Modal/Modal';

const Portfolio = ({showItem}) => {
    const [ letterClass, setLetterClass ] = useState('text-animate')

    const doSomething = async() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
    }
        
    useEffect(() =>{
         doSomething();
    },[])

    const titleArray = "Personal Portfolio".split('')

    const [ showModal, setShowModal ] = useState(showItem)

    const childReceive = (modalData) => {
        setShowModal(modalData)
    }

    // const renderModal = (index) => {
    //     return (
    //         <div>
                
    //         </div>
    //     )
        
    // }

    const [ indexNum, setIndex ] = useState('0') 

    const renderPortfolio = (portfolio) => {
        return (
            <div className='portfolio-gallery'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div key= {idx} className={'gallery-item ' + idx}>
                            <button 
                                onClick={() => {setShowModal(!showModal); setIndex(idx)}}
                                className='image-button'
                                >
                                
                                    <img src={port.cover} alt={"portfolio-image " + idx} className={"portfolio-image " + idx}/>
                                    <div className="content">
                                        <p className="title">{port.title}</p>
                                        <h4 className="description">{port.description}</h4>
                                        {/* <button
                                            className="btn"
                                            onClick={() => setShowModal(!showModal)}
                                            //href="#myimage"
                                            >View</button> */}
                                    </div>
                                    
                                    
                                </button></div>
                            // <div key={idx} className='image-box'>
                            //     <img src={port.cover} alt="portfolio" className="portfolio-image"/>
                            //     <div className="content">
                            //         <p className="title">{port.title}</p>
                            //         <h4 className="description">{port.description}</h4>
                            //         <button
                            //         className="btn"
                            //         onClick={() => window.open(port.url)}
                            //         >View</button>
                            //     </div>
                            // </div>
                        )
                    })
                }
            </div>
        );
    }

    // const showModal = (index) => {
    //     return (
    //         <div>
    //             <Modal index={2}/>
    //         </div>
    //     )
    // }

    return (
        <>
            <div className='portfolio-page-something'>
                
                
                <div className='header'>
                    <h1 className='page-title'>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            //strArray={['P', 'e', 'r', 's', 'o', 'n', 'a', 'l', ' ', 'P', 'o', 'r', 'f', 'o', 'l', 'i', 'o']}
                            strArray={titleArray}
                            idx={0}
                        />
                    </h1>
                    <p>Below are examples of my work in 
                        <span className='nav-bar-text'> Software Development </span> and 
                        <span className='nav-bar-text'> Data Analytics</span>.
                        Click on each for more details and links to view them!
                    </p>
                </div>
                
                 <div className="render-portfolio">
                    {renderPortfolio(portfolioData.portfolio)}
                   {/*<div className='images-container 1'>
                        <div className="image-box" > 
                            <img src={pic}  />
                            <div className="content">
                                <p className="title">"hey"</p>
                                <h4 className="description">description</h4>
                                <button
                                className="btn"
                                onClick={() => setShowItem(true)}
                                >View</button>
                            </div>
                        </div>
                        
                    </div>
                    <button onClick={() => setShowModal(!showModal)}>
                        <div className='img-container 2'>
                            <img src={pic}/>
                            <div className="content">
                                <p className="title">"hey"</p>
                                <h4 className="description">description</h4>
                                {/* <button
                                    className="btn"
                                    onClick={() => setShowModal(!showModal)}
                                    //href="#myimage"
                                    >View</button> 
                            </div>
                            </div>
                        </button>
                        
                    
                    <div className='img-container 3'>
                        <img src={pic}/>
                        
                    </div>
                    <div className='img-container 4'>
                        <img src={pic}/>
                        
                    </div>
                     <div className='img-container'>
                        <img src={pic}/>
                        
                    </div>
                    <div className='img-container'>
                        <img src={pic}/>
                        
                    </div> 


                    <img src={pic}/> */}
                    
                </div>
                {/* <div className='image-gallery'>
                    <button class="gallery-item"><img src={pic} alt="Gallery 1"/></button>
                    <button class="gallery-item" aria-label="View Gallery Image 1"><img src={pic} alt="Gallery 1"/><div class="title-overlay">Forest Pathway</div></button>
                    <button class="gallery-item" aria-label="View Gallery Image 1"><img src={pic} alt="Gallery 1"/></button>
                    <button class="gallery-item" aria-label="View Gallery Image 1"><img src={pic} alt="Gallery 1"/></button>
                    <button class="gallery-item" aria-label="View Gallery Image 1"><img src={pic} alt="Gallery 1"/></button>
                    <button class="gallery-item" aria-label="View Gallery Image 1"><img src={pic} alt="Gallery 1"/></button>
                </div> */}
                {showModal && <Modal changeModalState={childReceive} index={indexNum}/>}
            </div>
            
            <Loader type="ball-scale-ripple-multiple"/>
        </>
    );
}

export default Portfolio