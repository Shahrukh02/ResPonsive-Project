import React, { useState } from "react";
import PopupForm from "./popupForm";


function Portfolio() {

    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='centerSix'>
            <div className='portfolioContainer'>
                <div className='portfolioHeading'>
                    <h2>Our Portfolio</h2>
                    <p>Us Design Central is loved and chosen by its clients because of the creative, aesthetically-pleasing and crisp design. All
                        the design ninjas at our company are industry-experienced and out of the box thinkers.</p>
                </div>
            </div>
            {/* <Navigation /> */}
            <div className='portfolioChatSec'>
                <div className='portfol ioChatContainer'>
                    <div>
                        <a onClick={togglePopup} className='portfoliobtn'>Let's Get Started</a> {showPopup && <PopupForm />}

                    </div>
                    <div className='chatContainer'>
                        <div className='portfolioChatIcon'> </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Portfolio;