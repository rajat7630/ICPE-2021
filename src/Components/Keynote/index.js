import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel,Row,Card,Col,Icon,CardTitle } from "react-materialize";
import "./keynote.css";
class KeyNote extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                >
                    <div className="addfilter">
                        <h1 className="font-bold font-setting">KEYNOTE</h1>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default KeyNote;