import React from 'react';
import ReactDOM from 'react-dom/client';
import reactjs from '../../assets/reactjs.svg';
import html5 from '../../assets/html5.svg';
import css3 from '../../assets/css3.svg';
import tailwind from '../../assets/tailwind.svg';
import javascript from '../../assets/javascript.svg';
import laravel from '../../assets/laravel.svg';
import mysql from '../../assets/mysql.svg';
import postgres from '../../assets/postgres.svg';
import sqlite from '../../assets/sqlite.svg';


import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import wordpress from '../../assets/wp.svg';

const Skills = () => {
    return (
        
        <div className="grid grid-cols-2 gap-4 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-auto animate-pulse-once">
            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={html5} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">HTML5</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={css3} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">CSS3</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={tailwind} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Tailwind</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={javascript} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">JavaScript</div>
                </div>
            </div>


            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={reactjs} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">React JS</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={laravel} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Laravel</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={mysql} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">MySQL</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={postgres} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">PostgreSQL</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={sqlite} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">SQLite</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={git} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Git</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={github} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Github</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={wordpress} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Wordpress</div>
                </div>
            </div>


        </div>
        
        
    );
}

export default Skills;

if (document.getElementById('skills')) {
    const App = ReactDOM.createRoot(document.getElementById("skills"));

    App.render(
        <React.StrictMode>
            <Skills/>
        </React.StrictMode>
    )
}
