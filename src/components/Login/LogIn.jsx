import { useEffect, useState } from "react";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { IoIosLock, IoIosMail } from "react-icons/io";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import SignIn from "./SignIn";

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        props.toggle();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [props]);

  return (
    <div className="popup">
      <div className="form-container">
        <button className="close-button" onClick={props.toggle}>
          <IoClose />
        </button>
        <h2 className="title">Log In</h2>
        <form className="form">
          <div className="email-container">
            <IoIosMail className="email-icon" />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={emailChange}
              required
            />
          </div>
          <div className="password-container">
            <IoIosLock className="password-icon" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={passwordChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>
            <p className="forgot-password">Forgot password?</p>
          </div>
          <button className="sign-in" type="submit">
            Log In
          </button>
          <p className="divider"> Or log in with</p>
          <div className="social-buttons">
            <button className="google">
              <FaGoogle />
            </button>
            <button className="facebook">
              <FaFacebook />
            </button>
            <button className="Apple">
              <FaApple />
            </button>
          </div>
          <p className="no-account">
            Don't have an account?{" "}
            <a href="#" className="create-account" onClick={props.toggleForm}>
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
