
import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"
import { PopupButton, PopupWidget } from "react-calendly"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        I'm Keerthanen Ravichandran (he/him), currently a Front Office UI Engineer at Trafigura, where you've been working since December 2024 developing a Commodities Trading platform. Before that, you spent over 5 years at JPMorgan Chase as an Associate in various roles including Front-end Developer for Execution Workspace and Python Developer for Rates/Equities Market Data.
                        You've demonstrated your technical skills by winning the Norway AI Hackathon and being selected as a finalist in the prestigious a16z (Andreessen Horowitz) Hackathon. You also co-founded Alpha Tech Camp, an eLearning platform that delivered coding education to children aged 12-15, which was your first entrepreneurial venture.
                        </p>
                    </div>
                    <br></br>
                    <a download="Curriculum Vitae Keerthanen Ravichandran" href="/Curriculum_Vitae_Keerthanen_Ravichandran.pdf">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Download CV
                        </button>
                    </a>
                    <PopupButton
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-4 rounded"
                        color="#00a2ff"
                        text="Book a meeting"
                        textColor="#ffffff"
                        url="https://calendly.com/keerthanen/30min"
                    />
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;