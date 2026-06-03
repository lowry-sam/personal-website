import './index.scss';
import NavBar from '../NavBar/index'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Spinner from '../Spinner';
import { useEffect, useState } from 'react';
import {AnimatePresence} from "framer-motion";



const Layout = () => {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSpinner(false)
        }, 2000)
    }, []);

    return (
        <>
        <AnimatePresence type="wait">
        <div className='App'>
            {/* {
                    showSpinner ? (<Spinner/> ):( */}
                        <div>
                    
                            <NavBar/>
                            
                            <div className="main-content"> <Outlet/></div>
                        
                            
                            {/* <Footer/> */}
                        </div>
                    
            
        </div>
        </AnimatePresence>
        </>
    
    )
}

export default Layout;