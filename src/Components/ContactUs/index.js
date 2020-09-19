import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import 'materialize-css';
import { Carousel,Row,Card,Col,Icon,CardTitle } from "react-materialize";
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
                    <div className="add">
                        <h1 className="font-bold font-setting">CONTACT US</h1>
                    </div>

                </Carousel>
                <Row className="card-alignment">
                    <Col
                        m={3}
                        s={11}
                    >
                        <Card
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                            revealIcon={<Icon>more_vert</Icon>}
                            className="hoverable"
                        >
                            Here is the standard card with an image thumbnail.
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContactUs;