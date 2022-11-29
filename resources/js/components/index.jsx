import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Typewriter from 'typewriter-effect';
import logo from '../../assets/logo.png';

const Home = () => {
    return (
        <Fragment>
            
                <div className="flex-1 flex items-center justify-center h-full">
                
                        <img src={logo} className="md:w-5/12 h-full object-cover"/>
                    
                </div>
                <div className="flex-1">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('<span class="text-xl">Hello there,</span>')

                                .pauseFor(1500)
                                .changeDelay(50)
                                .typeString("<br><span class='text-5xl'>I'm Mc Drach Cyrus Conde</span>")
                                .pauseFor(1500)
                                .changeDelay('natural')
                                .typeString("<br><span class='text-2xl'>a full-stack web developer.</span>")
                                .start();
                            }}
                    />
                </div>
            </Fragment>
        
    );
}

export default Home;

if (document.getElementById('home')) {
    const Index = ReactDOM.createRoot(document.getElementById("home"));

    Index.render(
        <React.StrictMode>
            <Home/>
        </React.StrictMode>
    )
}
