import React, { Component } from 'react';
import "../home.css";
class InfoCarousel extends Component {
    render() {
        return (
            <>

                <div className="infoouter">
                    <div className="col l4 m6 s12 infobox">
                        <h1 className="infoHeading font-bold">
                            SUBMISSION
                        </h1>
                        <p className="infoData">
                            Paper submissions are invited in the areas of next generation computing and communication Systems towards Intelligent and Green technologies.

                            Submit your research paper to IC4E-2020 through the Online Submission System .
                            Easychair link
                        </p>
                    </div>
                    <div className="col l4 m6 s12 infobox">
                        <h1 className="infoHeading font-bold">
                            PUBLICATION
                        </h1>
                        <p className="infoData">
                            The proposal for an edited book is approved for the book series Algorithms for Intelligent Systems.The original papers presented in the conference, modified by authors as book chapters and under the special theme Intelligent Computing and Communication Systems will be published as book chapter in the edited volume.

                            High quality extended papers of IC4E2020 will be invited for possible submission and publication (after another rigorous review) in the special/regular issues of the following journals:

                        </p>
                    </div>
                    <div className="col l4 m12 s12 infobox">
                        <h1 className="infoHeading font-bold">
                            KEYDATES
                        </h1>
                        <p className="infoData">
                            ➡ Initial Paper Submission: 30 June 2020
                            ➡ Full paper submission deadline extended: 30 July 2020

                            ➡ Decision Notification: 31 August 2020

                            ➡ Final Submission: 15 September 2020

                            ➡ Registration Deadline: 15 September 2020
                        </p>
                    </div>

                </div>
            </>
        );
    }
}

export default InfoCarousel;