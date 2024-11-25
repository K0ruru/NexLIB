import React, { useState } from "react";
import "./login.scss";
import Wave from "../../assets/wave-1.png";
import NexLIB from "../../assets/NexLIB-logo.png";
import "boxicons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev); // Toggle the state
  };

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="floating-container">
            <div className="floating-modal">
              <div className="left">
                <div className="wave-container">
                  <img src={Wave} alt="wave" className="graphic" />
                </div>
                <div className="floating-glass">
                  <div className="glass">
                    <div className="logo">
                      <img src={NexLIB} alt="" />
                    </div>
                    <div className="line"></div>
                    <div className="text-content">
                      <h2>Hey...</h2>
                      <h1>Welcome Back !</h1>
                      <p>
                        Please login using the credentials that has been
                        provided <br />
                        to you.
                      </p>
                    </div>
                    <div className="footer">
                      <p>
                        <strong>Don't have an account?</strong>
                        <br />
                        Please contact our staff
                        <span className="italic"> somestaff@staff.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h1>Login</h1>
                <form action="#">
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-container">
                      <span className="input-icon">
                        <box-icon
                          name="mail-send"
                          size="sm"
                          color="#030a02"
                        ></box-icon>
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="password">Passphrase</label>
                    <div className="input-container">
                      <span className="input-icon">
                        <box-icon
                          name="key"
                          size="sm"
                          color="#030a02"
                        ></box-icon>
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  <div className="checkbox-container">
                    <label htmlFor="show-password">
                      <input
                        type="checkbox"
                        id="show-password"
                        name="show-password"
                        checked={showPassword}
                        onChange={handleTogglePassword}
                      />
                      <span className="checkmark"></span>
                      Show Passphrase
                    </label>
                  </div>

                  <button type="submit" className="login-button">
                    login →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
