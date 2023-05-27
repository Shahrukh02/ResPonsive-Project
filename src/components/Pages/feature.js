import React from "react";
import { BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs';
import { GiPayMoney } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

function Feature() {
    return (
        <div className='centerThree'>
            <div className='featuresContainer'>
                <div className='feature'>
                    <h2>
                        Other Features
                    </h2>
                </div>
                <div className='feacont'>
                    <div className='feaOne'>
                        <BsFillFileEarmarkSpreadsheetFill className='feaIcon' color='#fff' size={30} />
                        <a href='#'>Fastest<br /> turn-Around</a>
                    </div>
                    <div className='feaOne'>
                        <GiPayMoney className='feaIcon' color='#fff' size={30} />
                        <a href='#'>Money<br />Back Guarantee</a>
                    </div>
                    <div className='feaOne'>
                        <FaAward className='feaIcon' color='#fff' size={30} />
                        <a href='#'>Award<br />Wining Team</a>
                    </div>
                    <div className='feaOne'>
                        <MdOutlineDesignServices className='feaIcon' color='#fff' size={30} />
                        <a href='#'>Unique <br />Design Guarantee</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;