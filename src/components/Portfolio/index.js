import React from 'react';
import './index.scss'
import Loader from 'react-loaders';
import { MoonLoader } from 'react-spinners';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
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

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div key={idx} className='image-box'>
                                <img src={port.cover} alt="portfolio" className="portfolio-image"/>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                    >View</button>
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
                    {/* {renderPortfolio(portfolioData.portfolio)} */} Hello
                </div>
            </div>
            {/* <CircleLoader color="blue" /> */}
            <Loader type="ball-scale-ripple-multiple"/>
        </>
    );
}

export default Portfolio