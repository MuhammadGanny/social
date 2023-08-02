
import React, { useState } from 'react';
import Logo from "../logo.png";



const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(""); // Clear any previous email error on change
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(""); // Clear any previous password error on change
  };

  const handleSignIn = () => {
    // Basic validation
    if (email.trim() === "") {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter your password.");
      return;
    }

    // If all validations pass, you can proceed with signing in the user
    console.log("Signing in...");
  };

  return (
    <>
      <div className="App">
        <div className="navbar">
          <div className="logo">
            <img className="Netflix-logo" src={Logo} alt="" />
          </div>
        </div>
        <div className="main-page">
          <div className="container1">
            <div className="signin-page">
              <h2 className="signin-head">Sign In</h2>
              <div className="input-fields">
                <div className="email">
                  <input
                    className="email-inp"
                    type="text"
                    placeholder="Email or phone number"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <div className="error-message">{emailError}</div>}
                </div>
                <div className="password">
                  <input
                    className="password-inp"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
              </div>
              <button onClick={handleSignIn} type="button" className="signin-button">
                Sign In
              </button>
              <div className="help-section">
                <div className="remember">
                  <input className="check" type="checkbox" />
                  Remember me
                </div>
                <div className="need-help">Need help?</div>
              </div>
              <div className="new-to-netflix">
                <p>New to Netflix?</p>
                <p className="signup-now">Sign up now.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
