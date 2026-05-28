import './index.scss';
import Sidebar from '../Sidebar/index'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return <>
        <div className='App'>
            <Sidebar/>
            <span className='tags top-tags'>
                <span className='top-tag-html'>&lt;html&gt;</span>
                <br/>
                <span>&lt;body&gt;</span>
            </span>
            <Outlet/>
            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br/>
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
        </div>
    </>
}

export default Layout