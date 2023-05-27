import React, { useState } from "react";
import { FaPhone } from 'react-icons/fa';
import { HiChatAlt2 } from 'react-icons/hi';
import PopupForm from "./popupForm";

function Basic() {

    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='centerFIve'>
            <div className='basicContainer'>
                <div className='detail'>
                    <h2>Try Us Out Risk Free!</h2>
                    <p>Conceptually driven logo concepts that<br />
                        guarantee 100% client satisfaction. Consult now with a design expert today</p>
                </div>
            </div>
            <div className='centerContact'>
                <div className='mainContact'>
                    <div className='centerIconOne '> <FaPhone color='#fff' className='icon' size={35} /></div>
                    <p className='centerPhone'>Call Us: <span><a className='nmb' href='#'>878 2194 792</a></span></p>
                </div>
                <div className='mainContactTwo'>
                    <div className='centerIconTwo'> <HiChatAlt2 color='#fff' className='' size={45} /></div>
                    <p className='centerChat'>24/7 Avalaible <span>Live Chat</span></p>
                </div>
                <div className='contactbuton'>
                    <a onClick={togglePopup} className='centerBtun'>Let's Get Started</a>
                    {showPopup && <PopupForm />}
                </div>
            </div>
            <div className='basicLogo'>
                <p className='textLogo'>Basic Logo for</p>
                <h3 className='priceLogo'>$35</h3>
            </div>
        </div>
    );
}

export default Basic;