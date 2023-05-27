import React from "react";
import { BsPlayCircle } from 'react-icons/bs';
import PackageImg from '../../images/awards.webp';
function Slider() {
    return (
        <div className="topPakages">
            <div className='packageName'>
                <h2>Logo Combo</h2>
                <div className='packageContainer'>
                    <ul className='packageDetail'>
                        <li> Unlimited Original Logo Concepts</li>
                        <li> 8 Dedicated Logo Designer (Industry Specific)</li>
                        <li> Unlimited Revisions</li>
                        <li> 3 Page Basic Website</li>
                        <li> Stationery Design (Business Card, Letterhead, Envelope)</li>
                        <li> Brand Book</li>
                        <li> 500 Business Cards </li>
                        <li> 500 Letterheads</li>
                        <li> Email Signature Design</li>
                        <li> Social Media Designs (Facebook, Twitter, Instagram)</li>
                        <li> 2 Sided Flyer OR Bi-Fold Brochure Design</li>
                        <li> With Grey Scale Format</li>
                        <li> Free Icon Design</li>
                        <li> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                        <li> 24 - 48 Business Hours Turn Around Time</li>
                        <li>More Feature</li>
                        <li> 100% Satisfaction</li>
                        <li> 100% Ownership Rights</li>
                        <li> Money Back Guarantee</li>
                        <li> Dedicated Account Manager</li>
                    </ul>
                </div>
                <div className='priceContainer'>
                    <div className='price'>
                        <h2>$3330</h2>
                        <h3>$799</h3>
                        <div className='packageBtn'>
                            <a className='packageImgbutn' href='#'>Order Now <BsPlayCircle color='#000' size={11} /></a>
                        </div>
                        <img className='packageImg' src={PackageImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;