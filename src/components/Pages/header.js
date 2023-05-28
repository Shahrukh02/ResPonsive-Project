import React, { useState } from "react";
import Logo from '../../images/logo.png';
import { FaPhone } from 'react-icons/fa';
import { HiChatAlt2 } from 'react-icons/hi';
import PopupForm from "./popupForm";
function Header() {

    const [showPopup, setShowPopup] = useState(false);
    const closePopup = () => setShowPopup(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='container header_container'>
            <div className='logo'>
                <img src={Logo} height={'auto'} />
            </div>
            <div className="contact_header_div">
            <div className='phone'>
                <p className='phoneNmd'>Call Us: <span><a className='nmb' href='#'>+1 878-219-4792</a></span></p>
                <div className='phoneIcon'> <FaPhone color='#479fd0' className='icon' size={35} /></div>
            </div>
            <div className='message'>
                <p className='messageText'>24/7 Avalaible <span className="live_chat">Live Chat</span></p>
                <div className='messageIcon'> <HiChatAlt2 color='#479fd0' className='chaticon' size={45} /></div>
            </div>
            <div className='button'>
                <a onClick={togglePopup} className='btnText'>Let's Get Started</a>
                {showPopup && <PopupForm closePopup={closePopup} />}

            </div>
            </div>
        </div>
    );
}


export default Header;