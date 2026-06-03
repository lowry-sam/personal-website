import LogoPic from '../../assets/profile.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo'
import Loader from 'react-loaders';
// import { CircleLoader } from 'react-spinners';
import { Pinwheel } from 'ldrs/react'
import 'ldrs/react/Pinwheel.css'
//import ReactLoading from 'react-loading'

const Home = () => {
    const [ letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S', 'a', 'm', ' ', 'L', 'o', 'w', 'r', 'y']
    const jobArray = "Data Analyst".split('')

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
        <Loader type="line-scale" active/>
            <div className="container home-page">
                <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img
                    src={LogoPic}
                    alt="JavaScript Developer Name, Web Developer Name"
                    />
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                    <br />
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                    />
                </h1>
                <h2>Data Analyst / Software Developer / Technical Trainer</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
                </div>
                <Logo />
            </div>
            <Loader type='ball-scale-ripple-multiple'/>
            {/* <CircleLoader/> */}
            
            {/* <ReactLoading type="balls"/> */}
            
        </>
    );
}

export default Home;