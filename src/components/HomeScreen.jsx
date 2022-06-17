import React, { useState } from "react";
import "../homescreen.css";
import LoginScreen from "./LoginScreen";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import pic1 from "../images/netflix-jumbotron-card-img-1.png";
import pic2 from "../images/netflix-jumbotron-card-img-2.png";
import pic3 from "../images/netflix-jumbotron-card-img-3.png";

function HomeScreen() {
  // const [signup, setsignup] = useState(false);
  // const [buttondiv, setdiv] = useState(false);
  // const [email, setemail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="homescreen">
      <div className="header">
        <img
          style={{ cursor: "pointer" }}
          className="homescreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <Link to="/login">
          <button
            className="homescreen_signin"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </Link>
        <div className="background_gradient"></div>
      </div>

      <div className="homescreen_content">
        <h1>Unlimited films, TV programmes and more.</h1>
        <h3>Watch anywhere.Cancel at anytime.</h3>
        <p>
          Ready to watch?Enter your email to create or restart your membership
        </p>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button className="button">GET STARTED</button>
        </div>
      </div>

      <div className="mid-section firstSection">
        <div className="mid-content">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <img src={pic1} alt="website_op_in the chat guyz" />
      </div>
      <div className="mid-section secondSection">
        <div className="mid-content">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <img src={pic2} alt="" />
      </div>
      <div className="mid-section thirdSection">
        <div className="mid-content">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <img src={pic3} alt="" />
      </div>
      <div className="mid-section fourthSection">
        <div className="mid-content">
          <h1>Create profiles for children.</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <img
          src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"
          alt=""
        />
      </div>
      <div className="questions-section">
        <h1>Frequently Asked Questions</h1>
        <div className="mid-section-content">
          <button className="mid-buttons">What is Netflix?</button>
          <button className="mid-buttons">How much does Netflix Cost ?</button>
          <button className="mid-buttons">Where can i watch ?</button>
          <button className="mid-buttons">How do I cancel ?</button>
          <button className="mid-buttons">What can I Watch ?</button>
          <button className="mid-buttons">Is netflix good for kids ?</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
