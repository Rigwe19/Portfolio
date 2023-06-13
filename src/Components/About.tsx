import React from 'react'
import hero from '../assets/img.png';
type Props = {}

const About = (props: Props) => {
    return (
        <section id='about'>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Reinhard
                        <br className="hidden lg:inline-block" /> I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                        I am a fullstack web developer with 5 years+ experience PHP and the Laravel
                        framework, Javascript with the following frameworks, ReactJs, VueJs
                        and NodeJs and its frameworks expressJs and NextJs, i also have experience 
                        in electronJs for cross platform desktops app and Ionic for cross platform
                        mobile apps with Laravel i can create RESTful API that the frontend can consume
                        or i use InertiaJs for the monolithic approach
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-green-100 rounded text-lg">Work With Me</a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">See My Previous Works</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hero-img">
                    <img src={hero} alt="hero" className="object-cover object-center rounded" />
                </div>
            </div>
        </section>
    )
}

export default About