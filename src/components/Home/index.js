import Logopic from '../../assets/profile.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {
    const [ letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S', 'a', 'm', ' ', 'L', 'o', 'w', 'r', 'y']
    const jobArray = ['D', 'a', 't', 'a']

//    useEffect (() => {
//     return setTimeout(() => {
//         setLetterClass('text-animate-hover')
//     }, 4000)
//    }, []) 

    return (
        <>
        <div className="container home-page"> 

            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass}_12`}>i!</span>
                <br/>
                <span className={`${letterClass}_13`}>I'</span>
                <span className={`${letterClass}_14`}>m:</span>
                <img src = {Logopic} alt="developer"/>
                Sam
                <AnimatedLetters letterClass={letterClass} strArray = {nameArray} idx={15} />
                <br/>
                Data Analyst and Code Creator
                </h1>
                <h2> Fun guy and haha </h2>
                <Link to = "/contact" className='flat-button' >Contact me!</Link>
                
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    );
}

export default Home;