import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

type Props = {}

function NavBar({ }: Props) {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 p-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <span className="title-font font-medium text-white mb-4 md:mb-0">
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500} to="about" className="ml-3 text-xl cursor-pointer">Igwe Reinhard</Link>
        </span>
        <nav className="md:mr-auto md:py-1 md:ml-4 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500} to="projects" className="mr-5 hover:text-white cursor-pointer">Past Works</Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500} to="skills" className="mr-5 hover:text-white cursor-pointer">Skills</Link>
          {/* <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500} to="testimonials" className="mr-5 hover:text-white">Testimonials</Link> */}
        </nav>
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500} to="contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </Link>
      </div>
    </header>
  )
}

export default NavBar;