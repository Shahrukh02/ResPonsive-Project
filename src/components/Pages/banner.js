import React from "react";
import BannerOne from '../../images/ban-logo1.webp';
import BannerTwo from '../../images/ban-logo2.png';
import BannerThree from '../../images/ban-logo3.png';
import BannerFour from '../../images/ban-logo4.webp';
import BannerFive from '../../images/ban-logo5.webp';
import BannerSix from '../../images/ban-logo6.png';
import BannerSeven from '../../images/ban-logo7.png';
import BannerEight from '../../images/ban-logo8.png';
import BannerNine from '../../images/ban-logo9.webp';
import { FaUser, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useState, useRef } from "react";
import swal from "sweetalert";
import emailjs from '@emailjs/browser';

function Banner() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a9lr0cm', 'template_ks0nx0a', form.current, 'nIBMmDlp4hl4SWd-X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const [details, setDetails] = useState({
        uName: '',
        uEmail: '',
        uPhone: '',
    });

    const validateEmail = (uEmail) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return regex.test(uEmail);
    };
    const validatePhoneNumber = (uPhone) => {
        const regexPhone = /^(\+92|0)?3[0-9]{2}[0-9]{7}$/;
        return regexPhone.test(uPhone);

    }
    const PostData = async (e) => {
        e.preventDefault();
        const { uName, uEmail, uPhone } = details;

        if (uName && uEmail && uPhone) {
            if (!validateEmail(uEmail)) { // Modified condition here
                swal({
                    title: "Error!",
                    text: "Invalid Email Format!",
                    icon: "error",
                });
            }
            else if (!validatePhoneNumber(uPhone)) {
                swal({
                    title: "Error!",
                    text: "Invalid Phone Number Format!",
                    icon: "error",
                });
            }
            else {
                const res = await fetch("https://logowebsite-90b5e-default-rtdb.asia-southeast1.firebasedatabase.app/logowebsiteform.json", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        uName,
                        uEmail,
                        uPhone,
                    }),
                });

                if (res.ok) {
                    setDetails({
                        uName: '',
                        uEmail: '',
                        uPhone: '',
                    });
                    console.log('chala console form jammaa');
                    swal({
                        title: "Successfully Done",
                        text: "Clicked OK button!",
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Error!",
                        text: "Please Fill Form!",
                        icon: "error",
                    });
                }
            }
        } else {
            swal({
                title: "Error!",
                text: "All Fields Required!",
                icon: "error",
            });
        }
    };
    return (
        <div className='centerOne'>
            <div className='heading1'>
                <div className="leftB"></div>
                <h2>Premuim Custom <span>Logo Design Service</span></h2>
                <h2 className='heading2'>In Just 24 Hours</h2>
                <p className='heading3'>Get your custom logo designed by the most reliable Design Agency</p>
                <h2 className='heading4'>SIGNUP NOW TO RESERVE<span> 70% DISCOUNT</span></h2>
                <div className="rightB"></div>
            </div>
            <div className='formContainer'>
                <form onSubmit={sendEmail} ref={form} className='form'>
                    <input className='nameField' type='text' name="from_user" required='required'
                        placeholder='Your Full Name' onChange={(e) =>
                            setDetails({ ...details, uName: e.target.value })} />
                    <FaUser color='#602577' className='userIcon' size={14} />
                </form>
                <form className='form'>
                    <input className='emailField' type='email' name="from_email" required='required'
                        placeholder='Your Email Address' onChange={(e) =>
                            setDetails({ ...details, uEmail: e.target.value })} />
                    <MdEmail color='#602577' className='userIcon' size={14} />
                </form>
                <form className='form'>
                    <input className='phoneField' type='number' name="message" required='required'
                        placeholder='Phone Number' onChange={(e) =>
                            setDetails({ ...details, uPhone: e.target.value })} />
                    <FaPhone color='#602577' className='userIcon' size={14} />
                </form>
                <form className='form'>
                    <button onClick={PostData} className='submitBtn' type='submit'>SUBMIT</button>
                </form>
            </div>
            <div className='bannerImg1'>
                <img src={BannerOne} />
            </div>
            <div className='bannerImg2'>
                <img src={BannerTwo} />
            </div>
            <div className='bannerImg3'>
                <img src={BannerThree} />
            </div>
            <div className='bannerImg4'>
                <img src={BannerFour} />
            </div>
            <div className='bannerImg5'>
                <img src={BannerFive} />
            </div>
            <div className='bannerImg6'>
                <img src={BannerSix} />
            </div>
            <div className='bannerImg7'>
                <img src={BannerSeven} />
            </div>
            <div className='bannerImg8'>
                <img src={BannerEight} />
            </div>
            <div className='bannerImg9'>
                <img src={BannerNine} />
            </div>
        </div>
    );
}


export default Banner;