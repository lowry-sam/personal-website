import './index.scss';
import NavBar from '../NavBar/index'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Layout = () => {
    return <>
        <div className='App'>
           
            <NavBar/>
            {/* <span className='tags top-tags'>
                <span className='top-tag-html'>&lt;html&gt;</span>
                <br/>
                <span>&lt;body&gt;</span>
            </span> */}
            <div className="main-content"> <Outlet/></div>
           
            {/* <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br/>
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span> */}
            <Footer/>
        </div>
    </>
}

export default Layout