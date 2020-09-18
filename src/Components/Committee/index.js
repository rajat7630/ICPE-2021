import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import "./committee.css";
class Committee extends Component {
    render() {
        return (
            <>
                <div className="w-screen h-screen">
                    <div className="w-screen h-screen absolute">
                        <div className="w-screen h-screen bg-cover absolute committeeaddfilter"></div>
                    </div>
                    <div className="w-screen h-screen absolute">
                        <div className="fixed w-screen navbar">
                            <Navbar />
                        </div>
                        <div className="homeBlock mx-auto text-center text-white">
                            <h1 className="mx-auto eventHeading font-bold">
                                ORGANIZING COMMITTEE
                        </h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Committee;