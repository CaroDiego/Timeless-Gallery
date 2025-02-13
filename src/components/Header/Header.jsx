import Navbar from "./Navbar";
import './Header.css';
import { IoPerson } from "react-icons/io5";
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">Timeless Gallery</h1>
        <IoPerson className="login-icon" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
