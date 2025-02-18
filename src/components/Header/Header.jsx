import Navbar from "./Navbar";
import "./Header.css";
import { IoPerson } from "react-icons/io5";
import SignUp from "../User/SignUp";
import LogIn from "../User/Login";
import { useContext, useState } from "react";
import { UserContext } from "../../context/usercontext";
import UserLogged from "../User/UserLogged";

function Header() {
  const { user, isUserloggedIn } = useContext(UserContext);
  const [seen, setSeen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function toggle() {
    setSeen(!seen);
    document.body.classList.toggle("popup-active", !seen);
  }

  function toggleForm() {
    setIsSignUp(!isSignUp);
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="title">Timeless Gallery</h1>
          {user && <h2 className="title">{user.name}</h2>}
          {isUserloggedIn ? (
            <UserLogged />
          ) : (
            <button onClick={toggle} className="login-icon">
              <IoPerson />
            </button>
          )}
        </div>
        <Navbar />
      </header>
      {!isUserloggedIn &&
        seen &&
        (isSignUp ? (
          <SignUp toggle={toggle} toggleForm={toggleForm} />
        ) : (
          <LogIn toggle={toggle} toggleForm={toggleForm} />
        ))}
    </>
  );
}

export default Header;
