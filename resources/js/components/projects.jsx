import React from 'react';
import ReactDOM from 'react-dom/client';
import comingsoon from '../../assets/comingsoon.png';

const Projects = () => {
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">
                PROJECTS
                </h1>
                
            </div>
            <div className="p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">  
                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full" src={comingsoon} alt="Coming Soon"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Coming Soon</div>
                    <p className="text-white-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
                </div>
                </div>
                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full" src={comingsoon} alt="Coming Soon"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Coming Soon</div>
                    <p className="text-white-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
                </div>
                </div>
                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full" src={comingsoon} alt="Coming Soon"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Coming Soon</div>
                    <p className="text-white-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
                </div>
                </div>
                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full" src={comingsoon} alt="Coming Soon"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Coming Soon</div>
                    <p className="text-white-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
                </div>
                </div>

                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full" src={comingsoon} alt="Coming Soon"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Coming Soon</div>
                    <p className="text-white-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
                </div>
                </div>

                
                
            </div>
        </div>
            
        
    );
}

export default Projects;

if (document.getElementById('projects')) {
    const Project = ReactDOM.createRoot(document.getElementById("projects"));

    Project.render(
        <React.StrictMode>
            <Projects/>
        </React.StrictMode>
    )
}
