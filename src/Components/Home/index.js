import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import InfoCarousel from "./InfoCarousel/index";
import "./home.css";
class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="w-screen h-screen">
                    <div className="w-screen h-screen absolute">
                        <div className="w-screen h-screen bg-cover absolute addhome"></div>
                    </div>
                    <div className="w-screen h-screen absolute">
                        <div className="homeBlock mx-auto text-center text-white">
                            <h1 className="mx-auto eventHeading font-bold">
                                ICPE-2021
                            </h1>
                            <br />
                            <span className="eventName">
                                1st INTERNATIONAL CONFERENCE ON CUTTING-EDGE TECHNOLOGIES IN COMPUTING AND COMMUNICATION ENGINEERING
                            </span>
                            <br />
                            <div className="homelocation">
                                JUNE, 2021<br />
                                National Institute of Technology,Kurukshetra
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="aboutHeading">
                        About ICPE-2021
                    </h1>
                    <p className="aboutData text-justify">
                        The theme of the conference is “Intelligent and Green technologies for Next Generation Electronics and Communication Systems”. The dependence of human life on the semiconductors and communications in the modern life has become ubiquitous. To achieve this goal, scientific and engineering researches are going on in the areas of communication, semiconductors and computing everywhere. The aim of this conference on Cutting-edge Technologies in Computing and Communication Engineering (IC4E-2020) is to bring leading academicians, industrialists, government standard organizations, scientists, research scholars, UG/PG students on the same platform to present their work and discuss the various prospective for the implementation of next generation electronic systems keeping in view that the technologies are environment friendly.
                        <br />
                        <br />

                        Considering the situation arising out of the Covid-19 pandemic,the organising committee of the IC4E 2020 has decided to make the conference fully virtual. The decision aims to eliminate uncertainty and ensure the safety and health of the stakeholders in the event. Though registration fee is reduced, the event will be as comprehensive and committed to its goal as in- physical space events.
                    </p>
                </div>
                <div>
                    <InfoCarousel />
                </div>
                <div className="map">
                    <iframe className="mapframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1166&amp;height=578&amp;hl=en&amp;q=National%20Institute%20of%20Technology,%20Kurukshetra%20kurukshetra+(National%20Institute%20of%20Technology,%20Kurukshetra)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=fdf226e91b73c9972541d5db6f957e965e925895'></script>
                </div>
                <div className="w-screen partners ">
                    <h1 className="partnerHeading text-white">
                        Partners
                        </h1>
                </div>
            </div>
        );
    }
}

export default Home;