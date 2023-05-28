import React, { useState } from "react";
import PopupForm from "./popupForm";
function Register() {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => setShowPopup(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="centerEight">
      <div className="registerContainer">
        <div className="registerText">
          <p>Register Now & Get Your Logo Delivered In Just One Hour</p>
          <h2>
            Get Custom Logo Designed in just <span>$35</span>
          </h2>
          <div className="registerButtons">
            <a className="buttonOne">Let's Talk</a>
            <a onClick={togglePopup} className="buttonTwo">
              Start Your Project
            </a>
            {showPopup && <PopupForm closePopup={closePopup} />}
            <a className="buttonThree">878-219-4792</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
