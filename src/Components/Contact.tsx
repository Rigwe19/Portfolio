import React from 'react'
import code from '../assets/wa.link_4ll0xf.png'
import { QrCodeIcon } from '@heroicons/react/24/solid'
type Props = {}

const Contact = (props: Props) => {
    return (
        <section id='contact' className="text-gray-400 bg-gray 900 body-font">

            <div className="container px-5 py-10 mx-auto lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <QrCodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
                        Contact Me
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        To get direct access to me you can scan the code below to Message
                        me on whatsapp or click the link <a href="http://wa.link_4ll0xf">here</a>
                    </p>
                    <div className="w-full lg:w-2/3 flex justify-center mx-auto my-4">
                        <img src={code} alt="code" /> 
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        You can also send me an email to
                        me on <a href="mailto:igwereinhard@gmail.com">reinhardigwe@gmail.com</a>
                    </p>
                </div>
                
                {/* <div className="mx-2 mb-2 flex">
                    <div className="w-1/2 mx-1 rounded-sm">
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" className="w-full px-2 py-2 rounded-sm" />
                    </div>
                    <div className="w-1/2 rounded-sm">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" className="w-full px-2 py-2 rounded-sm" />
                    </div>
                </div>

                <div className="mx-3 mb-2 rounded-sm">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className='w-full' id="message" rows={10}></textarea>
                </div>
                <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Send me a message</button> */}
            </div>
        </section>
    )
}

export default Contact