import React from 'react'
import code from '../assets/wa.link_4ll0xf.png'
import { QrCodeIcon } from '@heroicons/react/24/solid'
type Props = {}

const Contact = (props: Props) => {
    return (
        <section id='contact' className="text-gray-400 bg-gray 900 body-font">

            <div className="container px-5 py-10 mx-auto lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <QrCodeIcon className="inline-block w-10 mx-auto mb-4" />
                    <h1 className="mb-4 text-3xl font-medium text-center text-white sm:text-4xl title-font">
                        Contact Me
                    </h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                        To get direct access to me you can scan the code below to Message
                        me on whatsapp or click the link <a href="http://wa.link_4ll0xf">here</a>
                    </p>
                    <div className="flex justify-center w-full mx-auto my-4 lg:w-2/3">
                        <img src={code} alt="code" /> 
                    </div>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                        You can also send me an email to
                        me on <a href="mailto:igwereinhard@gmail.com">igwereinhard@gmail.com</a>
                    </p>
                </div>
                
                {/* <div className="flex mx-2 mb-2">
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
                <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">Send me a message</button> */}
            </div>
        </section>
    )
}

export default Contact