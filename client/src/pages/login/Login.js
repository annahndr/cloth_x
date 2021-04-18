import "./login.scss";
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  }

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  }

   const handleFirstNameChange = (evt) => {
    setFirstName(evt.target.value);
  }

  const handleLastNameChange = (evt) => {
    setLastName(evt.target.value);
  }

  const handleRegisterEmailChange = (evt) => {
    setRegisterEmail(evt.target.value);
  }

  const handleRegisterPasswordChange = (evt) => {
    setRegisterPassword(evt.target.value);
  }

  const handleConfirmPasswordChange = (evt) => {
    setConfirmPassword(evt.target.value);
  }

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    const emailToSubmit = email.trim();
    const passwordToSubmit = password.trim();
    if (!emailToSubmit || !passwordToSubmit) {
      return
    }
    axios.post("http://localhost:5000/api/users/login", {
    email: emailToSubmit,
    password: passwordToSubmit
  })
  .then(function (response) {
    console.log(response);
     setEmail("");
    setPassword("");
    localStorage.setItem('loggedIn', 'true');
    window.location.href = "/";
  })
  .catch(function (error) {
    console.log(error);
  });
  }

    const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    const firstNameToSubmit = firstName.trim();
    const lastNameToSubmit = lastName.trim();
    const registerEmailToSubmit = registerEmail.trim();
    const registerPasswordToSubmit = registerPassword.trim();
    const confirmPasswordToSubmit = confirmPassword.trim();
    let verified = false;
    if (registerPasswordToSubmit === confirmPasswordToSubmit) {
      verified = true;
    }
    axios.post("http://localhost:5000/api/users/register", {
    firstName: firstNameToSubmit,
    lastName: lastNameToSubmit,
    email: registerEmailToSubmit,
    password: registerPasswordToSubmit,
    verified: verified
  })
  .then(function (response) {
    console.log(response);
     setFirstName("");
     setLastName("");
     setRegisterEmail("");
     setRegisterPassword("");
     setConfirmPassword("");
    localStorage.setItem('loggedIn', 'true');
    window.location.href = "/";
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  return (
    <div className="login row">
      <div className="login-existing col-12 col-lg-6">
        <h2>Login</h2>
        <form className="login-form">
          <div>
            <label className="label-stacked">
              Email
              <input type="text" name="email" className="login-input" value={email} onChange={handleEmailChange} />
            </label>
          </div>
          <div>
            <label className="label-stacked">
              Password
              <input type="password" name="password" className="login-input" value={password} onChange={handlePasswordChange} />
            </label>
          </div>
          <div>
            <button type="button" className="login-submit" onClick={handleLoginSubmit}>Login</button>
          </div>
        </form>
      </div>
      <div className="login-register col-12 col-lg-6">
        <h2>Register</h2>
        <form className="login-form">
          <label className="label-stacked">
            First name
            <input type="text" name="firstName" className="login-input" value={firstName} onChange={handleFirstNameChange} />
          </label>
          <label className="label-stacked">
            Last name
            <input type="text" name="lastName" className="login-input" value={lastName} onChange={handleLastNameChange} />
          </label>
          <label className="label-stacked">
            Email
            <input type="text" name="email" className="login-input" value={registerEmail} onChange={handleRegisterEmailChange} />
          </label>
          <label className="label-stacked">
            Password
            <input type="password" name="password" className="login-input" value={registerPassword} onChange={handleRegisterPasswordChange} />
          </label>
          <label className="label-stacked">
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              className="login-input"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </label>
          <button type="button" className="login-submit" onClick={handleRegisterSubmit}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
