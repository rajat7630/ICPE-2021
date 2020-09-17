import React, { Component } from 'react';
import "../index.css";
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }
    render() {
        return (
            <>
                <div className="h-screen w-screen">
                    <img className="h-screen w-screen absolute" src={require("../images/building" + this.state.index + ".jpg")} />
                    <div className="flex justify-between absolute w-12 mx-auto pb-2">
                        
                    </div>
                </div>
            </>
        );
    }
}

export default Carousel;