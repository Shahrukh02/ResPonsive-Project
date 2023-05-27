import React from 'react';
import { useState, useRef } from 'react';
import swal from 'sweetalert';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import emailjs from '@emailjs/browser';


function PopupForm({ closePopup }) {
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
            if (!validateEmail(uEmail)) {
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
        <div className="popup">
            <form onSubmit={sendEmail} ref={form} className='popupFrom'>

                {/* <AiOutlineCloseCircle color='#fff'  className='popupIcon' size={35} /> */}
                <h2 className='popupHeading'>Let's Build Something Great Together!</h2>
                <p className='popupSubHeading'>Drop us a line or view contact info.</p>

                <input placeholder='Your Name' className='popupInput' name='from_name' type="text" onChange={(e) =>
                    setDetails({ ...details, uName: e.target.value })} />

                <input placeholder='Email Address' className='popupInput' name='from_email' type="email" onChange={(e) =>
                    setDetails({ ...details, uEmail: e.target.value })} />

                <input placeholder='Phone Number ' className='popupInput' name='message' type="number" onChange={(e) =>
                    setDetails({ ...details, uPhone: e.target.value })} />

                <button className='popupButton' type="submit" onClick={PostData}>Submit</button>
                <button className='popupButton' type="submit" onClick={closePopup}>Close</button>
            </form>
        </div>
    );
};

export default PopupForm;