
import './App.scss'
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { AnimatePresence } from "framer-motion"
import Loader from 'react-loaders';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          
            <Route index element = {<Home/>}/>
            <Route path='home' element = {<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='About Me' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='Contact Me' element={<Contact/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='resume' element={<Resume/>}/>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
