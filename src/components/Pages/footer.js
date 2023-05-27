import React from "react";
import { BsFacebook, BsYoutube, BsLinkedin } from 'react-icons/bs';
import Logo from '../../images/logo.png';
import Solution from '../../images/solution.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <div className='footerLogo'>
                    <img src={Logo} height={'auto'} />
                    <p>
                        We are a Brand Identity Development
                        Company that enjoys sharing the
                        value of brands with clients All
                        over the world.
                    </p>
                </div>
                <div className='footerContact'>
                    <h4>Contact</h4>
                    <div className='contactList'>
                        <p>Phone: <a href='#'>+1 878-219-4792</a></p>
                        <p>Email: <a href='#'>info@usdesigncentral.com</a></p>
                        <p>Addres: 15 Broadway Lynn Massachusetts 01904</p>
                    </div>
                </div>
                <div className='footerSolution'>
                    <h4>Our Solution</h4>
                    <img width={247.67} height={55.16} src={Solution} />
                </div>
            </div>
            <div className='footerCopywrite'>
                <div className='footerCopywriteContainer'>
                    <p>
                        Copyright &copy; 2023 The US Design Central. All Rights Reserved.
                    </p>
                    <div className='footerLink'>
                        <ul>
                            <li><a className='social' href='#'><BsFacebook size={30} className='iconF' /></a></li>
                            <li><a className='social' href='#'><BsYoutube size={30} className='iconY' /></a></li>
                            <li><a className='social' href='#'><BsLinkedin size={30} className='iconL' /></a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <p className='disclamer'><strong>Disclaimer:</strong> Your call will be recorded for quality assurance purpose.</p>
        </div>
    );
}

export default Footer;