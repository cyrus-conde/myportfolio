import { Fragment } from 'react';
import Navbar from './components/nav-menu';
import Home from './components/index';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';

import Contact from './components/contact';
import Footer from './components/footer';
import CountdownTimer from './components/newyear-countdown';
const App = () => {
    
    
    return (
        <Fragment>
            <Navbar/>
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            
            <Contact/>
            
            <Footer/>
            <CountdownTimer/>
        </Fragment>
        

    )
}

export default App;