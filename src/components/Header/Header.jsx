import Navbar from "./Navbar";
import "./Header.css";
import { IoPerson } from "react-icons/io5";
import SignUp from "../Login/SignUp";
import LogIn from "../Login/Login";
import { useContext, useState } from "react";
import { UserContext } from "../../context/usercontext";

function Header() {
  const { user, isUserloggedIn } = useContext(UserContext);
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
          <h1 className="title">Timeless Gallery </h1>
          {user && <h2 className="title">{user.name}</h2>}
          <button onClick={toggle} className="login-icon">
            <IoPerson />
          </button>
        </div>
        <Navbar />
      </header>
      {isUserloggedIn ? (
        <div>Hola usuario</div>
      ) : (
        seen &&
        (isSignUp ? (
          <SignUp toggle={toggle} toggleForm={toggleForm} />
        ) : (
          <LogIn toggle={toggle} toggleForm={toggleForm} />
        ))
      )}
    </>
  );
}

export default Header;
