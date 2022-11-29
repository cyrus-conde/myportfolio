import React, { Fragment,useState } from 'react';
import ReactDOM from 'react-dom/client';
import me from '../../assets/me.jpg';
import Skills from './skills';


const About = () => {
    const [about,setAbout] = useState("knowmemore");
    return (
        <Fragment>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">
                    ABOUT
                    </h1>
                    
                </div>
                
                <span className="inline-flex justify-center text-center w-full mb-12 ">

                    
                        <button onClick={()=>setAbout("knowmemore")} className={(about == "knowmemore") ? "bg-blue-700 text-white font-bold py-2 px-4" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}>Know me More</button>
                        <button onClick={()=>setAbout("skills")} className={(about == "skills") ? "bg-blue-700 text-white font-bold py-2 px-4" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}>Technical Skills</button>
                </span>
            
            {(about == "knowmemore" ? 
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:grid-rows-1 animate-pulse-once">
                <div className="place-self-center lg:col-span-5 lg:flex">
                    <figure>
                        <img src={me} className="h-full object-cover rounded-2xl drop-shadow-5xl shadow-black hover:hue-rotate-15"/>
                    </figure>
                </div>
                <div className="lg:mt-0 lg:col-span-7 lg:flex lg:col-start-8 place-self-center">
                    <div>
                        <p className="text-5xl font-sans font-black tracking-wider text-center underline decoration-pink-500">WHO AM I</p>
                        <p className="text-justify my-5">
                            I am Mc Drach Cyrus Conde, 22 years old, studies Information Technology at Mindanao State University - Iligan Institute Technology.
                        </p>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        :
        <Skills/>
        )}
        </div>
            
        </Fragment>
        
    );
}

export default About;

if (document.getElementById('about')) {
    const Abouts = ReactDOM.createRoot(document.getElementById("about"));

    Abouts.render(
        <React.StrictMode>
            <About/>
        </React.StrictMode>
    )
}
