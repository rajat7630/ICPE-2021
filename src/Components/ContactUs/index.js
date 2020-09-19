import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel } from "react-materialize";
import './contactus.css'
class ContactUs extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                    >
                    <div className="addfilter">
                    <h1 className="mx-auto font-bold">KEYNOTE</h1>
                    </div>

                </Carousel>
            </div>
        );
    }
}

export default ContactUs;