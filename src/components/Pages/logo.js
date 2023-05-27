import React from "react";
// import { BsPlayCircle } from 'react-icons/bs';
import PortfolioOne from '../../images/p1.jpg';
import PortfolioTwo from '../../images/p2.jpg';
import PortfolioThree from '../../images/p3.jpg';
import PortfolioFour from '../../images/p4.jpg';
import PortfolioFive from '../../images/p5.jpg';
import PortfolioSix from '../../images/p6.jpg';
// import PopupForm from './popupForm';

function LogoPortfolio() {

    // const [showPopup, setShowPopup] = useState(false);
    // const togglePopup = () => {
    //     setShowPopup(!showPopup);
    // };

    return (
        <div className='centerTwo'>
            <div className='cTwoHeading'>
                <h2>What Type Is your Logo?</h2>
                <p>Expertly Designed Logo Design Services to Boost Brand Identity.</p>
            </div>
            <div className='containerTwo'>
                <div className='Imgcontainer'>
                    <img width={320} height={239} src={PortfolioThree} />
                    <div className='descript'>
                        <p>
                            <span>Illustrative logos </span>
                            design gives a logo
                            the depth that a 2D logo fails
                            to give. 3D logo designs almost
                            bring the logo to life giving
                            it realistic lusters.

                        </p>
                    </div>
                    <div className='btn'>
                        <a className='Imgbutn' href="#"  >Get Started</a>
                    </div>
                </div>
                <div className='Imgcontainer'>
                    <img width={320} height={239} src={PortfolioFour} />
                    <div className='descript'>
                        <p>
                            <span>3D Logos </span>
                            design gives a logo
                            the depth that a 2D logo fails
                            to give. 3D logo designs almost
                            bring the logo to life giving
                            it realistic lusters.
                        </p>
                    </div>
                    <div className='btn'>
                        <a className='Imgbutn' href='#'  >Get Started
                        </a>
                        {/* {showPopup && <PopupForm />}
                        onClick={togglePopup} */}
                    </div>
                </div>
                <div className='Imgcontainer'>
                    <img width={320} height={239} src={PortfolioTwo} />
                    <div className='descript'>
                        <p>
                            <span>typography </span>
                            logo designs use bold typography
                            to directly get the message across
                            using the corporation or brand logo name.
                        </p>
                    </div>
                    <div className='btn'>
                        <a className='Imgbutn' href='#' >Get Started
                        </a>
                        {/* {showPopup && <PopupForm />}
                        onClick={togglePopup} */}
                    </div>
                </div>
            </div>
            <div className='containerTwo'>
                <div className='Imgcontainer'>
                    <img width={320} height={239} src={PortfolioSix} />
                    <div className='descript'>
                        <p>
                            <span>Pictorial logo </span>
                            is somewhat similar to an icon
                            logo in a way that it employs a
                            graphic based design that is the
                            noticeable or impactful.
                        </p>
                    </div>
                    <div className='btn'>
                        <a className='Imgbutn' href='#'  >Get Started
                        </a>
                        {/* {showPopup && <PopupForm />}
                        onClick={togglePopup} */}
                    </div>
                </div>
                <div className='Imgcontainer'>
                    <img width={320} height={239} src={PortfolioOne} />
                    <div className='descript'>
                        <p>
                            <span>3D Logos </span>
                            design gives a logo
                            the depth that a 2D logo fails
                            to give. 3D logo designs almost
                            bring the logo to life giving
                            it realistic lusters.
                        </p>
                    </div>
                    <div className='btn'>
                        <a className='Imgbutn' href='#'  >Get Started
                        </a>
                        {/* {showPopup && <PopupForm />}
                        onClick={togglePopup} */}
                    </div>
                </div>
                <div className='Imgcontainer'>
                    <img width={320} height={239} src={PortfolioFive} />
                    <div className='descript'>
                        <p>
                            <span>typography </span>
                            logo designs use bold typography
                            to directly get the message across
                            using the corporation or brand logo name.
                        </p>
                    </div>
                    <div className='btn'>
                        <a className='Imgbutn'  >Get Started
                        </a>
                        {/* {showPopup && <PopupForm />} */}
                        {/* onClick={togglePopup} */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LogoPortfolio;