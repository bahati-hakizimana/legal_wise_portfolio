import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div

                className="container">
                <h2
                    data-aos="fade-up"
                    className=' text-headingColor font-[700] text-[2.5rem] mb-8'>Get in tourch</h2>
                <div className=' md:flex justify-between items-center'>
                    <div
                        data-aos="fade-right"
                        className="w-full md:w-1/2 h-[300] sm:h-[450px]">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.498861282189!2d30.09776527365175!3d-1.9537791367171984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5238aeba517%3A0x1f93322d92c581fa!2sLegalWise%20Chambers!5e0!3m2!1sen!2srw!4v1715422444581!5m2!1sen!2srw"
                            className=' w-full border-0 h-full'
                            allowFullcSreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>

                    <div
                        data-aos="fade-left"
                        className=' w-full mt-8 md:mt-0 md:w-1/2 
                    sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form className=' w-full' action="">
                            <div className="mb-5">
                                <input
                                    type="text"
                                    name="" id=""
                                    placeholder='Enter your name'
                                    className=' w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    name="" id=""
                                    placeholder='Enter your Email'
                                    className=' w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    name="" id=""
                                    placeholder='Subject'
                                    className=' w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    type="text"
                                    rows={3}
                                    name="" id=""
                                    placeholder='Write you message'
                                    className=' w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <button className='flex items-center justify-center gap-1 w-full p-3 focus:outline-none rounded-[5px] bg-gray-500 text-white
                             hover:bg-headingColor ease-linear duration-150'>
                                <i class="ri-mail-send-line text-2xl"></i>Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact