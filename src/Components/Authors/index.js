import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import { Carousel,Row,Card,Col,Icon,CardTitle } from "react-materialize";
import './authors.css';
class Authors extends Component {
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
                    <div className="back">
                        <h1 className="font-bold font-setting">AUTHORS</h1>
                    </div>
                </Carousel>

            </div>
        );
    }
}

export default Authors;