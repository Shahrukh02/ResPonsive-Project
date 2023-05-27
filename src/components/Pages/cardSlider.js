import React, { useState } from "react";
import { MdArrowRight } from 'react-icons/md';
import PopupForm from "./popupForm";
function CardSlider() {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <div className='mainCardsContainer'>
            <div className='card'>
                <div className='cardContainer'>
                    <p>Logo Startup <span className='deletePrice1'>$265</span></p>
                    <h2>$79</h2>
                    <ul className='pakageDetail'>
                        <li><MdArrowRight color='#fff' size={12} />6 Logo Design Concepts</li>
                        <li><MdArrowRight color='#fff' size={12} />2 Dedicated Logo Designer</li>
                        <li><MdArrowRight color='#fff' size={12} />6 Revisions</li>
                        <li><MdArrowRight color='#fff' size={12} />Free Business Card Design</li>
                        <li><MdArrowRight color='#fff' size={12} />Free Color Options</li>
                        <li><MdArrowRight color='#fff' size={12} />Free Grey Scale Format</li>
                        <li><MdArrowRight color='#fff' size={12} />Free Icon Design</li>
                        <li><MdArrowRight color='#fff' size={12} />Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                        <li><MdArrowRight color='#fff' size={12} />24 - 48 Business Hours Turn Around Time</li>
                        <li><MdArrowRight color='#fff' size={12} />100% Satisfaction</li>
                        <li><MdArrowRight color='#fff' size={12} />100% Ownership Rights</li>
                        <li><MdArrowRight color='#fff' size={12} />Money Back Guarantee</li>
                        <li><MdArrowRight color='#fff' size={12} />Dedicated Account Manager</li>
                    </ul>
                    <h4 onClick={togglePopup} className='cardbutton'>SUBMIT</h4>
                    {showPopup && <PopupForm />}
                </div>
            </div>
            <div className='card'>
                <div className='cardContainer'>
                    <p>The Boss <span className='deletePrice2'>$1996</span></p>
                    <h2>$599</h2>
                    <ul className='pakageDetail'>
                        <li> <MdArrowRight color='#fff' size={12} />3D/Mascolt Animated Logo</li>
                        <li><MdArrowRight color='#fff' size={12} />Unlimited Original Logo Concepts</li>
                        <li><MdArrowRight color='#fff' size={12} />8 Dedicated Logo Designer (industry Specific) </li>
                        <li><MdArrowRight color='#fff' size={12} />Unlimited Revisions</li>
                        <li><MdArrowRight color='#fff' size={12} />Stationary Designs ( Business Card, Letterhead)</li>
                        <li><MdArrowRight color='#fff' size={12} />500 Business Cards</li>
                        <li><MdArrowRight color='#fff' size={12} />Email Signature Design</li>
                        <li><MdArrowRight color='#fff' size={12} />With Grey Scale Format</li>
                        <li><MdArrowRight color='#fff' size={12} />Free Icon Design</li>
                        <li><MdArrowRight color='#fff' size={12} />Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                        <li><MdArrowRight color='#fff' size={12} />24 - 48 Business Hours Turn Around Time</li>
                        <li><MdArrowRight color='#fff' size={12} />100% Satisfaction</li>
                        <li><MdArrowRight color='#fff' size={12} />Dedicated Account Manager</li>
                        <li><MdArrowRight color='#fff' size={12} />Money Back Guarantee</li>
                    </ul>
                    <h4 onClick={togglePopup} className='cardbutton'>SUBMIT</h4>
                    {showPopup && <PopupForm />}
                </div>
            </div>
            <div className='card'>
                <div className='cardContainer'>
                    <p className='platinum'>Logo Platinum <span className='deletePrice3'>$997</span></p>
                    <h2>$299</h2>
                    <ul className='pakageDetail'>
                        <li><MdArrowRight color='#fff' size={12} />Unlimited Original Logo Concepts</li>
                        <li><MdArrowRight color='#fff' size={12} />8 Dedicated Logo Designer (industry Specific) </li>
                        <li><MdArrowRight color='#fff' size={12} />Unlimited Revisions</li>
                        <li><MdArrowRight color='#fff' size={12} />Stationary Designs (Business Card, Letterhead)</li>
                        <li><MdArrowRight color='#fff' size={12} />500 Business Card</li>
                        <li><MdArrowRight color='#fff' size={12} />Email Signature Design</li>
                        <li><MdArrowRight color='#fff' size={12} />With Grey Scale Format</li>
                        <li><MdArrowRight color='#fff' size={12} />Free Icon Designs</li>
                        <li><MdArrowRight color='#fff' size={12} />Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                        <li><MdArrowRight color='#fff' size={12} />24 - 48 Business Hours Turn Around Time</li>
                        <li><MdArrowRight color='#fff' size={12} />100% Satisfaction</li>
                        <li><MdArrowRight color='#fff' size={12} />Money Back Guarantee</li>
                        <li><MdArrowRight color='#fff' size={12} />Dedicated Account Manager</li>
                    </ul>
                    <h4 onClick={togglePopup} className='cardbutton'>SUBMIT</h4>
                    {showPopup && <PopupForm />}
                </div>
            </div>
        </div>
    );
}

export default CardSlider;