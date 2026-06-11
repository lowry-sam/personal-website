import './index.scss';
import NavBar from '../NavBar/index'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Spinner from '../Spinner';
import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom'



const Layout = () => {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSpinner(false)
        }, 2000)
    }, []);
    const location = useLocation();
    let result = location.pathname.replace("/", "");
    let realLocation = result.replace("%20", " ");
    if ((realLocation === "")) {
        realLocation = "Home";
    }

    return (
        <>
        <AnimatePresence type="wait">
        <div className='App'>
            {/* {
                    showSpinner ? (<Spinner/> ):( */}
                        <div>
                    
                            <NavBar navigation={realLocation}/>
                            
                            <div className="main-content"> <Outlet/></div>
                        
                            
                            {/* <Footer/> */}
                        </div>
                    
            
        </div>
        </AnimatePresence>
        </>
    
    )
}

export default Layout;