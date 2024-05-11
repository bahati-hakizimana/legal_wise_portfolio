import React from 'react'
import Law12 from '../../assets/website/Law12.webp';

function About() {
    return (
        <section id="about">
            <h2
                data-aos="fade-up"
                className=" text-center text-3xl underline underline-offset-4">About us</h2>
            <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">

                <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">

                    <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
                        <div
                            data-aos="fade-right"

                        >
                            <img
                                src={Law12}
                                alt="No image"
                                className="max-auto w-full hover:drop-shadow-md"
                            />
                        </div>
                        <div

                            data-aos="fade-left"
                            // data-aos-duration="400"
                            // data-aos-once="true"
                            className="flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left "

                        >
                            {/* <h1 className="text-xl md:text-xl ">
                                Empowe Africa Now develops and maintains its products and services to be enterprise grade.
                            </h1> */}
                            <h2 className=" text-2xl">Our Firm</h2>
                            <p className="text-sm  dark:text-slate-400">
                                LegalWise Chambers (LegalWise) is a full-service Rwandan corporate
                                and commercial law firm with an international scope,
                                capacity and experience, located at the heart of Kigali City.
                            </p>
                            <div>
                                <h2 className=" text-2xl">Vision</h2>
                                <p className="text-sm  dark:text-slate-400">
                                    Our goal is to be the law firm of choice for clients looking for
                                    a high degree of local and international legal expertise, integrity
                                    and a client-centred approach to business dealings. The principal
                                    philosophy of the firm is to be a crucial part of our clients’ success
                                    and to provide holistic legal solutions to business needs.
                                </p>
                            </div>
                            <div>
                            
                                <p className="text-sm  dark:text-slate-400">
                                    Our vision is to always provide practical, consistent, and
                                    cost-effective legal solutions, with a keen focus on ultimate client satisfaction.
                                </p>
                                <h2 className=" text-2xl">Mission</h2>
                                <p className="text-sm  dark:text-slate-400">
                                Our mission is to be the leading legal firm of choice in Rwanda,
                                 known for its client-focus and timely and relevant legal services
                                  that meet client needs and exceed expectations.
                                </p>
                            </div>
                            {/* <div className="space-x-4">
                                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                                    Get Started
                                </button>
                            </div> */}
                        </div>

                    </div>
                </section>
            </main>
        </section>
    )
}

export default About
