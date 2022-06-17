import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "../profile.css";
import Navbar from "./Navbar";
import Planscreen from "./Planscreen";

function Profile() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const signoutMe = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="profile">
      <Navbar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
            className="profile_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profile_content">
            <h2>{user.email}</h2>
            <h3>Plans(Current Plan : Basic)</h3>
            <div className="profile_subscriptions">
              <Planscreen plan="Basic" quality="720p" />
              <Planscreen plan="Standard" quality="1080p" />
              <Planscreen plan="Premium" quality="4k HDR" />
            </div>
            <button onClick={signoutMe} className="signout_button">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
