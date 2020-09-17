import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import "./index.css";
class Home extends Component {
    render() {
        return (
            <>
                <div className="w-screen h-screen">
                    <div className="w-screen h-screen absolute">
                        <div className="w-screen h-screen bg-cover absolute addfilter"></div>
                    </div>
                    <div className="w-screen h-screen absolute">
                        <Navbar />
                        <div className="homeBlock mx-auto text-center text-white">
                            <h1 className="mx-auto eventHeading font-bold">
                                IC4E-2021
                            </h1>
                            <br />
                            <span className="eventName">
                                1st INTERNATIONAL CONFERENCE ON CUTTING-EDGE TECHNOLOGIES IN COMPUTING AND COMMUNICATION ENGINEERING
                            </span>
                            <br />
                            <div className="homelocation">
                                06th - 07th November, 2020<br />
                                National Institute of Technology,Kurukshetra
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="aboutHeading">
                        About IC4E-2021
                    </h1>
                    <p className="aboutData text-justify">
                        The theme of the conference is “Intelligent and Green technologies for Next Generation Electronics and Communication Systems”. The dependence of human life on the semiconductors and communications in the modern life has become ubiquitous. To achieve this goal, scientific and engineering researches are going on in the areas of communication, semiconductors and computing everywhere. The aim of this conference on Cutting-edge Technologies in Computing and Communication Engineering (IC4E-2020) is to bring leading academicians, industrialists, government standard organizations, scientists, research scholars, UG/PG students on the same platform to present their work and discuss the various prospective for the implementation of next generation electronic systems keeping in view that the technologies are environment friendly.


                        Considering the situation arising out of the Covid-19 pandemic,the organising committee of the IC4E 2020 has decided to make the conference fully virtual. The decision aims to eliminate uncertainty and ensure the safety and health of the stakeholders in the event. Though registration fee is reduced, the event will be as comprehensive and committed to its goal as in- physical space events.
                    </p>
                </div>

                <div className="row flex flex-row infoouter">
                    <div className="col l4 m6 s12 infobox">
                        Paper submissions are invited in the areas of next generation computing and communication Systems towards Intelligent and Green technologies.

                        Submit your research paper to IC4E-2020 through the Online Submission System .
                        Easychair link
                    </div>
                    <div className="col l4 m6 s12 infobox">
                        The proposal for an edited book is approved for the book series Algorithms for Intelligent Systems.The original papers presented in the conference, modified by authors as book chapters and under the special theme Intelligent Computing and Communication Systems will be published as book chapter in the edited volume.

                        High quality extended papers of IC4E2020 will be invited for possible submission and publication (after another rigorous review) in the special/regular issues of the following journals:

                        ⦁ Computers & Electrical Engineering, Elsevier (SCI Indexed IF 2.18)

                        ⦁ Nano Communication Networks - Journal - Elsevier (SCI Indexed IF 2.25)

                        ⦁ International Journal of Intelligence and Sustainable Computing, Inderscience
                    </div>
                    <div className="col l4 m12 s12 infobox">
                        ➡ Initial Paper Submission: 30 June 2020
                        ➡ Full paper submission deadline extended: 30 July 2020

                        ➡ Decision Notification: 31 August 2020

                        ➡ Final Submission: 15 September 2020

                        ➡ Registration Deadline: 15 September 2020
                    </div>

                </div>
            </>
        );
    }
}

export default Home;