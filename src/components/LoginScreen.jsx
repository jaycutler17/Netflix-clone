import React, { useRef } from "react";
import "../Loginscreen.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function LoginScreen() {
  const navigate = useNavigate();
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const signinUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailref.current.value,
      passwordref.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        alert(error);
      });
  };

  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailref.current.value,
      passwordref.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
        className="netflix_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt=""
      />
      <div className="background_gradient_forlogin"></div>
      <div className="signin_div">
        <h1>Sign In</h1>
        <form className="login_content">
          <input
            ref={emailref}
            className="inputs"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            ref={passwordref}
            className="inputs"
            type="password"
            placeholder="Password"
          />
          <button onClick={signinUser} className="signin_button">
            Sign In
          </button>
        </form>
        <p className="OR">Or</p>
        <div className="before_footer">
          <a href="/">
            {" "}
            <button onClick={registerUser} className="sign_up_button">
              Sign Up
            </button>
          </a>
          <p className="info">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginScreen;
