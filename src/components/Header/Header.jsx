import Navbar from "./Navbar";
import "./Header.css";
import { IoPerson } from "react-icons/io5";
import SignIn from "../Login/SignIn";
import LogIn from "../Login/Login";
import { useState } from "react";

function Header() {
  const [seen, setSeen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function toggle() {
    setSeen(!seen);
    if (!seen) {
      document.body.classList.add("popup-active");
    } else {
      document.body.classList.remove("popup-active");
    }
  }

  function toggleForm() {
    setIsSignUp(!isSignUp);
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="title">Timeless Gallery</h1>
          <button onClick={toggle} className="login-icon">
            <IoPerson />
          </button>
        </div>
        <Navbar />
      </header>
      {seen ? (
        isSignUp ? (
          <SignIn toggle={toggle} toggleForm={toggleForm} />
        ) : (
          <LogIn toggle={toggle} toggleForm={toggleForm} />
        )
      ) : null}
    </>
  );
}

export default Header;
