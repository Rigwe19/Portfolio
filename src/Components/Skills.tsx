import { CheckBadgeIcon, CpuChipIcon, StarIcon } from '@heroicons/react/24/solid';
import { skills } from './data'
import { Children } from 'react';
export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <CpuChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        I have amassed the following skills during the course of my deep dive into
                        web development, the stars shows how much proficient i am at the moment on
                        each <br/>
                        <strong>NOTE: </strong>They are subject to change as my knowledge in each is expanded.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {Children.toArray(skills.map(skill => (
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center justify-between">
                                <div className='flex'>
                                <img src={skill.logo} alt="logo" className='w-10' />
                                    <span className="ml-2 title-font font-medium text-white">
                                        {skill.name}
                                    </span>
                                </div>
                                <div className='flex'>
                                    {Children.toArray(Array.from(Array(skill.rate).keys()).map(rate=>{
                                        return <StarIcon className='text-green-400 w-6 h-6 flex-shrink-0 mr-0' />
                                    }))}
                                    
                                </div>
                                    
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </section>
    )
}