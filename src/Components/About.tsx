import React from 'react'
import hero from '../assets/img.png';
import { Element } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter'
type Props = {}
let currentYear = new Date().getFullYear() - 2017;

const About = (props: Props) => {
    return (
        <Element name='about'>
            <div className="container flex flex-col items-center px-10 py-20 mx-auto md:flex-row">
                <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">

                    <h1 className="mb-4 text-3xl text-white title-font md:text-5xl font-bold">
                        <Typewriter
                            cursor
                            cursorStyle='_' words={["Hi, I'm Reinhard", "I love to build amazing apps."]} />
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                        I am a fullstack web developer with {currentYear} years+ experience PHP and the Laravel
                        framework, Javascript with the following frameworks, ReactJs, VueJs
                        and NodeJs and its frameworks expressJs and NextJs, i also have experience
                        in electronJs for cross platform desktops app and Ionic for cross platform
                        mobile apps with Laravel i can create RESTful API that the frontend can consume
                        or i use InertiaJs for the monolithic approach
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600 hover:text-green-100">Work With Me</a>
                        <a href="#projects" className="inline-flex px-6 py-2 ml-4 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">See My Previous Works</a>
                    </div>
                </div>
                <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2 hero-img">
                    <img src={hero} alt="hero" className="object-cover object-center rounded" />
                </div>
            </div>
        </Element>
    )
}

export default About