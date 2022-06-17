import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import HomeScreen from "./components/HomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { logout, login, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./components/Profile";
import LoginScreen from "./components/LoginScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          {!user && (
            <>
              <Route
                path="/"
                element={
                  <>
                    {" "}
                    <HomeScreen />{" "}
                  </>
                }
              />
              <Route path="/login" element={<LoginScreen />} />
            </>
          )}
          {user && (
            <>
              {" "}
              <Route exact path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
          <Route
            path="*"
            element={<Navigate to={user ? "/profile" : "/login"} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
